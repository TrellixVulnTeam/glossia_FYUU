# This file is part of the Go-Smart Simulation Architecture (GSSA).
# Go-Smart is an EU-FP7 project, funded by the European Commission.
#
# Copyright (C) 2013-  NUMA Engineering Ltd. (see AUTHORS file)
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


import os
import json
import asyncio
import logging
from .parameters import read_parameters, convert_parameter

logger = logging.getLogger(__name__)

register = {}


# This metaclass ensures that any new Family class gets registered for access
# from GSSA-XML
class FamilyType(type):
    def __init__(cls, clsname, bases, dct):
        if cls.family_name is not None:
            register[cls.family_name] = cls
            logger.info("Registered family: %s" % cls.family_name)
        return type.__init__(cls, clsname, bases, dct)


# Essential routines for Families
class Family(metaclass=FamilyType):
    family_name = None

    # Certain bits of the numerical model should always be present
    def load_core_definition(self, xml, parameters, algorithms):
        self._needles = {}
        self._regions = {}
        self._regions_by_meaning = {}

        # Start with the needles... one of the few CDM items that should appear
        # largely intact
        needles = xml.find('needles')
        if needles is not None:
            k = 0
            # Add each needle
            for needle in needles:
                # There should be a file definition - not necessarily a
                # filename, but possibly a library ID
                needle_file = needle.get("file")
                location = needle_file.split(':', 1)

                # If we have a traditional region, then we should have an STL
                # file definition
                if location[0] in ('surface', 'zone', 'both'):
                    target_file = "%s%s" % (needle.get("index"), os.path.splitext(location[1])[1])
                    needle_file = "%s:%s" % (location[0], target_file)
                    self._files_required[os.path.join('input', target_file)] = location[1]  # Any changes to local/remote dirs here

                # Add this needle and requisite structure
                self._needles[needle.get("index")] = {
                    "parameters": read_parameters(needle.find("parameters")),
                    "file": needle_file,
                    "class": needle.get("class")
                }
                # Record which needle, exactly, this is
                self._needle_order[k] = needle.get("index")
                k += 1

        # The global parameters were loaded before this, save them.
        self._parameters = parameters

        # Go through the regions in the model and process them
        regions = xml.find('regions')
        for region in regions:
            # Group regions by their type (e.g. organ/vessel)
            if region.get('name') not in self._regions_by_meaning:
                self._regions_by_meaning[region.get('name')] = []

            # Identify the input file for this region
            try:
                target_file = "%s%s" % (region.get("id"), os.path.splitext(region.get('input'))[1])
            except AttributeError as e:
                logger.error("Missing input file : %s, %s, %s" % (region.get('name'), region.get('input'), str(region.get('groups'))))
                raise e

            self._regions[region.get('id')] = {
                "format": region.get('format'),
                "meaning": region.get('name'),
                "input": target_file,
                "groups": json.loads(region.get('groups'))
            }

            # If we have a parameter saying that organs should be a subdomain of
            # a larger mesh, set the format to reflect its behaviour as a
            # subdomain, not a boundary. In fact, it may not even be a marked
            # surface at all.
            if self.get_parameter("SETTING_ORGAN_AS_SUBDOMAIN") and region.get('name') == 'organ':
                if self.get_parameter('SETTING_ORGAN_AS_SURFACE'):
                    self._regions[region.get('id')]["format"] = 'both'
                else:
                    self._regions[region.get('id')]["format"] = 'zone'

            # If we have a traditional format, add the input file to the
            # required list
            if self._regions[region.get('id')]["format"] in ('surface', 'zone', 'both', 'mesh') and region.get('input'):
                self._files_required[os.path.join('input', target_file)] = region.get('input')  # Any changes to local/remote dirs here

            self._regions_by_meaning[region.get('name')].append(self._regions[region.get('id')])

        self._algorithms = algorithms
        self._definition = xml.find('definition')

        # If the definition has a `location`, then load the files from there
        definition_location = self._definition.get('location')
        if not definition_location:
            if definition_location.endswith('.tar.gz'):
                self._files_required[os.path.join('input', 'start.tar.gz')] = self._definition.get('location')  # Any changes to local/remote dirs here
            else:
                raise RuntimeError("Uploaded definition must be of form *.tar.gz")
            self._definition = None
        # Otherwise, it is the body of the `definition` node
        else:
            self._definition = self._definition.text

    # Needle index can be either needle index (as given in XML input) or an
    # integer n indicating the nth needle in the order of the needles XML block
    def get_needle_parameter(self, needle_index, key, try_json=True):
        if needle_index not in self._needles and needle_index in self._needle_order:
            needle_index = self._needle_order[needle_index]

        value = self.get_parameter(key, try_json, self._needles[needle_index]["parameters"])

        return value

    # Retrieve a parameter from the global (not needle) list
    def get_parameter(self, key, try_json=True, parameters=None):
        if parameters is None:
            parameters = self._parameters

        if key not in parameters:
            return None

        parameter, typ = parameters[key]

        return convert_parameter(parameter, typ, try_json)

    @asyncio.coroutine
    def validation(self, working_directory=None):
        return None

from .families import scan

# Scan for family classes
scan()
