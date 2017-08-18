Search.setIndex({docnames:["announcements/brown-bicycle-bears","announcements/caramel-corn","announcements/carousel","api/calculations","api/contrib","api/core","api/data-sources","api/developer","api/exceptions","api/formulas","api/layers","api/models","api/outputs","api/scripts","api/simulations","getting_started","index","tutorials/tutorial_1","tutorials/tutorial_2","tutorials/tutorial_3","tutorials/tutorial_3_detail","tutorials/tutorial_4","tutorials/tutorial_5"],envversion:52,filenames:["announcements\\brown-bicycle-bears.rst","announcements\\caramel-corn.rst","announcements\\carousel.rst","api\\calculations.rst","api\\contrib.rst","api\\core.rst","api\\data-sources.rst","api\\developer.rst","api\\exceptions.rst","api\\formulas.rst","api\\layers.rst","api\\models.rst","api\\outputs.rst","api\\scripts.rst","api\\simulations.rst","getting_started.rst","index.rst","tutorials\\tutorial_1.rst","tutorials\\tutorial_2.rst","tutorials\\tutorial_3.rst","tutorials\\tutorial_3_detail.rst","tutorials\\tutorial_4.rst","tutorials\\tutorial_5.rst"],objects:{"":{"carousel-quickstart":[13,0,0,"-"]},"carousel.contrib":{readers:[4,0,0,"-"]},"carousel.contrib.readers":{ArgumentReader:[4,1,1,""],DjangoModelReader:[4,1,1,""],HDF5Reader:[4,1,1,""]},"carousel.contrib.readers.ArgumentReader":{apply_units_to_cache:[4,2,1,""],is_file_reader:[4,3,1,""],load_data:[4,2,1,""]},"carousel.contrib.readers.DjangoModelReader":{load_data:[4,2,1,""],model:[4,3,1,""]},"carousel.contrib.readers.HDF5Reader":{is_file_reader:[4,3,1,""]},"carousel.core":{CarouselJSONEncoder:[5,1,1,""],CommonBase:[5,1,1,""],Parameter:[5,1,1,""],Registry:[5,1,1,""],UREG:[5,6,1,""],calculations:[3,0,0,"-"],calculators:[3,0,0,"-"],convert_args:[5,7,1,""],data_readers:[6,0,0,"-"],data_sources:[6,0,0,"-"],dimensionless_to_index:[5,7,1,""],exceptions:[8,0,0,"-"],formulas:[9,0,0,"-"],layers:[10,0,0,"-"],models:[11,0,0,"-"],outputs:[12,0,0,"-"],simulations:[14,0,0,"-"]},"carousel.core.CarouselJSONEncoder":{"default":[5,2,1,""]},"carousel.core.CommonBase":{get_parents:[5,4,1,""],set_meta:[5,5,1,""],set_param_file_or_parameters:[5,5,1,""]},"carousel.core.Registry":{register:[5,2,1,""],unregister:[5,2,1,""]},"carousel.core.calculations":{Calc:[3,1,1,""],CalcBase:[3,1,1,""],CalcParameter:[3,1,1,""],CalcRegistry:[3,1,1,""]},"carousel.core.calculators":{Calculator:[3,1,1,""]},"carousel.core.calculators.Calculator":{calculate:[3,5,1,""],get_covariance:[3,4,1,""]},"carousel.core.data_readers":{DataReader:[6,1,1,""],JSONReader:[6,1,1,""]},"carousel.core.data_readers.DataReader":{apply_units_to_cache:[6,2,1,""],is_file_reader:[6,3,1,""],load_data:[6,2,1,""],meta:[6,3,1,""],parameters:[6,3,1,""]},"carousel.core.data_readers.JSONReader":{apply_units_to_cache:[6,2,1,""],load_data:[6,2,1,""],orig_data_reader:[6,3,1,""]},"carousel.core.data_sources":{DataParameter:[6,1,1,""],DataRegistry:[6,1,1,""],DataSource:[6,1,1,""],DataSourceBase:[6,1,1,""]},"carousel.core.data_sources.DataRegistry":{meta_names:[6,3,1,""],register:[6,2,1,""]},"carousel.core.data_sources.DataSource":{args:[6,3,1,""],data:[6,3,1,""],data_source:[6,3,1,""],edit:[6,2,1,""],filename:[6,3,1,""],isconstant:[6,3,1,""],kwargs:[6,3,1,""],saveas_json:[6,2,1,""],timeseries:[6,3,1,""],uncertainty:[6,3,1,""],variance:[6,3,1,""]},"carousel.core.exceptions":{CarouselException:[8,8,1,""],CircularDependencyError:[8,8,1,""],DuplicateRegItemError:[8,8,1,""],MismatchRegMetaKeysError:[8,8,1,""],MissingDataError:[8,8,1,""],MixedTextNoMatchError:[8,8,1,""],UncertaintyBoundsUnitsError:[8,8,1,""],UncertaintyPercentUnitsError:[8,8,1,""],UncertaintyVarianceError:[8,8,1,""],UnnamedDataError:[8,8,1,""]},"carousel.core.formulas":{Formula:[9,1,1,""],FormulaBase:[9,1,1,""],FormulaImporter:[9,1,1,""],FormulaParameter:[9,1,1,""],FormulaRegistry:[9,1,1,""],NumericalExpressionImporter:[9,1,1,""],PyModuleImporter:[9,1,1,""]},"carousel.core.formulas.Formula":{args:[9,3,1,""],formulas:[9,3,1,""],isconstant:[9,3,1,""],islinear:[9,3,1,""],units:[9,3,1,""]},"carousel.core.formulas.FormulaImporter":{import_formulas:[9,2,1,""],meta:[9,3,1,""],parameters:[9,3,1,""]},"carousel.core.formulas.FormulaRegistry":{register:[9,2,1,""]},"carousel.core.formulas.PyModuleImporter":{import_formulas:[9,2,1,""]},"carousel.core.layers":{Calculations:[10,1,1,""],Data:[10,1,1,""],Formulas:[10,1,1,""],Layer:[10,1,1,""],Outputs:[10,1,1,""],Simulations:[10,1,1,""]},"carousel.core.layers.Calculations":{add:[10,2,1,""],load:[10,2,1,""],reg_cls:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.layers.Data":{"delete":[10,2,1,""],add:[10,2,1,""],edit:[10,2,1,""],load:[10,2,1,""],open:[10,2,1,""],reg_cls:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.layers.Formulas":{add:[10,2,1,""],load:[10,2,1,""],reg_cls:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.layers.Layer":{"delete":[10,2,1,""],add:[10,2,1,""],edit:[10,2,1,""],layer:[10,3,1,""],load:[10,2,1,""],objects:[10,3,1,""],reg:[10,3,1,""],reg_cls:[10,3,1,""],sources:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.layers.Outputs":{add:[10,2,1,""],load:[10,2,1,""],reg_cls:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.layers.Simulations":{add:[10,2,1,""],load:[10,2,1,""],reg_cls:[10,3,1,""],src_cls:[10,3,1,""]},"carousel.core.models":{Model:[11,1,1,""],ModelBase:[11,1,1,""],ModelParameter:[11,1,1,""]},"carousel.core.models.Model":{"delete":[11,2,1,""],add:[11,2,1,""],command:[11,2,1,""],edit:[11,2,1,""],layers:[11,3,1,""],load:[11,2,1,""],model:[11,3,1,""],param_file:[11,3,1,""],save:[11,2,1,""],state:[11,3,1,""]},"carousel.core.outputs":{Output:[12,1,1,""],OutputBase:[12,1,1,""],OutputParameter:[12,1,1,""],OutputRegistry:[12,1,1,""]},"carousel.core.simulations":{SimBase:[14,1,1,""],SimParameter:[14,1,1,""],SimRegistry:[14,1,1,""],Simulation:[14,1,1,""]},"carousel.core.simulations.Simulation":{ID:[14,3,1,""],attrs:[14,3,1,""],calc_order:[14,3,1,""],check_data:[14,2,1,""],cmd_queue:[14,3,1,""],commands:[14,3,1,""],data:[14,3,1,""],display_fields:[14,3,1,""],display_frequency:[14,3,1,""],idx_iter:[14,3,1,""],index_iterator:[14,2,1,""],initialize:[14,2,1,""],interval:[14,3,1,""],interval_idx:[14,3,1,""],is_data_loaded:[14,3,1,""],iscomplete:[14,3,1,""],isinitialized:[14,3,1,""],ispaused:[14,3,1,""],number_intervals:[14,3,1,""],param_file:[14,3,1,""],parameters:[14,3,1,""],path:[14,3,1,""],pause:[14,2,1,""],settings:[14,3,1,""],sim_length:[14,3,1,""],start:[14,2,1,""],thresholds:[14,3,1,""],write_fields:[14,3,1,""],write_frequency:[14,3,1,""]},carousel:{core:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","classmethod","Python class method"],"6":["py","data","Python data"],"7":["py","function","Python function"],"8":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:classmethod","6":"py:data","7":"py:function","8":"py:exception"},terms:{"1st":22,"2nd":20,"abstract":21,"break":[0,1,16],"case":[15,22],"class":[0,3,4,5,6,7,8,9,10,11,12,14,16],"default":[1,3,5,6,9,10,14,17,18,19,21],"final":[7,11,19,22],"float":[8,19,20],"function":[3,5,7,11,14,18,19,20],"import":[0,1,2,4,5,6,10,12,13,15,16,17,18,20,21,22],"int":[3,20],"long":11,"new":[1,5,6,7,9,10,15,16,17,18,19,21,22],"return":[1,3,4,5,6,9,11,14,16,19,20,22],"short":19,"static":[3,5,17,22],"super":5,"true":[3,4,5,6,9,14,17,18,21,22],"try":[2,20],"while":22,Adding:7,And:[1,7],For:[0,1,4,6,10,15,17,18,19,22],One:[17,19],The:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22],Then:[19,22],There:[0,1,2,7,10,15,17,21],These:[6,15,19],Use:[1,19],Will:14,__author:2,__author__:13,__covariance__:20,__email__:[2,13],__file__:[13,16],__init__:[2,13,15,19],__main__:16,__metaclass__:12,__name__:16,__prepare_data__:[16,21],__version__:13,_build:16,_eg:3,_eg_:6,_file_attr:5,_meta:5,_meta_nam:21,_path_attr:5,abil:1,about:[15,16,17,18,19,20],abov:[17,18],absolut:10,abspath:13,ac_pow:[1,18,19],accept:[4,6],access:[7,22],accomplish:5,accumul:[17,18,19],acquir:6,across:19,action:22,actual:[11,17,19,20,22],add:[5,6,9,10,11,12,15,16,18,19,20],added:[5,10],adding:5,addit:[2,14,18,19],adjacent_sid:16,adjust:19,affect:1,after:[6,19,22],again:[18,19],against:5,alia:10,all:[1,3,5,6,7,9,10,14,15,16,17,18,19,20,21,22],allow:[1,5,6,7,14],allow_nan:5,alreadi:[5,18,22],also:[0,1,2,5,6,7,12,13,15,16,17,18,19,21,22],altern:[10,17],alwai:[12,15,20],always_calc:[1,3,18],ambient_temperatur:15,analysi:14,ani:[1,2,5,6,9,14,16,17,18,19,21,22],annual:18,annual_energi:[1,17,18,22],anoth:[1,7,21],anymor:1,anyth:1,api:[1,5,6,7],append:[6,22],appli:[4,6,15,19,21,22],applic:15,apply_units_to_cach:[4,6],appropri:5,arbitrarili:1,archiv:[15,16],aren:1,arg:[1,3,4,5,6,9,10,11,12,14,16,18,19],argmax:5,argpo:4,argument:[1,3,6,9,10,14,15,16,17,20,21],argumentread:[4,16,21],around:2,arrai:[5,12,17,19,20],asarrai:20,assembl:10,associ:5,assum:[18,20],astyp:19,atleast_1d:16,attach:7,attr:[5,14],attribut:[0,1,4,5,6,10,11,12,14,16,20],attributeerror:19,author:15,auto:14,automat:[14,15,20,21,22],avail:5,averag:18,axi:19,azimuth:4,backup:14,base:[1,7,8,16,22],basemodel:0,bash:15,basic:13,batch:14,batteri:14,bear:16,becaus:[1,15,17,21,22],been:[0,1,4,22],befor:[5,21],begin:[3,18],behind:15,being:7,below:[18,19,21,22],between:[14,17,19],bicycl:16,bin:13,blob:5,block:2,boilerpl:16,bool:[3,6,9,11,12],both:[8,15,20],bound:16,bracket:14,broadcast:20,brown:[16,18],build:15,built:[5,16],cach:[4,6,21],calc:[1,3,10,16,18],calc_ord:14,calc_reg:14,calcbas:3,calcparamet:[1,3,16,18],calcregistri:[3,10,14],calcul:[0,5,6,7,9,11,12,14,15,16,17,19,20,21,22],calculatd:17,call:[1,5,6,10,13,15,17,18,19,22],callabl:19,can:[0,1,3,4,5,6,7,9,10,14,15,16,17,18,19,20,21,22],cannot:[7,22],capabl:14,caramel:[16,19],care:[7,11,16,20],carousel:[0,1,3,4,6,7,9,10,11,12,14,15,17,18,19,20,21,22],carousel_simul:[1,22],carouselexcept:8,carouseljsonencod:5,cast:20,categori:5,cec_invert:21,cell:17,centimet:20,chang:[0,1,14,16,17,18,22],channel:16,check:[5,12,14,19,21,22],check_circular:5,check_data:14,circular:16,circulardependencyerror:8,classmethod:[3,5],clear:22,close:22,cmd:[11,15],cmd_queue:14,code:[16,19],collect:[4,7,15,21,22],com:[5,13],combin:[5,6,7,14,15,18],come:6,command:[1,7,11,13,14,16,22],common:16,commonbas:5,compani:13,compar:5,compat:1,complet:[14,15,22],complic:15,compon:[17,22],comput:[14,19],concis:15,concret:21,conda:16,configur:[2,11,14,19],confus:22,consecut:22,consid:[1,4],consist:[4,6],consol:22,constant:[6,9,12,14,15,16,19,21,22],constraint:19,consult:6,contain:[1,4,6,9,10,11,14,15,18,19,21,22],content:[3,13],contrib:[4,16],contribut:[7,21],control:[1,22],convent:19,convert:[16,19,21],convert_arg:5,copi:[17,18,19],core:[1,3,4,6,8,9,10,11,12,14,16,17,18,19,20,21,22],corn:[16,19],correct:16,correctli:19,correspond:[5,6,12,14,16,17,18,19,22],could:[1,18,20,22],coupl:19,cov:20,covari:[3,9,17,19,20],covariance_kei:20,cover:15,creat:[2,5,6,7,13,14,15,16,17,18,19,22],csv:21,current:[0,11,15,17,19,22],custom:4,cyclic:8,dag:1,dai:[18,19],daili:19,data:[0,2,3,4,5,7,9,11,12,13,14,15,16,18,19,22],data_cache_en:[16,21],data_fil:6,data_path:6,data_read:[6,16,21],data_reg:[3,6],data_sourc:[1,6,10,16,21],data_src:[8,10],databas:21,datafram:17,dataparamet:[1,6,16,21],dataread:[16,21],dataregistri:[3,6,10,14,18],datarg:3,datasourc:[1,6,10,16,21],datasourcebas:6,date:[6,14,22],daterang:[1,18],datetim:21,datetime64:19,dateutil:19,datvar:3,dawn_idx:5,day0:19,decid:[17,18],declar:[0,1,15,18,21,22],decor:16,decoupl:16,def:[5,16,19,20,21],defin:[1,11,16,17,18,19,21,22],definit:[10,11,19],degc:21,degrad:17,degre:[1,4,6,21],deleg:22,delet:[10,11],demo:[1,17,18,19,21,22],demonstr:[15,17],depend:[3,5,14,16,18,20,21],deprec:0,deprecationwarn:0,deriv:20,describ:[7,18],descript:[6,17,18,19,21,22],design:7,desir:[1,17,18,19,22],detail:[13,16,19],determin:[1,3,9,16,19,20,22],develop:[4,5,16],diagon:17,dict:[3,6,9,10,11],dictionari:[1,3,4,5,6,10,11,14,17,18,21,22],did:18,diff:19,differ:[1,3,6,7,14,15,18,21],differenti:1,dimens:20,dimension:[19,21],dimensionless:16,dimensionless_to_index:5,direct:6,direct_normal_irradi:15,directli:[4,12,14,15,22],directori:14,dirnam:[13,16],discuss:[16,17,19],disk:[14,22],displai:14,display_field:[1,14,22],display_frequ:[1,14,22],distribut:[15,16],distutil:16,disutil:16,divid:7,django:[1,5],djangomodelread:[4,21],dni:[4,6,14],doc:16,docstr:5,document:[5,15,19],doe:[1,19],doesn:[2,6,8,19,21],don:[5,9,16,19,20],done:20,doubl:1,downgrad:[1,19],download:16,drop:1,dulwich:16,dunder:15,duplic:[16,22],duplicateregitemerror:[5,8,22],dure:[17,19,21,22],dynam:[3,6,14,16,17,21,22],each:[1,3,5,6,7,9,10,11,14,15,17,18,19,20,21,22],easi:[1,22],easier:[1,17],easiest:1,easili:7,edit:[6,10,11],effect:17,either:[1,2,3,6,10,14,16,18],element:7,elev:[21,22],elif:19,els:[14,19,20],email:15,empti:5,enabl:[0,21],encapsul:18,encapsulant_brown:18,encod:16,end:[18,19,22],energi:[1,17,18,19],enforc:5,enough:19,ensur:5,ensure_ascii:5,enter:15,entir:[15,19,21],environment:2,equal:[15,21],equat:19,equival:[1,22],err:20,error:16,especi:19,etc:[21,22],evalu:[18,19],eve_idx:5,even:[2,15,21],everi:[3,14,21,22],exactli:6,exampl:[4,5,6,10,12,17,18,19,20,21,22],examplebas:5,exceed:17,excel:21,except:[0,2,5,6,12,16,20,21,22],exclud:19,execut:[3,7,11,15,17,22],exist:[1,5,6,22],expect:9,explain:[17,18],explicitli:[2,19,20],expos:14,extend:7,extens:[5,7],extern:10,extract:[6,16],f_daterang:19,f_encapsulant_brown:18,f_energi:[1,18,19],f_fix:20,f_hypotenus:19,f_max_t:5,f_pythagorean:16,f_rollup:[1,18,19],facilit:7,fact:1,fals:[1,3,4,5,6,9,11,16,18],familiar:1,featur:[1,7,16],few:[7,15],field:[2,3,6,9,12,14],file:[2,4,5,6,8,9,10,11,12,13,14,16,19,21,22],filenam:[1,4,6,8,10,14,15,16,22],finish:14,first:[1,3,15,17,18,19,20,22],five:[7,10,11,15],fix:20,flag:[9,11,12,19],flexibl:[1,15],float64:20,fmt:16,focu:16,folder:[1,2,13,15,16,17,19,21,22],follow:[1,5,6,13,14,15,17,18,19,20,21],forget:[19,20],fork:16,form:[9,18],format:[6,10,12,14],formula:[0,3,5,7,11,15,16,17,20,21,22],formula_fil:9,formula_import:[9,19],formula_path:9,formula_reg:3,formulabas:9,formulaimport:[9,19],formulaparamet:[1,9,16,19],formularegistri:[3,9,10,14,18],found:[2,16],fraction:20,framework:[9,12],freq:[1,18,19],frequenc:[1,3,14,18,19,21,22],from:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],full:[10,12,19],func:19,gener:[10,14,16,17,19,22],get:[3,5,6,10,13,14,16,17,21,22],get_covari:3,get_par:5,getargspec:19,getattr:19,ghi:4,git:[2,15],github:[1,5,16],given:[1,3,5,13,14,18,19,21,22],global:2,goal:[1,15],goe:[2,14],going:19,good:21,got:20,granular:1,graphic:15,group:[1,6,19,20],groupbi:19,groupby_freq:19,guid:15,h5py:16,had:6,hand:17,handl:[7,21],has:[0,1,2,11,15,17,18,19,21,22],have:[0,1,4,5,6,7,8,9,10,16,17,18,19,20,21,22],hdf5:4,hdf5reader:4,heavili:1,help:[1,13,15,19],here:[1,9,19,21,22],hold:17,home:14,hour:[1,3,14,16,18,19,22],hourli:[17,18,19,21,22],hourly_energi:[1,12,17,18],hourly_timeseri:[1,17,18],how:[1,3,6,11,14,15,16,17,18,19,20],howev:[17,19,22],html:16,http:5,hyphen:14,hypotenus:[16,19,20],idx:[3,5],idx_it:14,ignor:[3,18],implement:[1,3,5,6,9,10,15,16,18],import_formula:9,import_modul:10,importlib:10,impos:19,includ:[4,9,15,16,19],incompat:[16,19],incomplet:8,increas:19,indent:5,independ:20,index:[3,6,14,16,17,18,21],index_iter:14,indic:[5,9,17,18,19,22],individu:[1,18,19],infer:19,info:14,inform:[0,1,5,7,13,15,19],inherit:[3,9],init:[12,17],initi:[2,5,7,12,14,17,21,22],inport:9,input:[6,9,17,18,19,20,21],insid:[1,2,17,19],insol:6,inspect:19,inspir:1,instal:[2,13],instanc:[1,5,10,17,21,22],instanti:[15,21,22],instead:[0,1,12,18],integr:[16,18],interfac:[6,9,15],intern:[0,10],interpret:1,interv:[0,1,3,14,18,22],interval_idx:14,interval_length:0,introduc:1,introduct:[1,16],intuit:15,invert:[21,22],inverter_databas:[21,22],irradi:19,irradiancecalc:[1,22],irradianceformula:[1,22],irradianceoutput:[1,22],is_data_load:[14,22],is_dynam:[1,3,18],is_file_read:[4,6],is_paus:14,iscomplet:14,isconst:[4,6,9,12,16,17,19,20,21],isiniti:14,islinear:[9,19],iso:14,ispaus:14,isproperti:[12,17],issav:6,issu:[1,16],item:[1,5,10,11,15,16,18,19,22],iter:14,iteritem:[16,21],itertool:19,its:[1,5,6,7,14,15,19,20,22],itself:[5,7],jacobian:[17,19],join:[12,17,18],json:[0,1,2,4,6,11,12,14,16,17,18,21,22],jsonencod:5,jsonread:[4,16,21],just:[1,18,21,22],keep:[18,19],kei:[3,4,5,6,10,16,18,19,20,22],keynam:22,keyword:[1,4,6,10,14,17,18,19,21,22],kilowatt_hour:22,know:6,known:[1,21],kwarg:[3,4,5,6,9,10,11,12,14,19],kwh:[12,22],lambda:19,last:[17,19],later:[14,17,22],latitud:[1,21,22],layer:[0,1,2,5,11,12,14,15,16,22],layout:21,learn:15,least:[18,22],leg:20,legaci:15,length:[3,14,22],let:[17,18,20,22],librari:19,like:[1,15,17,18,19,21,22],limit:[3,14,22],line:13,linear:[9,19],linux:15,list:[1,3,4,5,9,11,12,14,15,17,18,19,20,21,22],lo_unit:8,load:[1,6,7,8,9,10,11,14,16,22],load_data:[4,6],loadtxt:6,locat:22,log:[0,16,19],longitud:[1,21,22],look:[10,19,20,22],loop:18,lower:[8,15,19],mai:[0,10,19],main:[5,14,19],maintain:14,major:1,make:[1,2,5,7,15,16,17,19,20,22],makefil:16,mani:7,map:[1,5,6,18,19,22],mark:3,marshmallow:1,master:5,match:[16,19],materi:12,mathemat:16,matrix:3,maximum:14,mcs:5,mcve:16,mean:[1,18,22],meant:15,measur:21,member:12,merg:4,meta1:5,meta2:5,meta:[3,4,5,6,7,9,10,11,14,16,17,19,22],meta_nam:[5,6],metaclass:[5,9,12],metadata:21,meter:21,method:[1,3,5,6,9,10,11,14,15,17,18,19,21,22],might:[6,15,17],minimum:14,minut:19,mismatch:16,mismatchregmetakeyserror:[5,8],miss:[1,10,16,19],missingdataerror:8,mix:16,mixedtextnomatcherror:8,model:[2,5,10,12,14,17,18,19,21],model_inst:4,modelbas:11,modelfil:[11,15],modelparamet:[1,11,15,16,22],modelpath:[1,11,15,16,22],modif:6,modifi:1,modul:[1,3,6,10,11,12,14,15,16,17,18,21,22],module_databas:[21,22],monthli:[1,18,19,21,22],monthly_energi:[1,17,18,22],monthly_rollup:[1,18],more:[0,1,5,6,7,13,15,16,17,19,22],most:22,much:[1,22],multipl:[1,19,20,22],must:[3,5,6,9,10,18,19,21],my_model:15,mycarouselproject:15,mydatasourc:6,mydatasrc:6,mymodel:[15,22],mymodelcalcul:15,mymodeldata:15,mymodelformula:15,mymodeloutput:15,mymodelsimul:15,myregistri:5,mysimul:22,name:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,21,22],namespac:19,ndarrai:20,necessari:[17,19],need:[1,6,7,14,15,17,18,19,21,22],nest:[1,15,18,19,21],new_formula:9,newdata:6,newer:21,newest:1,newitem:5,newsapm:[1,22],next:[7,15,17,18,19],night:17,nob:20,non:[6,9,21],none:[1,3,4,5,6,9,10,11,14,17,18,19,20,22],nonlinear:[9,19],normal:6,note:[19,20],noth:[19,21],notic:18,notimpl:10,notimplementederror:[6,9,10,21],now:[0,1,2,20,21,22],number:[14,19,20,22],number_interv:14,numericalexpressionimport:[9,19],numexpr:[9,19],numpi:[5,6,16,19,20,21],object:[1,4,5,10,14,19,22],observ:[19,20],occur:3,often:3,okai:22,old:1,onc:[3,7,16,18],one:[1,3,6,7,9,20,21,22],onli:[1,2,5,11,14,15,17,20,22],onlin:16,open:10,oper:1,opposit:20,opposite_sid:16,option:[2,9,10,11,16,17,19,22],order:[1,3,5,14,16,17,18,19,20,21,22],organ:[5,11,14],orig_data_read:6,origin:[4,6,15,19],other:[1,2,6,11,15,16,17,19,20,22],otherwis:[8,11,19,22],our:[17,18,19,20,21],ourselv:20,out:14,out_reg:[3,16],outarg:3,output:[0,3,5,7,11,14,15,16,18,19,20,21,22],output_fil:12,output_path:12,output_sourc:[10,17],outputbas:12,outputparamet:[1,12,16,17],outputregistri:[3,10,12,14,18],outputs_fil:[5,12,17,18],outputs_path:[5,12,17,18],outvar:3,over:[14,18],overload:10,overrid:[1,5,6,14,18],overriden:[1,18],overview:15,own:[1,15,22],pac:[1,18],packag:[1,2,4,5,10,11,13,15,16,17,18,19,22],page:16,pair:9,panda:17,parallel:1,param:[10,19,20],param_fil:[5,6,11,12,14],paramet:[2,4,8,10,16,19,21],parameter_fil:15,parent:5,part:[1,4,7],particular:[1,10,14],pass:[4,11,14,17,19,21],past:17,path:[0,1,5,6,10,11,12,13,14,15,16,17,18,19,21],pattern:8,paus:[1,14,22],per:1,percent:[6,16,21],perform:[1,5,14,17,18,19],performancecalc:[1,22],performanceformula:[1,22],performanceoutput:[1,22],perhap:17,period:[3,6,18],photovolta:15,pint:[5,9,16,19,20,21],pip:16,place:21,plan:0,pleas:[0,1,15,19],pop:[5,21],popul:22,posit:[4,5,6,9,10,17,18,19,21,22],possibl:20,potenti:1,power:[1,14,17,18,19,21,22],preced:19,preceed:19,prefer:[0,15,17],prefix:[19,22],preload:22,prepar:16,prepend:22,present:16,prev_day_cell_temp:18,prev_encapsulant_brown:18,previou:[1,18,19],print:[16,22],prior:18,produc:6,progress:11,progress_hook:[11,14],proj_path:[1,12,13,15,17,18,22],project:[1,2,12,13,15,17,19,22],propag:[19,20],properti:[1,12,14,22],provid:[1,2,3,5,6,9,11,12,14,19,22],proxi:4,pull:16,purpos:7,put:[1,2,10,18,19],pvlib:[15,21],pvpower:[1,12,15,17,18,19,22],pvpowerdata:[1,21,22],pvpoweroutput:[1,12,17,22],pvpowersim:[1,22],pvsim:6,pvsystem:21,pymoduleimport:[9,19],pypi:16,pythagorean:[16,19,20],pythagorean_thm:16,pythagoreancalc:16,pythagoreandata:16,pythagoreanformula:[16,19],pythagoreanmodel:16,pythagoreanoutput:16,pythagoreansim:16,python:[10,13,15,16,17,18,20],pythonpath:[11,19,22],quantiti:[3,5,6,8,18,19,20],queue:14,quick:[7,15],quickli:[14,15],quickstart:[17,22],rais:[5,6,8,9,10,20,21,22],re_meth:8,read:[4,6,9,11,14,15,21,22],reader:[9,10,15,16],realli:22,receiv:14,recommend:0,refer:[15,17,18,20,22],reg:10,reg_cl:10,regist:[5,6,7,8,9,21,22],registri:[6,10,16,18,20,21],regsitri:16,rel:[10,19,22],rel_path:10,relat:19,releas:[1,16],reload:[15,22],relpath:10,remain:17,rememb:20,remov:[0,5],renam:0,repeat:20,replac:1,report:16,repositori:[2,15],repres:[1,17,22],request:16,requir:[1,3,6,9,14,18],reshap:[16,19,20],resid:10,resiz:17,resolut:1,resolv:1,respect:[4,18,20],respons:22,rest:[17,22],restart:14,restrict:7,result:[6,17,19],resum:14,retriev:[4,17],retrieve_sam:21,revert:17,right:19,roadmap:16,roll:18,rollup:19,root:17,routin:16,rrule:19,rule:5,run:[1,7,11,16,17,18],same:[6,7,14,15,18,19,20,21,22],sampl:2,sandia_modul:21,sandia_perfmod_newstyl:22,save:[6,7,11,14,15,22],save_nam:6,saveas_json:6,sc_const:19,scalar:20,scene:15,schema:4,scipi:19,script:[15,16],search:[16,19],second:[18,19,20,22],secondli:19,section:[1,5,7,15],see:[0,1,5,10,13,14,15,19,22],self:[16,21],sensit:[16,17,20],sent:14,separ:[1,5,15],seri:6,serial:1,serv:7,set:[0,1,2,3,5,6,8,12,14,15,16,17,18,19,20,21],set_meta:5,set_param_file_or_paramet:5,setup:16,sever:[1,7,21,22],shape:20,shift:18,should:[0,1,3,4,5,6,8,9,10,11,14,15,17,18,19,20,21,22],show:[17,20],shown:22,sigma:21,signific:1,sim1:22,sim2:22,sim3:22,sim:[10,14],sim_length:[0,1,14,16,22],sim_src:10,simbas:14,simfil:14,similar:[6,12],simparamet:[1,14,16,22],simpl:[15,20],simregistri:[10,14,22],simul:[3,4,5,6,7,11,15,17,18,21],simulation_length:0,sinc:[1,22],size:[12,17],skip:[17,22],skipkei:5,smoothli:2,snippet:[17,18],solar:[6,14],some:[0,1,13,17,20,21],someon:14,sort:8,sort_kei:5,sourc:[3,4,5,8,9,10,11,12,14,15,16,21,22],specif:[1,6,10,17,22],specifi:[1,6,9,10,11,12,14,15,17,18,19,20,21,22],sphinx:16,splat:1,split:[1,3],sqlalchemi:1,sqrt:[16,19,20],squar:[6,14,17,21],src_cl:10,standard:[7,19],star:1,start:[1,10,13,14,16,17,19,22],state:[6,11,14,15,19,22],stdev:20,step:[1,15,16,17,18],still:[0,15,22],stop:14,store:[7,14,16,17,18,22],str:[3,5,6,8,10,11,14,19],straightforward:1,string:[9,14,19,21],strip:19,structur:[7,13,22],style:[0,15,17,22],sub:[4,5,6],subclass:[5,6,7,9,10,11,12,14,15,16,17,18,19,21,22],subset:[5,6],suffici:14,suggest:16,sum:[19,22],sunpow:16,superclass:[5,6,21],support:19,sure:2,surface_azimuth:[21,22],system:[2,18,19,21,22],tabl:[17,18,19,21,22],take:[1,7,11,14,16,18,19,20,22],takeawai:20,tamb:[1,21,22],task:21,tcell24:5,tcell:18,tell:[17,18,22],temperatur:18,term:[17,18,19],termin:15,test:[5,20],test_arg:5,test_fcn:5,text:16,than:[1,6,7,22],thei:[1,5,6,17,22],them:[0,1,5,10,15,18],theorem:[16,19,20],therefor:[1,5,15,17,18,19,20],thi:[0,1,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,22],think:20,third:15,those:[1,18,22],though:2,three:[15,18],threshold:[1,3,14,17,18,22],through:[5,15,16],time:[1,3,6,14,18,19,22],timedelta64:19,timedelta:19,timeseri:[6,12,19,21],timestamp:[1,17,18,21],timestamp_count:[21,22],timestamp_start:[21,22],timestep:[3,18,19,22],timezon:[21,22],tmy3:6,todo:21,togeth:[1,6,17,19,22],toggl:21,topolog:8,total:[14,19],track:1,transfer:7,tree:16,tri:[10,20],triangl:19,ts_:19,tupl:[9,14,22],turn:14,tuscon:[1,22],tuscon_sapm:[1,22],tutori:[0,1],twice:[7,18],two:[4,15,17,18,20,22],type:[5,6,9,14,16,19,20,21],typeerror:20,typic:[15,21],unc_wrapper_arg:20,uncertainati:20,uncertainti:[1,6,7,15,16,17],uncertainty_wrapp:20,uncertaintyboundsunitserror:8,uncertaintypercentunitserror:[6,8,21],uncertaintyvarianceerror:[8,21],uncertaintywrapp:[16,19,20],under:16,underscor:10,understand:20,unfortun:1,unhandl:22,uniniti:22,unit:[1,4,6,9,12,15,16,17,21,22],unitregistri:20,unless:22,unnam:16,unnameddataerror:8,unregist:5,until:1,up_unit:8,updat:[7,11],upper:[8,19],ups:18,ureg:[3,5,16,20,21],usag:[13,14],use:[0,1,5,10,11,12,14,16,17,18,19,20,21,22],used:[0,1,3,4,5,6,7,9,10,11,14,15,16,17,18,19,20,22],useful:[15,19],user:[1,7,15,22],user_attr:1,uses:[7,18,19],using:[0,1,4,5,6,9,15,16,17,18,19,21,22],utc:6,utf:[5,19],util:[1,18,19],utilitycalc:[1,18,22],utilityformula:[1,19,22],uwind:[1,21,22],valid:[7,19],valu:[1,3,6,7,8,9,10,12,14,18,19,20,21,22],valueerror:20,varg:3,vari:[6,21],variabl:[2,3,14],varianc:[3,6,16,17,20],variat:7,variou:16,vector:[19,20],verbos:19,version:[0,1,13,15,16,18],visual:16,wai:[1,15,20],want:[1,15,18,20,22],warn:19,watt_hour:[1,19],weekdai:19,weekli:19,weekstart:19,well:19,were:[1,17,20],what:[6,14,15,17,18,22],whatev:19,when:[1,4,5,6,8,15,17,19,21,22],where:[6,14,19,22],wherea:21,whether:[5,18,22],which:[0,1,4,5,6,8,9,10,11,14,17,18,19,21,22],whose:6,wiki:16,window:15,without:[6,8,15,18,22],wkst:19,work:[15,20,22],workaround:22,workbook:21,worri:16,would:[17,20],wrap:[1,9,19,20],wrapper:[19,20],write:[1,14,15,17],write_field:[1,14,16,22],write_frequ:[1,14,22],written:[14,19,22],xlrd:[6,16,21],year:[14,22],yearli:[1,18,19,21,22],yearly_energi:12,yearly_rollup:[1,18],yet:[4,15],yield:[18,19],you:[0,1,14,15,16,18,19,20,22],your:[0,12,13,15,22],zenith:[4,6],zero:14,zip:19},titles:["Brown Bicycle Bears (v0.2.7)","Caramel Corn CONSTANTS (v0.3.1)","Carousel (v0.3.2)","Calculations","Contributions","Core","Data Sources","Developers","Exceptions","Formulas","Layers","Models","Outputs","Scripts","Simulations","Getting Started","Welcome to Carousel\u2019s documentation!","Tutorial 1: Outputs","Tutorial 2: Calculations","Tutorial 3: Formulas","Tutorial 3: More Detail on Units and Uncertainty","Tutorial 4: Data","Tutorial 5: Models and Simulations"],titleterms:{"class":[1,15,17,18,19,21,22],"default":22,"import":[9,19],"return":18,"static":[1,18],announc:16,api:16,argument:[4,5,18,19,22],attribut:[15,17,18,19,21,22],base:[3,5,6,9,11,12,14],bear:0,bicycl:0,bound:8,brown:0,calcul:[1,3,10,18],caramel:1,carousel:[2,5,8,13,16],circular:8,common:5,constant:[1,17],contribut:[4,16],convert:5,core:5,corn:1,data:[1,6,8,10,21],dataread:6,decor:5,depend:[1,8],detail:20,develop:7,dimensionless:5,displai:22,django:4,document:16,dulwich:2,duplic:8,dynam:[1,18],encod:5,error:8,exampl:[15,16],except:8,express:[9,19],field:22,file:[0,15,17,18],filenam:0,flag:17,formula:[1,9,10,18,19],framework:16,get:15,hd5f:4,histori:16,incompat:1,index:5,indic:16,instal:16,instanc:15,introduct:7,item:8,json:[5,15],jsonread:6,kei:8,layer:[7,10],match:8,materi:17,meta:[1,8,15,18,21],migrat:1,mismatch:8,miss:8,mix:8,model:[0,1,4,7,11,15,16,22],modul:[9,19],more:20,numer:[9,19],option:[1,15,18,21],output:[1,10,12,17],paramet:[0,1,3,5,6,9,11,12,14,15,17,18,22],pass:22,path:22,percent:8,pint:1,power:15,prepar:21,properti:17,python:[9,19],quickstart:[2,13,15,16],reader:[4,6,21],registri:[3,5,7,8,9,12,14,17,22],regsitri:6,requir:[2,16],run:22,script:13,sensit:19,set:22,setup:2,simul:[0,1,10,14,16,22],sourc:[1,6],start:15,subclass:0,system:15,tabl:16,text:8,timeseri:17,tutori:[15,16,17,18,19,20,21,22],uncertainti:[8,19,20,21],unit:[5,8,19,20],unnam:8,valu:17,varianc:[8,21],welcom:16,workaround:1,write:22}})