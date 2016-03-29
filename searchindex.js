Search.setIndex({envversion:47,filenames:["api/gssa","api/gssa.comparator","api/gssa.families","api/modules","cdm/algorithms","cdm/contexts","cdm/index","cdm/parameters","comparison","docker/container-module","docker/fenics","docker/index","docs","errors","families","gssa-xml","index","server/database","server/executables","server/index","server/router","server/transferrers"],objects:{"":{gssa:[0,0,0,"-"]},"gssa.client":{GoSmartSimulationClientComponent:[0,3,1,""],wrapped_coroutine:[0,2,1,""]},"gssa.client.GoSmartSimulationClientComponent":{finalize:[0,1,1,""],make_call:[0,1,1,""],onComplete:[0,1,1,""],onFail:[0,1,1,""],onJoin:[0,1,1,""],onLeave:[0,1,1,""],onStatus:[0,1,1,""],shutdown:[0,1,1,""]},"gssa.comparator":{comparator:[1,0,0,"-"],parse:[1,0,0,"-"],simulation_definition:[1,0,0,"-"]},"gssa.comparator.comparator":{Comparator:[1,3,1,""]},"gssa.comparator.comparator.Comparator":{diff:[1,1,1,""],equal:[1,1,1,""],left_text:[1,4,1,""],right_text:[1,4,1,""]},"gssa.comparator.parse":{gssa_xml_to_definition:[1,2,1,""]},"gssa.comparator.simulation_definition":{SimulationDefinition:[1,3,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition":{Algorithm:[1,3,1,""],Argument:[1,3,1,""],Needle:[1,3,1,""],NumericalModel:[1,3,1,""],Parameter:[1,3,1,""],Region:[1,3,1,""],Transferrer:[1,3,1,""],add_algorithm:[1,1,1,""],add_parameter:[1,1,1,""],algorithms:[1,4,1,""],diff:[1,1,1,""],name:[1,4,1,""],numerical_model:[1,4,1,""],parameters:[1,4,1,""],set_numerical_model:[1,1,1,""],set_transferrer:[1,1,1,""],transferrer:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Algorithm":{arguments:[1,4,1,""],content:[1,4,1,""],diff:[1,1,1,""],result:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Argument":{diff:[1,1,1,""],name:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Needle":{cls:[1,4,1,""],diff:[1,1,1,""],file:[1,4,1,""],index:[1,4,1,""],parameters:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.NumericalModel":{definition:[1,4,1,""],diff:[1,1,1,""],needles:[1,4,1,""],regions:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Parameter":{diff:[1,1,1,""],name:[1,4,1,""],typ:[1,4,1,""],value:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Region":{diff:[1,1,1,""],format:[1,4,1,""],groups:[1,4,1,""],id:[1,4,1,""],input:[1,4,1,""],name:[1,4,1,""]},"gssa.comparator.simulation_definition.SimulationDefinition.Transferrer":{cls:[1,4,1,""],diff:[1,1,1,""],url:[1,4,1,""]},"gssa.config":{get:[0,2,1,""],get_api_version:[0,2,1,""],get_config_file:[0,2,1,""],init_config:[0,2,1,""],init_logger:[0,2,1,""]},"gssa.database":{SQLiteSimulationDatabase:[0,3,1,""]},"gssa.database.SQLiteSimulationDatabase":{"delete":[0,1,1,""],active_count:[0,1,1,""],addOrUpdate:[0,1,1,""],all:[0,1,1,""],create:[0,1,1,""],getStatusAndValidation:[0,1,1,""],getValidation:[0,1,1,""],markAllOld:[0,1,1,""],retrieve:[0,1,1,""],search:[0,1,1,""],setStatus:[0,1,1,""],updateValidation:[0,1,1,""]},"gssa.definition":{GoSmartSimulationDefinition:[0,3,1,""]},"gssa.definition.GoSmartSimulationDefinition":{cancel:[0,1,1,""],clean:[0,1,1,""],create_xml_from_string:[0,1,1,""],finalize:[0,1,1,""],finalized:[0,1,1,""],gather_diagnostic:[0,1,1,""],gather_results:[0,1,1,""],get_dir:[0,1,1,""],get_exit_status:[0,1,1,""],get_files:[0,1,1,""],get_guid:[0,1,1,""],get_remote_dir:[0,1,1,""],init_percentage_socket_server:[0,1,1,""],push_files:[0,1,1,""],set_exit_status:[0,1,1,""],set_remote_dir:[0,1,1,""],simulate:[0,1,1,""],summary:[0,1,1,""],update_files:[0,1,1,""],validation:[0,1,1,""]},"gssa.docker":{OutputHandler:[0,3,1,""],Submitter:[0,3,1,""]},"gssa.docker.OutputHandler":{on_moved:[0,1,1,""]},"gssa.docker.Submitter":{add_input:[0,1,1,""],cancel:[0,1,1,""],copy_output:[0,1,1,""],destroy:[0,1,1,""],finalize:[0,1,1,""],notify_output:[0,1,1,""],output:[0,1,1,""],reader:[0,4,1,""],receive_response:[0,1,1,""],run_script:[0,1,1,""],send_command:[0,1,1,""],set_update_socket:[0,1,1,""],writer:[0,4,1,""]},"gssa.error":{Error:[0,3,1,""],ErrorException:[0,5,1,""],ErrorMessage:[0,3,1,""],makeError:[0,2,1,""]},"gssa.error.ErrorException":{get_error:[0,1,1,""]},"gssa.families":{docker:[2,0,0,"-"],elmer_libnuma:[2,0,0,"-"],elmer_libnuma_legacy:[2,0,0,"-"],fenics:[2,0,0,"-"],g:[2,0,0,"-"],gssf_arguments:[2,0,0,"-"],mesher_gssf:[2,0,0,"-"],scan:[2,2,1,""]},"gssa.families.docker":{DockerFamily:[2,3,1,""]},"gssa.families.docker.DockerFamily":{cancel:[2,1,1,""],clean:[2,1,1,""],get_needle_parameter:[2,1,1,""],get_parameter:[2,1,1,""],get_percentage_socket_location:[2,1,1,""],load_definition:[2,1,1,""],prepare_simulation:[2,1,1,""],retrieve_files:[2,1,1,""],simulate:[2,1,1,""]},"gssa.families.elmer_libnuma":{ElmerLibNumaFamily:[2,3,1,""]},"gssa.families.elmer_libnuma.ElmerLibNumaFamily":{clean:[2,1,1,""],family_name:[2,4,1,""],get_needle_parameter:[2,1,1,""],get_parameter:[2,1,1,""],get_percentage_socket_location:[2,1,1,""],load_definition:[2,1,1,""],prepare_simulation:[2,1,1,""],retrieve_files:[2,1,1,""],to_xml:[2,1,1,""],validation:[2,1,1,""]},"gssa.families.elmer_libnuma_legacy":{ElmerLibNumaLegacyFamily:[2,3,1,""]},"gssa.families.elmer_libnuma_legacy.ElmerLibNumaLegacyFamily":{clean:[2,1,1,""],family_name:[2,4,1,""],get_needle_parameter:[2,1,1,""],get_parameter:[2,1,1,""],get_percentage_socket_location:[2,1,1,""],load_definition:[2,1,1,""],retrieve_files:[2,1,1,""],simulate:[2,1,1,""],to_xml:[2,1,1,""],validation:[2,1,1,""]},"gssa.families.fenics":{FenicsFamily:[2,3,1,""]},"gssa.families.fenics.FenicsFamily":{family_name:[2,4,1,""],prepare_simulation:[2,1,1,""]},"gssa.families.g":{GFoamFamily:[2,3,1,""]},"gssa.families.g.GFoamFamily":{family_name:[2,4,1,""]},"gssa.families.gssf_arguments":{GoSmartSimulationFrameworkArguments:[2,3,1,""]},"gssa.families.gssf_arguments.GoSmartSimulationFrameworkArguments":{to_list:[2,1,1,""]},"gssa.families.mesher_gssf":{MesherGSSFMixin:[2,3,1,""]},"gssa.families.mesher_gssf.MesherGSSFMixin":{init_mesher:[2,1,1,""],mesh:[2,1,1,""],to_mesh_xml:[2,1,1,""]},"gssa.family":{Family:[0,3,1,""],FamilyType:[0,3,1,""]},"gssa.family.Family":{cancel:[0,1,1,""],family_name:[0,4,1,""],get_needle_parameter:[0,1,1,""],get_parameter:[0,1,1,""],load_core_definition:[0,1,1,""],validation:[0,1,1,""]},"gssa.http_transferrer":{HTTPTransferrer:[0,3,1,""]},"gssa.http_transferrer.HTTPTransferrer":{configure_from_xml:[0,1,1,""],connect:[0,1,1,""],disconnect:[0,1,1,""],downloadFile:[0,1,1,""],pull_files:[0,1,1,""],push_files:[0,1,1,""],uploadFile:[0,1,1,""]},"gssa.parameters":{convert_parameter:[0,2,1,""],read_parameters:[0,2,1,""]},"gssa.server":{GoSmartSimulationServerComponent:[0,3,1,""]},"gssa.server.GoSmartSimulationServerComponent":{client:[0,4,1,""],current:[0,4,1,""],doApi:[0,1,1,""],doCancel:[0,1,1,""],doClean:[0,1,1,""],doCompare:[0,1,1,""],doFinalize:[0,1,1,""],doInit:[0,1,1,""],doProperties:[0,1,1,""],doRequestDiagnostic:[0,1,1,""],doRequestFiles:[0,1,1,""],doRequestResults:[0,1,1,""],doRetrieveStatus:[0,1,1,""],doSearch:[0,1,1,""],doSimulate:[0,1,1,""],doStart:[0,1,1,""],doTmpValidation:[0,1,1,""],doUpdateFiles:[0,1,1,""],doUpdateSettingsXml:[0,1,1,""],eventComplete:[0,1,1,""],eventFail:[0,1,1,""],getProperties:[0,1,1,""],onRequestAnnounce:[0,1,1,""],onRequestIdentify:[0,1,1,""],setDatabase:[0,1,1,""],setStatus:[0,1,1,""],updateStatus:[0,1,1,""]},"gssa.session":{GoSmartSimulationServerSession:[0,3,1,""]},"gssa.session.GoSmartSimulationServerSession":{doApi:[0,1,1,""],doCancel:[0,1,1,""],doClean:[0,1,1,""],doCompare:[0,1,1,""],doFinalize:[0,1,1,""],doInit:[0,1,1,""],doProperties:[0,1,1,""],doRequestDiagnostic:[0,1,1,""],doRequestFiles:[0,1,1,""],doRequestResults:[0,1,1,""],doRetrieveStatus:[0,1,1,""],doSearch:[0,1,1,""],doStart:[0,1,1,""],doTmpValidation:[0,1,1,""],doUpdateFiles:[0,1,1,""],doUpdateSettingsXml:[0,1,1,""],onJoin:[0,1,1,""],onRequestAnnounce:[0,1,1,""],onRequestIdentify:[0,1,1,""]},"gssa.sftp_transferrer":{SFTPTransferrer:[0,3,1,""]},"gssa.sftp_transferrer.SFTPTransferrer":{configure_from_xml:[0,1,1,""],connect:[0,1,1,""],disconnect:[0,1,1,""],pull_files:[0,1,1,""],push_files:[0,1,1,""]},"gssa.shadow_watcher":{observe:[0,2,1,""]},"gssa.tmp_transferrer":{TmpTransferrer:[0,3,1,""]},"gssa.tmp_transferrer.TmpTransferrer":{configure_from_xml:[0,1,1,""],connect:[0,1,1,""],disconnect:[0,1,1,""],pull_files:[0,1,1,""],push_files:[0,1,1,""]},"gssa.translator":{GoSmartSimulationTranslator:[0,3,1,""]},"gssa.translator.GoSmartSimulationTranslator":{get_files_required:[0,1,1,""],translate:[0,1,1,""]},"gssa.utils":{get_default_gateway:[0,2,1,""]},gssa:{client:[0,0,0,"-"],comparator:[1,0,0,"-"],config:[0,0,0,"-"],database:[0,0,0,"-"],definition:[0,0,0,"-"],docker:[0,0,0,"-"],error:[0,0,0,"-"],families:[2,0,0,"-"],family:[0,0,0,"-"],http_transferrer:[0,0,0,"-"],parameters:[0,0,0,"-"],server:[0,0,0,"-"],session:[0,0,0,"-"],sftp_transferrer:[0,0,0,"-"],shadow_watcher:[0,0,0,"-"],tmp_transferrer:[0,0,0,"-"],transferrer:[0,0,0,"-"],translator:[0,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:class","4":"py:attribute","5":"py:exception"},terms:{"_build":12,"abstract":[1,7],"boolean":7,"break":0,"case":[1,4,5,7,11,18,19],"catch":19,"class":[0,1,2,13,15,21],"default":[0,11,17,19],"enum":[0,7],"final":[0,19],"float":7,"function":1,"import":[0,10,12],"int":0,"new":[0,9,11,12,19],"null":[7,17],"return":[0,1,4,8,11,13,19],"true":[0,2],"while":[4,7,11,19],abil:0,abl:1,about:[4,19],abov:[1,19],absolut:21,access:[0,9,10,11,19],accordingli:[13,19],account:8,accur:[4,14],achiev:11,across:13,activ:19,active_count:0,active_simul:0,add:[0,15,18,19],add_algorithm:1,add_input:0,add_paramet:1,addit:[0,19],addition:19,addorupd:0,addpid:2,address:0,adequ:4,administr:[4,11],after:[0,11,18,19],afterward:19,against:[8,11,19],agreement:16,aioeventhandl:0,akin:4,algorithmdefinit:4,all:[0,7,10,13,18],allow:[8,9,11,15,19,20,21],allow_resync:0,almost:0,along:1,alreadi:0,also:[0,1,14,15,18,19],altern:[0,21],although:[0,7],alwai:[0,7],ani:[0,4,7,11,12,13,14,18,19],announc:19,anoth:[1,7,8,15],anyth:[0,7,13],api:[0,19],apidoc:12,app:13,appear:[0,7],appli:7,applic:[0,4,19],applicationsess:0,approach:0,appropri:19,approxim:14,arbitrari:[1,13],archiv:[0,21],arg:[0,2],argnam:4,argument:[],arrai:[0,7],assum:[0,21],asynchron:[0,19],asyncio:[0,19],attach:[7,19],attack:11,attribut:[],authent:18,author:[4,16,19],autobahn:[0,19],autom:10,automat:[11,13],avail:[0,19],awar:19,back:[0,11,13,19,21],backend:0,backward:0,bar:7,base:[0,1,2,8,16],baseeventloop:0,basenam:19,basesess:0,basic:[0,7,13,14,19],basictyp:7,basictype1:7,basictype2:7,baw:2,bear:[0,7],becom:[11,12,21],been:[19,20],befor:[0,19,21],begin:19,behav:18,behaviour:[7,19],behind:0,beneath:13,better:0,between:[1,13,19,20],bit:0,block:0,bodi:[4,15],bool:0,both:[0,11,15,19],boundari:15,bridg:0,bug:[11,19],build:16,builder:0,bump:0,bundl:0,calculu:4,call:[0,4,11,19],call_soon_threadsaf:0,callback:0,can:[0,4,7,13,17],cancel:[0,2,13],cannot:13,canon:0,capabl:[8,10,18],care:19,cast:0,categor:0,caught:13,caution:13,cdm:[1,4,7,8],certain:[0,11,19],certainli:0,cgal:[],chanc:0,chang:0,check:[0,11],choic:7,clean:[0,2,18,19],client:[],client_directory_prefix:0,clinician:7,close:0,clsname:0,cmake:16,code:[0,1,6,13,14,16,17],coexist:7,collect:15,column:[7,17],com:[0,19],combin:[4,7,11],command:[0,16],commiss:16,common:0,commun:[0,14,19],complet:[0,1,13,17,19],compon:[1,7,14,19],compris:[14,19],concept:7,conceptu:8,concern:4,concret:[],concurr:[],condit:4,config_fil:0,configfilenam:2,configur:[],configure_from_xml:0,confirm:0,conjunct:21,connect:[0,18,19],consequ:7,conserv:13,consist:11,constant:[4,7],constitut:14,consum:0,contact:18,container:11,content:[],contigu:15,control:[],convent:4,convention:4,convert:10,convert_paramet:0,copi:0,copy_output:0,core:[0,10],coro:0,coroutin:19,correl:19,correspond:[7,14],could:[0,7],cours:14,creat:[0,7,9,11,12,17],create_xml_from_str:0,created_at:17,creep:11,critic:11,crossbar:[16,20],current:[0,11,18,19,21],currentneedlelength:1,daemon:[0,11],data:[4,14],databas:[],date:21,dct:0,debug:[2,21],def:18,defin:[1,4,7,15,19,21],definition_fil:0,delet:[0,17],deliv:18,denial:11,depend:[],deprec:0,describ:[1,6,7,15,18],descript:[],dest:0,destin:[0,2],destinationstr:0,destinationurl:[0,21],destroi:0,detail:[0,8],dev:16,develop:[9,13,14,18],dfamili:15,dfile:15,diagnost:0,dict:0,dictionari:0,dif:[1,8],diff:[1,8],differ:[0,4,7,8,19],direct:[10,20],directli:6,directori:[0,14,15,16,17,18,19],disconnect:0,discoveri:19,distinct:15,distinguish:13,dle:[],doapi:0,doc:12,docancel:0,docker:[],dockerfamili:2,dockerlaunch:[0,11],doclean:0,docompar:0,docstr:12,doe:[0,7,19],dofin:0,doinit:0,dolfin:10,don:0,doproperti:0,dorequestdiagnost:0,dorequestfil:0,dorequestresult:0,doretrievestatu:0,dosearch:0,dosimul:0,dostart:0,dot:0,dotmpvalid:0,doupdatefil:0,doupdatesettingsxml:0,down:1,download:0,downloadfil:0,dummi:[0,19],dundalk:16,e_cancel:13,e_client:13,e_model:13,e_serv:13,e_unknown:13,each:[0,7,8,14,15,19,20],earliest:0,easili:9,effect:17,either:[0,15],element:[0,7,10],elementtre:0,elmer:[2,16],elmer_binari:2,elmer_libnuma:[],elmer_libnuma_legaci:[],elmerlibnumafamili:2,elmerlibnumalegacyfamili:2,els:0,embed:[8,15],empti:18,enabl:19,encod:7,end:[7,11],endpoint:0,engin:[7,16],enough:1,ensur:[0,7,11],entir:11,entiti:7,entri:[0,7,17,19],environ:11,equal:1,equival:[1,19],err:13,error:[],error_statu:19,errorexcept:0,errormessag:0,especi:[7,19],essenti:[0,7,11],establish:19,estim:0,etc:[0,7,18],etc_loc:0,etre:0,european:16,even:4,event:[0,19],eventcomplet:0,eventfail:0,everyth:0,exact:[7,15],examin:0,exampl:[4,14],except:[0,4,13,19],execut:[],exemplar:11,exist:[0,18,19],exists_onli:0,exit:[0,17,18],exit_cod:[0,17],expect:[4,18,19],exposur:11,extend:14,extens:19,extern:[13,14],extract:0,fact:11,fail:[0,19],failur:[0,19],fall:0,fals:[0,2],famili:[],family_nam:[0,2],familytyp:0,fashion:7,fault:0,feedback:13,fenic:[],fenicsfamili:[2,11],fenicsproject:10,field:[7,15],file1:8,file2:8,file:[0,1,8,10,11,12,14,15,16,18,19,21],filenam:[0,15],files_requir:[0,2],filesystem:0,filesystemeventhandl:0,fill:7,find:[0,14,19],finit:10,fire:0,first:[0,8,19],fixm:0,flag:17,fledg:14,flexibl:7,folder:0,follow:[4,7,17,19,21],form:[0,4,7,15],format:[],former:0,forth:[1,7],forward:[19,21],found:0,framework:[10,14],free:0,from:[0,4,7,9,10,13,14,15,16,17,19,21],full:[0,18],fulli:[14,19],fullpath:0,fund:16,fundament:1,futur:13,gatewai:0,gather_diagnost:0,gather_result:0,gener:[1,10,11,13,15,16,19],geometr:1,geometri:[1,8],get:0,get_api_vers:0,get_config_fil:0,get_default_gatewai:0,get_dir:0,get_error:0,get_exit_statu:0,get_fil:0,get_files_requir:0,get_guid:0,get_needle_paramet:[0,2],get_paramet:[0,2],get_percentage_socket_loc:2,get_remote_dir:0,getproperti:0,getstatusandvalid:0,getvalid:0,gfoam:2,gfoamfamili:2,ghp:12,git:12,github:12,give:0,given:[0,7,8,14,19],global:[0,19],glossia:[],glot:0,gmsh:16,gosmart:16,gosmartclienterror:13,gosmarterror:[13,19],gosmartmodelerror:13,gosmartservererror:13,gosmartsimul:[0,19],gosmartsimulationclientcompon:0,gosmartsimulationdefinit:0,gosmartsimulationframeworkargu:2,gosmartsimulationservercompon:0,gosmartsimulationserversess:0,gosmartsimulationtransl:0,got:0,grab:0,grant:16,group:[1,7,11,14,15],gssa:[],gssa_fil:[0,18],gssa_xml_to_definit:1,gssf:[1,4,11,13,14,15,16,18,19],gssf_argument:[],guarante:19,guid:[0,11,17,19],guid_start:0,hachiko:0,handi:0,handl:[0,15,19,21],have:[0,4,7,15,18,19,20],heavi:0,held:19,help:[13,16,18],helper:1,here:[0,6,15,19],hierarch:[0,7],higher:[0,14],highli:14,highlight:0,hoc:0,hold:7,host:[11,18],how:[0,1,15],howev:[1,13,15,19],html:12,http:[],httptransferr:[0,21],human:[1,8,15],hybrid:11,ideal:1,idempot:0,ident:7,identifi:[15,19],ignor:18,ignore_develop:0,illog:13,imag:[0,10,11,14],implement:[1,19],improv:21,in_progress:[0,13],inc:1,includ:[4,10,11,14,18,19],incompat:0,inconsist:0,incorpor:[1,7,10,15,19],index:[0,1,12,15,16],indic:[],inform:[0,1,9,17,19],ing:8,init:[0,19],init_config:0,init_logg:0,init_mesh:2,init_percentage_socket_serv:0,input:[0,1,11,13,15,18,19,21],input_fil:0,inputfilenam:15,insert:19,insid:[0,11],instal:[],instanc:[0,4,7,11,15],instead:7,instruct:[0,14],integ:[0,7,15,17],integr:19,intend:[0,14],intent:14,intepret:13,interact:[7,18,19,20],interfac:[0,7],intern:11,interpret:[0,7,14],intervent:11,invalid:7,ireland:16,issu:13,itself:[1,8,11,15,18],join:[0,15],json:[0,7],just:0,kei:[0,1,2,18],key_fil:18,keyword:[],kill:11,know:4,known:[0,11,17,19],kwarg:[0,2],label:1,lambda:[1,4],languag:[4,20],last:[17,19],last_status_timestamp:19,later:0,latest:0,launch:[0,11,16,19],launcher:16,leakag:4,least:[7,14],leavetre:2,left:8,left_text:1,legaci:2,less:[4,13],level:[11,14,21],libjsoncpp:16,libnuma:2,librari:[10,15,19],librarytyp:15,lie:0,lieu:11,lift:0,like:[0,1],limit:[0,7],line:16,link:7,list:[0,15,19],listen:19,load:[0,8,19],load_core_definit:0,load_definit:2,local:[0,18,21],locat:[0,1,11,14,17,19,21],lock:0,log:0,longer:14,look:0,loop:0,lowercas:7,ltd:16,lxml:0,machin:[0,19,21],made:0,magic_script:0,mai:[0,4,7,13,14,15,16,19],main:[0,19],mainli:0,maintain:19,make:[0,12],make_cal:0,makeerror:0,manag:0,mani:[0,7,10,11,13],manipul:19,manual:11,map:19,mark:0,markallold:0,markdown:12,matc:[1,4],match:[0,7,13],mathemat:13,mean:[11,14,21],media:5,mediat:19,medic:7,medium:21,member:[4,15],mesh:[2,10,11,14,19],mesher:[10,11,14],mesher_gssf:[],meshergssfmixin:[2,11],messag:[0,1,18],metaclass:0,method:[0,19,21],methodolog:[],might:[0,19],migrat:14,mind:[0,7],minim:11,mix:11,mixin:11,model:[],modif:16,modul:[],moment:0,more:[1,4,7,9,11,14,19],moreov:[8,11],most:[0,19],mount:11,move:21,msh:[10,11],much:19,multipl:7,munkr:16,must:[0,4,7,11],name:[0,1,4,7,8,15,18],namespac:[0,11],ncl:15,neatli:0,necessari:[11,14],necessarili:19,nee:[],need:[0,1,5,19,21],needl:[0,1,7,15],needle_index:[0,2],network:[19,21],nfile:15,nicer:1,nix:15,node:[0,4,15,18,21],non:[1,7,8],none:[0,1,2],normal:[0,5,21],note:[0,4,8,14,15,19],notif:19,notifi:19,notify_output:0,nproc:2,nth:0,numa:16,number:[11,19],nume:[],numer:[0,1,4,7,8,13],numerical_model:1,numericalmodel:[1,15],object:[0,1,2,7,8],observ:0,observablemixin:0,occur:[0,11],off:0,often:5,on_mov:0,onc:[0,11],oncomplet:0,onfail:0,onjoin:0,onleav:0,onli:[],onrequestannounc:0,onrequestidentifi:0,onstatu:0,orchestr:11,order:[0,15],ordin:[0,15],org:17,organ:[5,15],origin:[12,13],orphan:11,other:[1,8,14,20,21],otherwis:[0,7,15],our:19,out:[0,16,18,21],outfilenam:2,output:[0,8,18,19,21],output_fil:0,outputhandl:0,over:[7,19],page:[12,16],pair:[7,14],paramattrtyp:7,paramattrvalu:7,paramet:[],parameterid:7,paramnam:7,parramattrvalu:7,pars:[],part:[1,6,11,14,19],parti:[0,4],partial:21,particular:19,particularli:[7,21],pass:[0,7,8,13,17,19],past:17,path:21,pattern:[0,19],pde:10,per:11,percentag:[0,17,19],percutan:1,perhap:0,permit:[0,19],persist:19,perspect:4,phantom:5,physic:[5,7,13],pick:7,piec:[0,9],place:[0,4,5,11],placehold:[],plug:14,point:19,port:[0,18],possibl:[0,1,7,19],post:0,potenti:7,ppa:10,pre:[14,19],precaut:4,prematur:0,prepar:[0,7,19],prepare_simul:2,present:[0,11,17,19,21],prevent:7,primari:16,primarili:[0,12,18,21],print:0,prior:11,privileg:14,problem:13,procedur:[1,4,5,7,19],process:[1,18,19],processor:19,produc:[0,1],programm:13,progress:0,progress_statu:19,project:16,prompt:7,proper:14,properti:[0,19],protect:[11,19],protocol:[0,7,19],prove:19,proven:4,provid:[0,1,4,7,10,11,13,15,16,19,20],pub:19,publish:[0,19],publish_cb:0,pull:0,pull_fil:0,purpos:[7,10,20,21],push:[0,12],push_fil:0,put:19,python:[],pythonocc:16,pyyaml:16,rate:0,reach:19,read_paramet:0,readabl:[1,8,15,19],reader:0,readi:19,real:17,reason:[0,13],receiv:1,receive_respons:0,recognis:19,recommend:[16,20],record:[0,7,17],reduc:11,redund:11,ref:0,refer:[0,5,7,8,10,15,19],referenc:[7,18],refus:[0,11],regener:12,region:[1,15],regist:[0,18,19],reinstat:21,rel:19,relat:[19,20],releas:0,relev:[6,11,21],reliabl:19,remain:[0,19],remot:[0,19],remote_dir:0,remote_root:[0,21],remov:[0,11,19],render:7,repetit:1,repli:[0,19],report:[0,19],repres:[1,7,14],represent:[0,7],request:[0,4,18,19],request_announc:[0,19],request_diagnost:0,request_fil:[0,19],request_identifi:[0,19],request_result:0,requir:[0,7,11,14,19],resourc:15,respect:0,respond:19,respons:[0,7,13,19],restart:[11,19],restructuredtext:12,result:[0,1,4],resum:17,retriev:0,retrieve_fil:2,retrieve_statu:[0,19],rformat:15,rgroup:15,ricalmodel:[],rid:15,right:8,right_text:1,rinput:15,risk:11,rname:15,root:[0,1],router:[],routin:[0,13,19],row:[0,17],rpc:[0,19],rst:12,run:[0,1,4,7,11,14,16,18,19],run_script:0,runtimeerror:0,sai:[1,7],same:[8,11,14,17,19],sampl:[5,20],sandbox:14,scan:[2,14],schedul:0,schema:15,scheme:11,scientif:10,score:[0,19],script:[0,8,10,16,18],search:[0,16],second:[8,21],section:[7,21],secur:[4,21],see:[1,9,11,15],seen:7,select:[7,15],send:[0,1,19],send_command:0,sent:0,separ:[0,1,8,14,19],seri:[1,10,19],server:[],server_hostnam:19,server_id:[0,19],servic:[11,16],session:[],set:[0,1,7,11,16,19,21],set_exit_statu:0,set_numerical_model:1,set_remote_dir:0,set_transferr:1,set_update_socket:0,setdatabas:0,setstatu:0,setting_final_timestep:7,setup:11,sftp:[],sftp_host:18,sftp_port:18,sftptransferr:[0,21],should:[0,1,4,7,10,11,12,14,15,18,19,21],show:[16,18],shutdown:0,sid:18,side:[0,7,13,19],silent:2,simdata_path:0,similar:7,simpl:[8,15],simplic:12,simulation_definit:[],simulation_id:19,simulationdefinit:[1,8,15],simultan:11,singl:14,situat:11,skip:[0,18],skip_clean:0,slightli:[7,14],slow:0,slug:4,sock:2,socket:[0,11,19],socket_loc:0,soft:[0,17],softwar:9,sole:4,solid:15,solut:10,solver:[7,8,11],some:0,someth:4,sort:0,sourc:[0,1,2,14,15,16,20],sourcepath:0,sourceurl:21,sourceurlstr:0,space:4,special:19,specif:[0,7,14,15,17,18],specifi:[4,7,15,21],sphinx:12,sqlite:17,sqlitesimulationdatabas:0,stabl:[10,11],standard:[0,11],start:[0,10,11,19],statu:[0,17,19],status:17,status_socket:2,step:[0,11],still:[0,14],stl:15,stop:[0,11],str:0,strictli:[1,5,11],string:[0,7,19],sub:19,subclass:[0,14],subdir:18,subdirectori:[0,18,20],subdomain:[1,15],submit:0,submitt:0,subscrib:[0,19],success:[0,13],success_statu:19,sudo:11,suffix:0,summari:0,supplement:0,suppli:[4,7,14,15],support:[16,19],surfac:[15,18],synopsi:0,syntact:13,system:[0,14,21],tag:15,take:[1,4,5,7,8,11,18],tar:[15,18,21],target:[0,19],task:13,technic:7,tell:0,templat:1,temporari:0,term:14,test:[18,19],text:[17,18],textual:[1,4],than:[4,14,19,21],that_xml:0,thei:[0,4,5,14,15,19],them:[11,15,18],themselv:14,theoret:6,theori:13,therebi:7,thi:[0,1,4,5,7,8,10,11,12,13,14,15,16,18,19,20,21],third:[0,4],this_xml:0,those:[0,7],thread:19,through:[0,19,20,21],thrown:13,tidi:11,tie:1,time:[0,1,4,7,17,19],timeout:19,timestamp:[0,17,19],tinyint:17,tmp:[],tmpdir:0,tmptransferr:[0,21],to_list:2,to_mesh_xml:2,to_xml:2,todo:[0,1,14,21],told:0,too:11,tool:[0,4,7,8,13,14,16],transfer:[0,19,21],transferr:[],translat:[],transmiss:19,trasferr:21,treat:15,tree:[15,20],trigger:[0,13,19],tripl:7,trivial:0,trust:14,truthi:18,try_json:[0,2],tumour:15,tupl:[0,7],turn:0,two:[0,8,11,14,19],txaio:0,typ:[0,1],type:[],typic:0,ultim:4,unabl:8,uncertain:13,under:[16,21],underscor:4,understand:[1,4,8],unfinish:0,unhandl:19,unifi:13,uniqu:[7,15,19],univers:7,unknown:13,unless:[0,7],unnecessari:11,unprivileg:14,unspecifi:4,unsupport:9,until:19,unwieldi:0,unzip:21,updat:[0,2,11,17,21],update_callback:0,update_fil:[0,19],update_settings_xml:[0,19],update_statu:19,update_status_callback:0,updatestatu:0,updatevalid:0,upload:[0,12],uploadfil:0,upper:4,upstream:10,url:[0,1,21],urllib:0,usabl:21,usag:[],use_observ:0,user:[7,11,13,14,19],usr:0,usual:[0,1],uuid:[18,19],valid:[0,2,4,5,7,17],validation_xml:[0,19],valu:[0,1,7],variat:7,variou:20,veri:13,version:[0,8,12],via:[0,18,19],vigil:19,visibl:12,vivo:5,volum:0,volumetr:[10,11,15],vtk:16,vtp:15,wai:[1,14,15],wait:0,wait_for_respons:0,wamp:[],watchdog:0,web:20,websit:16,websocket:18,websocket_port:18,webus:16,well:4,what:0,when:[0,7,19],where:[0,7,13,14,16],wherev:0,whether:0,which:[0,5,8,13,14,15,18,19],whichev:0,whole:7,why:13,wide:0,widget:7,win:7,wish:[13,18],within:[4,7,10,15,20],without:[11,19],work:[0,13,17,18,19],workflow:[],working_directori:[0,2,19],would:[1,11,14,19],wrap:[0,9,11,13,18],wrapped_coroutin:0,wrapper:8,write:[14,21],writer:0,written:7,www:[14,16,17],xml1:19,xml2:19,xml:[],xml_string:0,yaml:0,yet:13,yml:0,you:[17,18],your:19,zone:15},titles:["gssa package","gssa.comparator package","gssa.families package","src","Go-Smart Simulation Algorithms","Clinical Domain Model - Contexts","Go-Smart Clinical Domain Model","Go-Smart Simulation Parameters","Comparison of GSSA-XML documents","Go-Smart Simulation Architecture - Python Docker Container Module","Go-Smart Simulation Architecture - FEniCS Family","Go-Smart Simulation Architecture - Docker Workflows","Documentation workflow","Error types","Go-Smart Simulation Model Families","Go-Smart Simulation Architecture XML Format (GSSA-XML)","Glossia","Go-Smart Simulation Server Database","Executables","Go-Smart Simulation Architecture - Simulation Server","Go-Smart Simulation Architecture - WAMP Router","Transferrers"],titleterms:{aka:16,algorithm:4,architectur:[9,10,11,15,16,19,20],argument:18,attribut:7,caveat:11,cgal:11,client:[0,18],clinic:[5,6],compar:[1,8],comparison:8,concret:7,concurr:19,config:0,configur:21,contain:[9,11],content:[0,1,2],context:5,control:19,databas:[0,17],definit:[0,4,10,11],depend:16,descript:18,docker:[0,2,9,11],document:[8,12],domain:[5,6],elmer_libnuma:2,elmer_libnuma_legaci:2,error:[0,13],execut:18,famili:[0,2,10,14],fenic:[2,10],format:15,glossia:16,gssa:[0,1,2,8,15,16],gssf_argument:2,http:21,http_transferr:0,indic:16,instal:16,mesher_gssf:2,methodolog:8,model:[5,6,14],modul:[0,1,2,9],onli:11,option:18,packag:[0,1,2],paramet:[0,7],pars:1,placehold:7,posit:18,prune:11,python:9,router:20,server:[0,17,18,19],session:0,sftp:21,sftp_transferr:0,shadow_watch:0,simul:[4,7,9,10,11,14,15,16,17,18,19,20],simulation_definit:1,smart:[4,6,7,8,9,10,11,14,15,16,17,18,19,20],src:3,submodul:[0,1,2],subpackag:0,tabl:16,tmp:21,tmp_transferr:0,transferr:[0,21],translat:0,type:[7,13],usag:[8,16],util:0,variant:11,wamp:20,workflow:[11,12],xml:[8,15]}})