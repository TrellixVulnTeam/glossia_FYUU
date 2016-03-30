Search.setIndex({envversion:47,filenames:["index","introduction/index","introduction/native","introduction/quickstart","reference/api/gssa","reference/api/gssa.comparator","reference/api/gssa.families","reference/api/modules","reference/cdm/algorithms","reference/cdm/contexts","reference/cdm/index","reference/cdm/parameters","reference/comparison","reference/docker/container-module","reference/docker/fenics","reference/docker/index","reference/docs","reference/errors","reference/families","reference/gssa-xml","reference/index","reference/server/database","reference/server/executables","reference/server/index","reference/server/router","reference/server/transferrers"],objects:{"":{gssa:[4,0,0,"-"]},"gssa.client":{GoSmartSimulationClientComponent:[4,2,1,""],wrapped_coroutine:[4,4,1,""]},"gssa.client.GoSmartSimulationClientComponent":{finalize:[4,3,1,""],make_call:[4,3,1,""],onComplete:[4,3,1,""],onFail:[4,3,1,""],onJoin:[4,3,1,""],onLeave:[4,3,1,""],onStatus:[4,3,1,""],shutdown:[4,3,1,""]},"gssa.comparator":{comparator:[5,0,0,"-"],parse:[5,0,0,"-"],simulation_definition:[5,0,0,"-"]},"gssa.comparator.comparator":{Comparator:[5,2,1,""]},"gssa.comparator.comparator.Comparator":{diff:[5,3,1,""],equal:[5,3,1,""],left_text:[5,1,1,""],right_text:[5,1,1,""]},"gssa.comparator.parse":{gssa_xml_to_definition:[5,4,1,""]},"gssa.comparator.simulation_definition":{SimulationDefinition:[5,2,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition":{Algorithm:[5,2,1,""],Argument:[5,2,1,""],Needle:[5,2,1,""],NumericalModel:[5,2,1,""],Parameter:[5,2,1,""],Region:[5,2,1,""],Transferrer:[5,2,1,""],add_algorithm:[5,3,1,""],add_parameter:[5,3,1,""],algorithms:[5,1,1,""],diff:[5,3,1,""],name:[5,1,1,""],numerical_model:[5,1,1,""],parameters:[5,1,1,""],set_numerical_model:[5,3,1,""],set_transferrer:[5,3,1,""],transferrer:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Algorithm":{arguments:[5,1,1,""],content:[5,1,1,""],diff:[5,3,1,""],result:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Argument":{diff:[5,3,1,""],name:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Needle":{cls:[5,1,1,""],diff:[5,3,1,""],file:[5,1,1,""],index:[5,1,1,""],parameters:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.NumericalModel":{definition:[5,1,1,""],diff:[5,3,1,""],needles:[5,1,1,""],regions:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Parameter":{diff:[5,3,1,""],name:[5,1,1,""],typ:[5,1,1,""],value:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Region":{diff:[5,3,1,""],format:[5,1,1,""],groups:[5,1,1,""],id:[5,1,1,""],input:[5,1,1,""],name:[5,1,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Transferrer":{cls:[5,1,1,""],diff:[5,3,1,""],url:[5,1,1,""]},"gssa.config":{get:[4,4,1,""],get_api_version:[4,4,1,""],get_config_file:[4,4,1,""],init_config:[4,4,1,""],init_logger:[4,4,1,""]},"gssa.database":{SQLiteSimulationDatabase:[4,2,1,""]},"gssa.database.SQLiteSimulationDatabase":{"delete":[4,3,1,""],active_count:[4,3,1,""],addOrUpdate:[4,3,1,""],all:[4,3,1,""],create:[4,3,1,""],getStatusAndValidation:[4,3,1,""],getValidation:[4,3,1,""],markAllOld:[4,3,1,""],retrieve:[4,3,1,""],search:[4,3,1,""],setStatus:[4,3,1,""],updateValidation:[4,3,1,""]},"gssa.definition":{GoSmartSimulationDefinition:[4,2,1,""]},"gssa.definition.GoSmartSimulationDefinition":{cancel:[4,3,1,""],clean:[4,3,1,""],create_xml_from_string:[4,3,1,""],finalize:[4,3,1,""],finalized:[4,3,1,""],gather_diagnostic:[4,3,1,""],gather_results:[4,3,1,""],get_dir:[4,3,1,""],get_exit_status:[4,3,1,""],get_files:[4,3,1,""],get_guid:[4,3,1,""],get_remote_dir:[4,3,1,""],init_percentage_socket_server:[4,3,1,""],push_files:[4,3,1,""],set_exit_status:[4,3,1,""],set_remote_dir:[4,3,1,""],simulate:[4,3,1,""],summary:[4,3,1,""],update_files:[4,3,1,""],validation:[4,3,1,""]},"gssa.docker":{OutputHandler:[4,2,1,""],Submitter:[4,2,1,""]},"gssa.docker.OutputHandler":{on_moved:[4,3,1,""]},"gssa.docker.Submitter":{add_input:[4,3,1,""],cancel:[4,3,1,""],copy_output:[4,3,1,""],destroy:[4,3,1,""],finalize:[4,3,1,""],notify_output:[4,3,1,""],output:[4,3,1,""],reader:[4,1,1,""],receive_response:[4,3,1,""],run_script:[4,3,1,""],send_command:[4,3,1,""],set_update_socket:[4,3,1,""],writer:[4,1,1,""]},"gssa.error":{Error:[4,2,1,""],ErrorException:[4,5,1,""],ErrorMessage:[4,2,1,""],makeError:[4,4,1,""]},"gssa.error.ErrorException":{get_error:[4,3,1,""]},"gssa.families":{docker:[6,0,0,"-"],elmer_libnuma:[6,0,0,"-"],elmer_libnuma_legacy:[6,0,0,"-"],fenics:[6,0,0,"-"],g:[6,0,0,"-"],gssf_arguments:[6,0,0,"-"],mesher_gssf:[6,0,0,"-"],scan:[6,4,1,""]},"gssa.families.docker":{DockerFamily:[6,2,1,""]},"gssa.families.docker.DockerFamily":{cancel:[6,3,1,""],clean:[6,3,1,""],get_needle_parameter:[6,3,1,""],get_parameter:[6,3,1,""],get_percentage_socket_location:[6,3,1,""],load_definition:[6,3,1,""],prepare_simulation:[6,3,1,""],retrieve_files:[6,3,1,""],simulate:[6,3,1,""]},"gssa.families.elmer_libnuma":{ElmerLibNumaFamily:[6,2,1,""]},"gssa.families.elmer_libnuma.ElmerLibNumaFamily":{clean:[6,3,1,""],family_name:[6,1,1,""],get_needle_parameter:[6,3,1,""],get_parameter:[6,3,1,""],get_percentage_socket_location:[6,3,1,""],load_definition:[6,3,1,""],prepare_simulation:[6,3,1,""],retrieve_files:[6,3,1,""],to_xml:[6,3,1,""],validation:[6,3,1,""]},"gssa.families.elmer_libnuma_legacy":{ElmerLibNumaLegacyFamily:[6,2,1,""]},"gssa.families.elmer_libnuma_legacy.ElmerLibNumaLegacyFamily":{clean:[6,3,1,""],family_name:[6,1,1,""],get_needle_parameter:[6,3,1,""],get_parameter:[6,3,1,""],get_percentage_socket_location:[6,3,1,""],load_definition:[6,3,1,""],retrieve_files:[6,3,1,""],simulate:[6,3,1,""],to_xml:[6,3,1,""],validation:[6,3,1,""]},"gssa.families.fenics":{FenicsFamily:[6,2,1,""]},"gssa.families.fenics.FenicsFamily":{family_name:[6,1,1,""],prepare_simulation:[6,3,1,""]},"gssa.families.g":{GFoamFamily:[6,2,1,""]},"gssa.families.g.GFoamFamily":{family_name:[6,1,1,""]},"gssa.families.gssf_arguments":{GoSmartSimulationFrameworkArguments:[6,2,1,""]},"gssa.families.gssf_arguments.GoSmartSimulationFrameworkArguments":{to_list:[6,3,1,""]},"gssa.families.mesher_gssf":{MesherGSSFMixin:[6,2,1,""]},"gssa.families.mesher_gssf.MesherGSSFMixin":{init_mesher:[6,3,1,""],mesh:[6,3,1,""],to_mesh_xml:[6,3,1,""]},"gssa.family":{Family:[4,2,1,""],FamilyType:[4,2,1,""]},"gssa.family.Family":{cancel:[4,3,1,""],family_name:[4,1,1,""],get_needle_parameter:[4,3,1,""],get_parameter:[4,3,1,""],load_core_definition:[4,3,1,""],validation:[4,3,1,""]},"gssa.http_transferrer":{HTTPTransferrer:[4,2,1,""]},"gssa.http_transferrer.HTTPTransferrer":{configure_from_xml:[4,3,1,""],connect:[4,3,1,""],disconnect:[4,3,1,""],downloadFile:[4,3,1,""],pull_files:[4,3,1,""],push_files:[4,3,1,""],uploadFile:[4,3,1,""]},"gssa.parameters":{convert_parameter:[4,4,1,""],read_parameters:[4,4,1,""]},"gssa.server":{GoSmartSimulationServerComponent:[4,2,1,""]},"gssa.server.GoSmartSimulationServerComponent":{client:[4,1,1,""],current:[4,1,1,""],doApi:[4,3,1,""],doCancel:[4,3,1,""],doClean:[4,3,1,""],doCompare:[4,3,1,""],doFinalize:[4,3,1,""],doInit:[4,3,1,""],doProperties:[4,3,1,""],doRequestDiagnostic:[4,3,1,""],doRequestFiles:[4,3,1,""],doRequestResults:[4,3,1,""],doRetrieveStatus:[4,3,1,""],doSearch:[4,3,1,""],doSimulate:[4,3,1,""],doStart:[4,3,1,""],doTmpValidation:[4,3,1,""],doUpdateFiles:[4,3,1,""],doUpdateSettingsXml:[4,3,1,""],eventComplete:[4,3,1,""],eventFail:[4,3,1,""],getProperties:[4,3,1,""],onRequestAnnounce:[4,3,1,""],onRequestIdentify:[4,3,1,""],setDatabase:[4,3,1,""],setStatus:[4,3,1,""],updateStatus:[4,3,1,""]},"gssa.session":{GoSmartSimulationServerSession:[4,2,1,""]},"gssa.session.GoSmartSimulationServerSession":{doApi:[4,3,1,""],doCancel:[4,3,1,""],doClean:[4,3,1,""],doCompare:[4,3,1,""],doFinalize:[4,3,1,""],doInit:[4,3,1,""],doProperties:[4,3,1,""],doRequestDiagnostic:[4,3,1,""],doRequestFiles:[4,3,1,""],doRequestResults:[4,3,1,""],doRetrieveStatus:[4,3,1,""],doSearch:[4,3,1,""],doStart:[4,3,1,""],doTmpValidation:[4,3,1,""],doUpdateFiles:[4,3,1,""],doUpdateSettingsXml:[4,3,1,""],onJoin:[4,3,1,""],onRequestAnnounce:[4,3,1,""],onRequestIdentify:[4,3,1,""]},"gssa.sftp_transferrer":{SFTPTransferrer:[4,2,1,""]},"gssa.sftp_transferrer.SFTPTransferrer":{configure_from_xml:[4,3,1,""],connect:[4,3,1,""],disconnect:[4,3,1,""],pull_files:[4,3,1,""],push_files:[4,3,1,""]},"gssa.shadow_watcher":{observe:[4,4,1,""]},"gssa.tmp_transferrer":{TmpTransferrer:[4,2,1,""]},"gssa.tmp_transferrer.TmpTransferrer":{configure_from_xml:[4,3,1,""],connect:[4,3,1,""],disconnect:[4,3,1,""],pull_files:[4,3,1,""],push_files:[4,3,1,""]},"gssa.translator":{GoSmartSimulationTranslator:[4,2,1,""]},"gssa.translator.GoSmartSimulationTranslator":{get_files_required:[4,3,1,""],translate:[4,3,1,""]},"gssa.utils":{get_default_gateway:[4,4,1,""]},gssa:{client:[4,0,0,"-"],comparator:[5,0,0,"-"],config:[4,0,0,"-"],database:[4,0,0,"-"],definition:[4,0,0,"-"],docker:[4,0,0,"-"],error:[4,0,0,"-"],families:[6,0,0,"-"],family:[4,0,0,"-"],http_transferrer:[4,0,0,"-"],parameters:[4,0,0,"-"],server:[4,0,0,"-"],session:[4,0,0,"-"],sftp_transferrer:[4,0,0,"-"],shadow_watcher:[4,0,0,"-"],tmp_transferrer:[4,0,0,"-"],transferrer:[4,0,0,"-"],translator:[4,0,0,"-"],utils:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:function","5":"py:exception"},terms:{"_build":16,"abstract":[1,5,11],"boolean":11,"break":4,"case":[5,8,9,11,15,22,23],"catch":23,"class":[4,5,6,17,19,25],"default":[4,15,21,23],"enum":[4,11],"final":[4,23],"float":11,"function":5,"import":[4,14,16],"int":4,"long":3,"new":[1,4,13,15,16,23],"null":[11,21],"return":[4,5,8,12,15,17,23],"true":[4,6],"while":[0,8,11,15,23],abil:4,abl:5,about:[1,8,23],abov:[5,23],absolut:25,access:[3,4,13,14,15,23],accordingli:[17,23],account:12,accur:[8,18],achiev:15,across:17,activ:23,active_count:4,active_simul:4,add:[4,19,22,23],add_algorithm:5,add_input:4,add_paramet:5,addit:[4,23],addition:23,addorupd:4,addpid:6,address:4,adequ:8,administr:[0,8,15],after:[4,15,22,23],afterward:23,against:[12,15,23],agreement:0,aioeventhandl:4,akin:8,algorithmdefinit:8,all:[4,11,14,17,22],allow:[0,1,2,12,13,15,19,23,24,25],allow_resync:4,almost:4,along:5,alreadi:4,also:[2,4,5,18,19,22,23],alter:[0,1],altern:[4,25],although:[4,11],alwai:[4,11],ani:[3,4,8,11,15,16,17,18,22,23],announc:23,anoth:[5,11,12,19],anyth:[4,11,17],apach:0,api:[4,23],apidoc:16,app:17,appear:[4,11],appli:[2,11],applic:[4,8,23],applicationsess:4,approach:4,appropri:23,approxim:18,apt:3,arbitrari:[5,17],archiv:[4,25],arg:[4,6],argnam:8,argument:[],around:0,arrai:[4,11],assum:[4,25],asynchron:[4,23],asyncio:[4,23],attach:[3,11,23],attack:15,attribut:[],authent:22,author:[0,3,8,23],autobahn:[4,23],autom:14,automat:[15,17],avail:[2,3,4,23],awar:23,back:[4,15,17,23,25],backend:[0,1,4],background:[],backward:4,bar:11,base:[0,1,2,4,5,6,12],baseeventloop:4,basenam:23,basesess:4,basic:[4,11,17,18,23],basictyp:11,basictype1:11,basictype2:11,baw:6,bear:[4,11],becom:[15,16,25],been:[2,23,24],befor:[4,23,25],begin:23,behav:22,behaviour:[11,23],behind:4,beneath:17,better:4,between:[3,5,17,23,24],bit:4,block:4,bodi:[8,19],bool:4,both:[1,3,4,15,19,23],boundari:19,bridg:4,bug:[15,23],build:[],builder:4,bump:4,bundl:4,calculu:8,call:[4,8,15,23],call_soon_threadsaf:4,callback:4,can:[0,1,4,8,11,17,21],cancel:[1,4,6,17],cancer:[0,1],cannot:17,canon:4,capabl:[12,14,22],care:23,cast:4,categor:4,caught:17,caution:17,cdm:[5,8,11,12],certain:[4,15,23],certainli:4,cgal:[],chanc:4,chang:4,check:[4,15],choic:11,chosen_server_nam:2,clean:[4,6,22,23],client:[],client_directory_prefix:4,clinician:11,clone:[2,3],close:4,clsname:4,cmake:2,cmake_install_prefix:2,code:[0,4,5,10,17,18,20,21],coexist:11,collabor:0,collect:19,column:[11,21],com:[3,4,23],combin:[8,11,15],command:[2,3,4],commiss:0,common:4,commun:[4,18,23],complet:[4,5,17,21,23],compon:[0,5,11,18,23],compos:3,compris:[2,18,23],comput:0,concept:11,conceptu:[0,12],concern:8,concret:[],concurr:[],condit:8,config_fil:4,configfilenam:6,configur:[],configure_from_xml:4,confirm:4,conjunct:25,connect:[3,4,22,23],consequ:11,conserv:17,consist:15,constant:[8,11],constitut:18,consum:4,contact:22,container:[3,15],content:[],contigu:19,control:[],convent:8,convention:8,convert:14,convert_paramet:4,copi:4,copy_output:4,core:[4,14],coro:4,coroutin:23,correl:23,correspond:[0,11,18],could:[4,11],cours:18,creat:[4,11,13,15,16,21],create_xml_from_str:4,created_at:21,creep:15,critic:15,crossbar:24,current:[2,4,15,22,23,25],currentneedlelength:5,daemon:[3,4,15],data:[1,2,8,18],databas:[],date:25,dcmake_install_prefix:2,dct:4,debug:[6,25],def:22,defin:[1,5,8,11,19,23,25],definition_fil:4,delet:[4,21],deliv:22,denial:15,depend:[],deprec:4,describ:[5,10,11,19,22],descript:[],design:[1,2],dest:4,destin:[4,6],destinationstr:4,destinationurl:[4,25],destroi:4,detail:[2,4,12],dev:2,develop:[2,13,17,18,22],dfamili:19,dfile:19,diagnost:[1,4],dict:4,dictionari:4,dif:[5,12],diff:[5,12],differ:[4,8,11,12,23],difficulti:2,direct:[14,24],directli:10,directori:[2,4,18,19,21,22,23],disconnect:4,discoveri:23,distinct:19,distinguish:17,dle:[],doapi:4,doc:16,docancel:4,docker:[],dockerfamili:6,dockerfil:2,dockerlaunch:[2,3,4,15],dockerlaunchd:2,doclean:4,docompar:4,docstr:16,doe:[3,4,11,23],dofin:4,doinit:4,dolfin:14,don:4,doproperti:4,dorequestdiagnost:4,dorequestfil:4,dorequestresult:4,doretrievestatu:4,dosearch:4,dosimul:4,dostart:4,dot:4,dotmpvalid:4,doupdatefil:4,doupdatesettingsxml:4,down:5,download:4,downloadfil:4,dummi:[4,23],dundalk:0,dynam:[0,1],e_cancel:17,e_client:17,e_model:17,e_serv:17,e_unknown:17,each:[4,11,12,18,19,23,24],earliest:4,easi:0,easili:13,effect:21,either:[4,19],element:[4,11,14],elementtre:4,elmer:[0,2,6],elmer_binari:6,elmer_libnuma:[],elmer_libnuma_legaci:[],elmerlibnumafamili:6,elmerlibnumalegacyfamili:6,els:4,embed:[12,19],empti:22,enabl:[2,23],encod:11,end:[2,11,15],endpoint:4,engin:[0,11],enough:5,ensur:[3,4,11,15],entir:[2,15],entiti:11,entri:[4,11,21,23],environ:15,equal:5,equip:[0,1],equival:[5,23],err:17,error:[],error_statu:23,errorexcept:4,errormessag:4,especi:[11,23],essenti:[4,11,15],establish:23,estim:4,etc:[4,11,22],etc_loc:4,etre:4,european:0,even:8,event:[4,23],eventcomplet:4,eventfail:4,everyth:4,exact:[11,19],examin:4,exampl:[8,18],except:[4,8,17,23],execut:[],exemplar:15,exist:[0,2,4,22,23],exists_onli:4,exit:[4,21,22],exit_cod:[4,21],expect:[8,22,23],exposur:15,extend:18,extens:23,extern:[17,18],extract:4,fact:15,fail:[4,23],failur:[4,23],fall:4,fals:[4,6],famili:[],family_nam:[4,6],familytyp:4,fashion:11,fault:4,feedback:17,fenic:[],fenicsfamili:[6,15],fenicsproject:14,few:[],field:[11,19],file1:12,file2:12,file:[4,5,12,14,15,16,18,19,22,23,25],filenam:[4,19],files_requir:[4,6],filesystem:4,filesystemeventhandl:4,fill:11,find:[2,4,18,23],finit:14,fire:4,first:[4,12,23],fixm:4,flag:21,fledg:18,flexibl:11,folder:4,follow:[3,8,11,21,23,25],form:[4,8,11,19],format:[],former:4,forth:[5,11],forward:[23,25],found:4,framework:[0,1,14,18],free:4,from:[1,2,4,8,11,13,14,17,18,19,21,23,25],full:[4,22],fulli:[18,23],fullpath:4,fund:0,fundament:5,further:2,futur:17,gatewai:4,gather_diagnost:4,gather_result:4,gener:[2,5,14,15,17,19,23],geometr:[1,5],geometri:[5,12],get:[3,4],get_api_vers:4,get_config_fil:4,get_default_gatewai:4,get_dir:4,get_error:4,get_exit_statu:4,get_fil:4,get_files_requir:4,get_guid:4,get_needle_paramet:[4,6],get_paramet:[4,6],get_percentage_socket_loc:6,get_remote_dir:4,getproperti:4,getstatusandvalid:4,getvalid:4,gfoam:6,gfoamfamili:6,ghp:16,git:[2,3,16],github:[2,3,16],give:4,given:[4,11,12,18,23],global:[4,23],glossia:[],glot:4,gmsh:2,goosefoot:3,gosmart:[0,1,3],gosmartclienterror:17,gosmarterror:[17,23],gosmartmodelerror:17,gosmartservererror:17,gosmartsimul:[4,23],gosmartsimulationclientcompon:4,gosmartsimulationdefinit:4,gosmartsimulationframeworkargu:6,gosmartsimulationservercompon:4,gosmartsimulationserversess:4,gosmartsimulationtransl:4,got:4,grab:4,grant:0,group:[5,11,15,18,19],gssa:[],gssa_fil:[4,22],gssa_xml_to_definit:5,gssf:[5,8,15,17,18,19,22,23],gssf_argument:[],guarante:23,guid:[3,4,15,21,23],guid_start:4,hachiko:4,handi:4,handl:[4,19,23,25],have:[2,4,8,11,19,22,23,24],heavi:4,held:23,help:[17,22],helper:5,here:[4,10,19,23],hierarch:[4,11],higher:[4,18],highli:18,highlight:4,hoc:4,hold:11,home:0,host:[2,3,15,22],how:[4,5,19],howev:[2,5,17,19,23],html:16,http:[],httptransferr:[4,25],human:[5,12,19],hybrid:15,hypermodel:0,hypomodel:0,ideal:5,idempot:4,ident:11,identifi:[2,19,23],ignor:22,ignore_develop:4,illog:17,imag:[0,3,4,14,15,18],implement:[5,23],improv:25,in_progress:[4,17],inc:5,includ:[0,3,8,14,15,18,22,23],incompat:4,inconsist:4,incorpor:[5,11,14,19,23],index:[0,4,5,16,19],indic:[],inform:[1,4,5,13,21,23],ing:12,init:[4,23],init_config:4,init_logg:4,init_mesh:6,init_percentage_socket_serv:4,input:[1,4,5,15,17,19,22,23,25],input_fil:4,inputfilenam:19,insert:23,insid:[4,15],instal:[],installation_target:2,instanc:[3,4,8,11,15,19],instead:11,instruct:[2,4,18],integ:[4,11,19,21],integr:23,intend:[3,4,18],intent:18,intepret:17,interact:[0,11,22,23,24],interchang:[0,1],interfac:[0,1,4,11],intern:15,interpret:[4,11,18],intervent:15,introduct:[],invalid:11,invas:[0,1],ireland:0,issu:[2,17],itself:[5,12,15,19,22],join:[4,19],json:[4,11],just:4,kei:[4,5,6,22],key_fil:22,keyword:[],kill:15,know:8,known:[4,15,21,23],kwarg:[4,6],label:5,lambda:[5,8],languag:[8,24],last:[21,23],last_status_timestamp:23,later:4,latest:4,launch:[2,3,4,15,23],launcher:[],leakag:8,least:[11,18],leavetre:6,left:12,left_text:5,legaci:6,less:[8,17],level:[0,15,18,25],libjsoncpp:2,libnuma:6,librari:[14,19,23],librarytyp:19,lie:4,lieu:15,lift:4,like:[4,5],limit:[4,11],line:[],link:11,list:[2,4,19,23],listen:23,load:[4,12,23],load_core_definit:4,load_definit:6,local:[2,3,4,22,25],locat:[4,5,15,18,21,23,25],lock:4,log:4,longer:18,look:4,loop:4,lowercas:11,ltd:0,lxml:4,machin:[3,4,23,25],made:4,magic_script:4,mai:[2,3,4,8,11,17,18,19,23],main:[4,23],mainli:4,maintain:23,make:[2,4,16],make_cal:4,makeerror:4,manag:4,mani:[4,11,14,15,17],manipul:23,manual:15,map:23,mark:4,markallold:4,markdown:16,matc:[5,8],match:[4,11,17],mathemat:17,mean:[15,18,25],media:9,mediat:23,medic:11,medium:25,member:[8,19],mesh:[6,14,15,18,23],mesher:[14,15,18],mesher_gssf:[],meshergssfmixin:[6,15],messag:[4,5,22],metaclass:4,method:[4,23,25],methodolog:[],mict:[0,1],might:[4,23],migrat:18,mind:[2,4,11],minim:[0,1,15],mix:15,mixin:15,mkdir:2,model:[],modif:[0,2],modul:[],moment:4,monitor:1,more:[1,5,8,11,13,15,18,23],moreov:[3,12,15],most:[4,23],mount:15,move:25,msh:[14,15],much:23,multipl:11,munkr:2,must:[4,8,11,15],name:[4,5,8,11,12,19,22],namespac:[4,15],nativ:[],ncl:19,neatli:4,necessari:[15,18],necessarili:23,nee:[],need:[3,4,5,9,23,25],needl:[4,5,11,19],needle_index:[4,6],network:[23,25],nfile:19,nicer:5,nix:19,node:[4,8,19,22,25],non:[5,11,12],none:[4,5,6],normal:[3,4,9,25],note:[3,4,8,12,18,19,23],notif:23,notifi:23,notify_output:4,nproc:6,nth:4,numa:[0,2],number:[0,15,23],nume:[],numer:[0,1,4,5,8,11,12,17],numerical_model:5,numericalmodel:[5,19],numpi:0,object:[4,5,6,11,12],observ:4,observablemixin:4,occur:[4,15],off:4,often:9,omit:2,on_mov:4,onc:[4,15],oncomplet:4,onfail:4,onjoin:4,onleav:4,onli:[],onrequestannounc:4,onrequestidentifi:4,onstatu:4,onto:2,orchestr:[0,1,15],order:[4,19],ordin:[4,19],org:21,organ:[9,19],origin:[16,17],orphan:15,other:[3,5,12,18,24,25],otherwis:[4,11,19],our:23,out:[2,4,22,25],outfilenam:6,output:[4,12,22,23,25],output_fil:4,outputhandl:4,over:[11,23],page:[0,16],pair:[11,18],paramattrtyp:11,paramattrvalu:11,paramet:[],parameterid:11,paramnam:11,parramattrvalu:11,pars:[],part:[5,10,15,18,23],parti:[4,8],partial:25,particular:23,particularli:[11,25],pass:[4,11,12,17,21,23],past:21,path:25,pattern:[4,23],pde:14,per:[2,15],percentag:[4,21,23],percutan:5,perhap:4,permit:[4,23],persist:[2,23],perspect:8,phantom:9,physic:[0,1,9,11,17],pick:11,piec:[4,13],pip:3,place:[4,8,9,15],placehold:[],platform:[0,1],plug:18,point:[2,23],port:[2,3,4,22],possibl:[4,5,11,23],post:4,potenti:11,ppa:14,pre:[18,23],precaut:8,prematur:4,prepar:[4,11,23],prepare_simul:6,present:[0,4,15,21,23,25],prevent:11,primari:0,primarili:[4,16,22,25],print:4,prior:15,privileg:18,problem:17,procedur:[5,8,9,11,23],process:[3,5,22,23],processor:23,produc:[4,5],programm:17,progress:[1,4],progress_statu:23,project:[0,1],prompt:11,proper:18,properti:[4,23],protect:[15,23],protocol:[4,11,23],prove:23,proven:8,provid:[0,1,4,5,8,11,14,15,17,19,23,24],pub:23,publicli:3,publish:[4,23],publish_cb:4,pull:[3,4],pull_fil:4,purpos:[11,14,24,25],push:[4,16],push_fil:4,put:23,python:[],pythonocc:2,pyyaml:2,quickstart:[],rate:4,reach:23,read_paramet:4,readabl:[5,12,19,23],reader:4,readi:23,real:21,reason:[4,17],receiv:5,receive_respons:4,recognis:23,recommend:[2,24],record:[2,4,11,21],reduc:15,redund:15,ref:4,refer:[],referenc:[11,22],refus:[4,15],regener:16,region:[5,19],regist:[2,4,22,23],reinstat:25,rel:23,relat:[23,24],releas:4,relev:[10,15,25],reliabl:23,remain:[4,23],remot:[0,4,23],remote_dir:4,remote_root:[4,25],remov:[4,15,23],render:11,repetit:5,repli:[4,23],report:[4,23],repres:[5,11,18],represent:[4,11],request:[4,8,22,23],request_announc:[4,23],request_diagnost:4,request_fil:[4,23],request_identifi:[4,23],request_result:4,requir:[4,11,15,18,23],research:[0,1],resourc:19,respect:4,respond:23,respons:[3,4,11,17,23],restart:[2,3,15,23],restructuredtext:16,result:[4,5,8],resum:21,retriev:[1,4],retrieve_fil:6,retrieve_statu:[4,23],rformat:19,rgroup:19,ricalmodel:[],rid:19,right:12,right_text:5,rinput:19,risk:15,rname:19,root:[4,5],router:[],routin:[4,17,23],row:[4,21],rpc:[4,23],rst:16,run:[3,4,5,8,11,15,18,22,23],run_script:4,runtimeerror:4,sai:[5,11],same:[3,12,15,18,21,23],sampl:[9,24],sandbox:18,scan:[6,18],schedul:4,schema:19,scheme:15,scientif:14,score:[4,23],script:[4,12,14,22],search:[0,4],second:[12,25],section:[11,25],secur:[3,8,25],see:[1,2,5,13,15,19],seen:11,select:[11,19],send:[1,4,5,23],send_command:4,sent:4,separ:[2,4,5,12,18,23],seri:[5,14,23],server:[],server_hostnam:23,server_id:[4,23],servic:[0,15],session:[],set:[0,4,5,11,15,23,25],set_exit_statu:4,set_numerical_model:5,set_remote_dir:4,set_transferr:5,set_update_socket:4,setdatabas:4,setstatu:4,setting_final_timestep:11,setup:[3,15],sftp:[],sftp_host:22,sftp_port:22,sftptransferr:[4,25],should:[3,4,5,8,11,14,15,16,18,19,22,23,25],show:22,shutdown:4,sid:22,side:[3,4,11,17,23],silent:6,simdata_path:4,similar:11,simpl:[1,12,19],simplic:16,simulation_definit:[],simulation_id:23,simulationdefinit:[5,12,19],simultan:15,singl:18,situat:15,skip:[4,22],skip_clean:4,slightli:[11,18],slow:4,slug:8,small:0,sock:6,socket:[4,15,23],socket_loc:4,soft:[4,21],softwar:[0,13],sole:8,solid:19,solut:14,solver:[11,12,15],some:4,someth:8,sort:4,sourc:[2,4,5,6,18,19,24],sourcepath:4,sourceurl:25,sourceurlstr:4,space:8,special:23,specif:[2,4,11,18,19,21,22],specifi:[8,11,19,25],sphinx:16,sqlite:21,sqlitesimulationdatabas:4,stabl:[14,15],standalon:0,standard:[4,15],start:[2,3,4,14,15,23],statu:[4,21,23],status:21,status_socket:6,step:[4,15],still:[2,4,18],stl:19,stop:[4,15],str:4,strategi:[0,1],strictli:[5,9,15],string:[4,11,23],sub:23,subclass:[4,18],subdir:22,subdirectori:[4,22,24],subdomain:[5,19],submit:4,submitt:4,subscrib:[4,23],subsequ:3,success:[4,17],success_statu:23,sudo:[3,15],suffix:4,summari:4,supplement:4,suppli:[2,8,11,18,19],support:[0,3,23],sure:2,surfac:[19,22],synopsi:4,syntact:17,system:[2,3,4,18,25],tag:19,take:[5,8,9,11,12,15,22],tar:[19,22,25],target:[4,23],task:17,taverna:0,technic:11,technician:[0,1],technolog:[0,1],tell:4,templat:5,temporari:4,term:18,test:[0,2,22,23],text:[21,22],textual:[5,8],than:[8,18,23,25],that_xml:4,thei:[4,8,9,18,19,23],them:[15,19,22],themselv:18,theoret:10,theori:17,therebi:11,thi:[0,1,2,3,4,5,8,9,11,12,14,15,16,17,18,19,22,23,24,25],third:[4,8],this_xml:4,those:[4,11],thread:23,through:[0,1,4,23,24,25],thrown:17,tidi:15,tie:5,time:[4,5,8,11,21,23],timeout:23,timestamp:[4,21,23],tinyint:21,tmp:[],tmpdir:4,tmptransferr:[4,25],to_list:6,to_mesh_xml:6,to_xml:6,toc:[],todo:[4,5,18,25],told:4,too:15,tool:[0,4,8,11,12,17,18],traffic:3,transfer:[4,23,25],transferr:[],translat:[],transmiss:23,trasferr:25,treat:19,treatment:[0,1],tree:[19,24],trigger:[4,17,23],tripl:11,trivial:4,trust:18,truthi:22,try_json:[4,6],tumour:19,tupl:[4,11],turn:4,two:[4,12,15,18,23],txaio:4,typ:[4,5],type:[],typic:4,ubuntu:[2,3],ultim:8,unabl:12,uncertain:17,under:[0,25],underscor:8,understand:[5,8,12],unfinish:4,unhandl:23,unifi:17,uniqu:[11,19,23],univers:11,unknown:17,unless:[4,11],unnecessari:15,unprivileg:18,unspecifi:8,unsupport:13,until:23,unusu:0,unwieldi:4,unzip:25,updat:[4,6,15,21,25],update_callback:4,update_fil:[4,23],update_settings_xml:[4,23],update_statu:23,update_status_callback:4,updatestatu:4,updatevalid:4,upload:[4,16],uploadfil:4,upper:8,upstream:14,url:[4,5,25],urllib:4,usabl:25,usag:[],use_observ:4,user:[2,11,15,17,18,23],usr:4,usual:[4,5],uuid:[22,23],valid:[4,6,8,9,11,21],validation_xml:[4,23],valu:[4,5,11],variat:11,variou:24,veri:17,verifi:2,version:[4,12,16],via:[0,2,3,4,22,23],vigil:23,visibl:16,vivo:9,volum:4,volumetr:[14,15,19],vtk:2,vtp:19,wai:[5,18,19],wait:4,wait_for_respons:4,wamp:[],wamp_rout:2,want:2,watchdog:4,web:[0,1,24],websit:0,websocket:[2,22],websocket_port:22,webus:[],well:8,what:4,when:[4,11,23],where:[4,11,17,18],wherev:4,whether:4,which:[4,9,12,17,18,19,22,23],whichev:4,whitelist:3,whole:11,why:17,wide:[2,4],widget:11,win:11,wish:[17,22],within:[0,2,8,11,14,19,24],without:[15,23],work:[4,17,21,22,23],workflow:[],working_directori:[4,6,23],would:[5,15,18,23],wrap:[4,13,15,17,22],wrapped_coroutin:4,wrapper:12,write:[18,25],writer:4,written:11,www:[0,1,18,21],xml1:23,xml2:23,xml:[],xml_string:4,yaml:4,yet:17,yml:4,you:[2,3,21,22],your:[3,23],zone:19},titles:["Glossia","Introduction","Native Installation","Quickstart","gssa package","gssa.comparator package","gssa.families package","src","Go-Smart Simulation Algorithms","Clinical Domain Model - Contexts","Go-Smart Clinical Domain Model","Go-Smart Simulation Parameters","Comparison of GSSA-XML documents","Go-Smart Simulation Architecture - Python Docker Container Module","Go-Smart Simulation Architecture - FEniCS Family","Go-Smart Simulation Architecture - Docker Workflows","Documentation workflow","Error types","Go-Smart Simulation Model Families","Go-Smart Simulation Architecture XML Format (GSSA-XML)","Reference","Go-Smart Simulation Server Database","Executables","Go-Smart Simulation Architecture - Simulation Server","Go-Smart Simulation Architecture - WAMP Router","Transferrers"],titleterms:{aka:0,algorithm:8,architectur:[0,13,14,15,19,23,24],argument:22,attribut:11,background:[],build:2,caveat:15,cgal:15,client:[4,22],clinic:[9,10],compar:[5,12],comparison:12,concret:11,concurr:23,config:4,configur:25,contain:[3,13,15],content:[0,4,5,6],context:9,control:23,databas:[4,21],definit:[4,8,14,15],depend:[2,3],descript:22,docker:[4,6,13,15],document:[12,16],domain:[9,10],elmer_libnuma:6,elmer_libnuma_legaci:6,error:[4,17],execut:[3,22],famili:[4,6,14,18],fenic:[6,14],format:19,glossia:0,gssa:[0,4,5,6,12,19],gssf_argument:6,http:25,http_transferr:4,indic:0,instal:2,introduct:1,mesher_gssf:6,methodolog:12,model:[9,10,18],modul:[4,5,6,13],nativ:2,onli:15,option:22,packag:[4,5,6],paramet:[4,11],pars:5,placehold:11,posit:22,prune:15,python:13,quickstart:3,refer:20,router:24,server:[4,21,22,23],session:4,sftp:25,sftp_transferr:4,shadow_watch:4,simul:[0,3,8,11,13,14,15,18,19,21,22,23,24],simulation_definit:5,smart:[0,8,10,11,12,13,14,15,18,19,21,22,23,24],src:7,submodul:[4,5,6],subpackag:4,tabl:0,tmp:25,tmp_transferr:4,transferr:[4,25],translat:4,type:[11,17],usag:[2,12],util:4,variant:15,wamp:24,workflow:[15,16],xml:[12,19]}})