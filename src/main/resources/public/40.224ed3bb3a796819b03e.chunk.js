webpackJsonp([40],{UmK5:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("/oeL"),u=function(){return function(){}}(),i=e("qbdv"),r=e("BkNc"),o=e("bm2B"),a=e("9Qcf"),s=e("maBJ"),c=e("R08E"),d=e("Qg/J"),_=e("WDs4"),p=e("jk5u"),h=e("g5gQ"),v=e("mtQK"),g=e("Rhg7"),f=e("5h8W"),b=e("5maJ"),m=e("vjf1"),j=e("zGhY"),y=e("1N5f"),w=e("KGm0"),S=e("Mqds"),P=e("JNkf"),R=e("I00F"),M=e("nc++"),O=e("b5Sx"),x=(e("82j9"),e("ZV8k")),T=e("oRYE"),C=e("kUuJ"),D=e("6reP"),I=function(){function l(l,n,e,t,u,i){this.location=l,this._state=n,this._sockService=e,this.userService=t,this.projectService=u,this.router=i}return l.prototype.canActivate=function(l,n){var e=C.b.getOrgAndPrjId(n.url);return console.log("PrjResolve - canActivate",e.prjId,T.a.CURR_PRJ_ID),T.a.CURR_PRJ_ID==e.prjId||this.projectService.change(e.prjId).toPromise().then(function(l){var n=l.data;return"project"==n.type&&(T.a.CURR_PRJ_ID=n.id,T.a.CURR_PRJ_NAME=n.name),!0})},l.ctorParameters=function(){return[{type:i.Location},{type:x.a},{type:D.a},{type:w.a},{type:O.a},{type:r.k}]},l}(),k=e("3SRs"),E=e("KDXw"),L=e("D7l2"),N=function(){function l(l){this._route=l}return l.prototype.ngOnInit=function(){var l=this;this._route.params.forEach(function(n){l.prjId=n.prjId}),console.log("==Current Prj",this.prjId,T.a.CURR_PRJ_ID)},l.ctorParameters=function(){return[{type:r.a}]},l}(),F=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function U(l){return t["\u0275vid"](0,[(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","prj"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](73728,null,0,r.o,[r.p,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null]],null,null),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n  "]))],null,null)}var A=t["\u0275ccf"]("prj",N,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,1,"prj",[],null,null,null,U,F)),t["\u0275did"](57344,null,0,N,[r.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),J=e("a1Di"),V=e("N3K9"),z=e("U80n"),B=e("TJST"),$=e("4ITx"),H=e("Lp8h"),K=e("eehj"),Q=function(){function l(l,n,e,t,u,i){this._route=l,this._verService=n,this._envService=e,this._userService=t,this._projectService=u,this._reportService=i,this.tab="ver",this.project={},this.plans=[],this.histories={},this.vers=[],this.envs=[],this.users=[],this.chartData={},this.orgId=T.a.CURR_ORG_ID}return l.prototype.ngOnInit=function(){var l=this;this.routeSub=this._route.pathFromRoot[5].params.subscribe(function(n){l.id!=+n.prjId&&(l.id=+n.prjId,l.loadData(),l.tabChange(l.tab))})},l.prototype.ngAfterViewInit=function(){},l.prototype.loadData=function(){var l=this;this.id&&(this._projectService.view(this.id).subscribe(function(n){l.project=n.project,l.plans=n.plans,l.histories=n.histories,"project"==n.project.type&&(T.a.CURR_PRJ_ID=l.project.id,T.a.CURR_PRJ_NAME=l.project.name)}),this._reportService.projectReport(this.id).subscribe(function(n){l.chartData=n.data}))},l.prototype.tabChange=function(l){var n=this;this.tab!=l&&(this.tab=l),"ver"===this.tab?this._verService.listLastest().subscribe(function(l){n.vers=l.data}):"env"===this.tab?this._envService.listLastest().subscribe(function(l){n.envs=l.data}):"user"===this.tab?this._userService.listLastest().subscribe(function(l){n.users=l.data}):this.tab},l.prototype.ngOnDestroy=function(){this.routeSub.unsubscribe()},l.ctorParameters=function(){return[{type:r.a},{type:E.a},{type:L.a},{type:w.a},{type:O.a},{type:k.a}]},l}(),q=[[".project-view{display:-ms-flexbox;display:flex;padding:15px}.project-view .content{-ms-flex:1;flex:1;margin-right:20px}.project-view .content .list-toolbar{margin-top:3px}.project-view .content design-progress,.project-view .content execution-process{margin-bottom:20px;width:100%;background-color:#fff}.project-view .content .cards .col{padding:0}.project-view .content .cards .col.col1{margin-right:10px}.project-view .content .cards .col.col2{margin-left:10px}.project-view .content .cards .col .card{box-shadow:none}.project-view .content .cards .col .card .card-block{padding:10px}.project-view .content .cards .col .card .card-block .table>tbody>tr>td{border-top:none;border-bottom:1px solid #dcdcdc}.project-view .info{width:450px}.project-view .info .manage .project-manage{padding:5px 5px 5px 10px}.project-view .info .manage .project-manage .item{line-height:18px}.project-view .info .manage .project-manage .item .dict{color:#000;font-style:italic}.project-view .info .manage .project-manage .more{text-align:right}"]],G=t["\u0275crt"]({encapsulation:2,styles:q,data:{}});function W(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](2),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](2),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](1),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,7,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n                  "])),(l()(),t["\u0275eld"](0,null,null,4,"span",[["class","link no-underline"],["prj-privilege",""]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==t["\u0275nov"](l,20).onClick()&&u);return u},null,null)),t["\u0275did"](8192,null,0,r.l,[r.k,r.a,[8,null],t.Renderer,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](1),t["\u0275did"](368640,null,0,J.a,[P.a,t.ElementRef,t.Renderer],{privs:[0,"privs"]},null),(l()(),t["\u0275ted"](null,["\u67e5\u770b"])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275ted"](null,["\n              "]))],function(l,n){var e=n.component;l(n,20,0,l(n,21,0,"/pages/org/"+e.orgId+"/prj/"+e.id+"/implement/plan/"+n.context.$implicit.id+"/view"));l(n,22,0,"test_plan-view")},function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,t["\u0275unv"](n,6,0,l(n,7,0,t["\u0275nov"](n.parent,0),n.context.$implicit.startTime,"y/MM/dd"))),l(n,10,0,t["\u0275unv"](n,10,0,l(n,11,0,t["\u0275nov"](n.parent,0),n.context.$implicit.endTime,"y/MM/dd"))),l(n,14,0,t["\u0275unv"](n,14,0,l(n,15,0,t["\u0275nov"](n.parent,1),n.context.$implicit.status)))})}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,7,"div",[["class","action-html descr-item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275eld"](0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275ted"](null,["\xa0\xa0\n              "])),(l()(),t["\u0275eld"](0,null,null,2,"div",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),t["\u0275ppd"](2),(l()(),t["\u0275ted"](null,["\n            "]))],null,function(l,n){l(n,2,0,n.context.$implicit.title),l(n,5,0,t["\u0275unv"](n,5,0,l(n,6,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.createTime,"HH:mm:ss")))})}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,10,"div",[["class","item"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            ","\n          "])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","descr"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275and"](8388608,null,null,1,null,Y)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n        "]))],function(l,n){l(n,8,0,n.context.$implicit.value)},function(l,n){l(n,3,0,n.context.$implicit.key)})}function Z(l){return t["\u0275vid"](0,[t["\u0275pid"](0,i.DatePipe,[t.LOCALE_ID]),t["\u0275pid"](0,V.a,[]),t["\u0275pid"](0,z.a,[]),(l()(),t["\u0275eld"](0,null,null,105,"div",[["class","project-view"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n\n  "])),(l()(),t["\u0275eld"](0,null,null,86,"div",[["class","content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275eld"](0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,20,"div",[["class","list-toolbar col-xl-12"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["",""])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","filter"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275ted"](null,["\n\n        "])),(l()(),t["\u0275eld"](0,null,null,8,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,5,"button",[["class","btn btn-secondary btn-with-icon btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;"click"===n&&(u=!1!==t["\u0275nov"](l,23).onClick()&&u);return u},null,null)),t["\u0275did"](8192,null,0,r.l,[r.k,r.a,[8,null],t.Renderer,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](1),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,0,"i",[["class","fa fa-plus-circle"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u8fd4\u56de\n          "])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,13,"div",[["class","row chart"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"design-progress",[],null,null,null,B.b,B.a)),t["\u0275did"](57344,null,0,$.a,[],{showTitle:[0,"showTitle"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,1,"execution-process",[],null,null,null,H.b,H.a)),t["\u0275did"](57344,null,0,K.a,[],{showTitle:[0,"showTitle"],data:[1,"data"]},null),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n\n    "])),(l()(),t["\u0275eld"](0,null,null,43,"div",[["class","row cards"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,40,"div",[["class","col"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275eld"](0,null,null,37,"div",[["class","card"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            \u6d4b\u8bd5\u8ba1\u5212\n          "])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275eld"](0,null,null,31,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275eld"](0,null,null,28,"table",[["class","table"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275eld"](0,null,null,19,"thead",[["class","thead-inverse"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275eld"](0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[["style","width: 200px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u540d\u79f0"])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[["style","width: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u8ba1\u5212\u5f00\u59cb\u65f6\u95f4"])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[["style","width: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u8ba1\u5212\u7ed3\u675f\u65f6\u95f4"])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[["style","width: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u72b6\u6001"])),(l()(),t["\u0275ted"](null,["\n                "])),(l()(),t["\u0275eld"](0,null,null,1,"th",[["style","width: 150px"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\u64cd\u4f5c"])),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275ted"](null,["\n\n              "])),(l()(),t["\u0275eld"](0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275and"](8388608,null,null,1,null,W)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](null,["\n              "])),(l()(),t["\u0275ted"](null,["\n            "])),(l()(),t["\u0275ted"](null,["\n          "])),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n  "])),(l()(),t["\u0275ted"](null,["\n\n  "])),(l()(),t["\u0275eld"](0,null,null,14,"div",[["class","info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275eld"](0,null,null,11,"div",[["class","activity"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        \u9879\u76ee\u6d3b\u52a8\n      "])),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275eld"](0,null,null,5,"div",[["class","list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](null,["\n        "])),(l()(),t["\u0275and"](8388608,null,null,2,null,X)),t["\u0275did"](401408,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](1),(l()(),t["\u0275ted"](null,["\n      "])),(l()(),t["\u0275ted"](null,["\n    "])),(l()(),t["\u0275ted"](null,["\n  "])),(l()(),t["\u0275ted"](null,["\n\n"])),(l()(),t["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,23,0,l(n,24,0,"/pages/org/"+e.orgId+"/prjs"));l(n,37,0,!0,e.chartData.design);l(n,43,0,!0,e.chartData.exe),l(n,84,0,e.plans),l(n,103,0,t["\u0275unv"](n,103,0,l(n,104,0,t["\u0275nov"](n,2),e.histories)))},function(l,n){l(n,14,0,n.component.project.name)})}var ll=t["\u0275ccf"]("project-view",Q,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,null,null,1,"project-view",[],null,null,null,Z,G)),t["\u0275did"](2220032,null,0,Q,[r.a,E.a,L.a,w.a,O.a,k.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),nl=e("KBuQ"),el=e("9GFz"),tl=e("CPp0"),ul=e("a3e3");e.d(n,"PrjModuleNgFactory",function(){return al});var il,rl=this&&this.__extends||(il=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e])},function(l,n){function e(){this.constructor=l}il(l,n),l.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),ol=function(l){function n(n){return l.call(this,n,[A,ll],[])||this}return rl(n,l),Object.defineProperty(n.prototype,"_NgLocalization_22",{get:function(){return null==this.__NgLocalization_22&&(this.__NgLocalization_22=new i.NgLocaleLocalization(this.parent.get(t.LOCALE_ID))),this.__NgLocalization_22},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_\u0275i_23",{get:function(){return null==this.__\u0275i_23&&(this.__\u0275i_23=new o.y),this.__\u0275i_23},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_24",{get:function(){return null==this.__FormBuilder_24&&(this.__FormBuilder_24=new o.e),this.__FormBuilder_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UserService_25",{get:function(){return null==this.__UserService_25&&(this.__UserService_25=new w.a(this.parent.get(x.a),this.parent.get(nl.a),this.parent.get(el.a))),this.__UserService_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ClientService_26",{get:function(){return null==this.__ClientService_26&&(this.__ClientService_26=new S.a(this.parent.get(x.a),this.parent.get(nl.a),this.parent.get(el.a))),this.__ClientService_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PrivilegeService_27",{get:function(){return null==this.__PrivilegeService_27&&(this.__PrivilegeService_27=new P.a),this.__PrivilegeService_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_OrgPrivilegeDirective_28",{get:function(){return null==this.__OrgPrivilegeDirective_28&&(this.__OrgPrivilegeDirective_28=new R.a(this._PrivilegeService_27,this.parent.get(t.ElementRef),this.parent.get(t.Renderer))),this.__OrgPrivilegeDirective_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_AccountService_30",{get:function(){return null==this.__AccountService_30&&(this.__AccountService_30=new M.a(this.parent.get(el.a),this.parent.get(nl.a))),this.__AccountService_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ProjectService_31",{get:function(){return null==this.__ProjectService_31&&(this.__ProjectService_31=new O.a(this.parent.get(el.a),this.parent.get(x.a))),this.__ProjectService_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PrjResolve_32",{get:function(){return null==this.__PrjResolve_32&&(this.__PrjResolve_32=new I(this.parent.get(i.Location),this.parent.get(x.a),this.parent.get(D.a),this._UserService_25,this._ProjectService_31,this.parent.get(r.k))),this.__PrjResolve_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ReportService_33",{get:function(){return null==this.__ReportService_33&&(this.__ReportService_33=new k.a(this.parent.get(el.a))),this.__ReportService_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_VerService_34",{get:function(){return null==this.__VerService_34&&(this.__VerService_34=new E.a(this.parent.get(el.a))),this.__VerService_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EnvService_35",{get:function(){return null==this.__EnvService_35&&(this.__EnvService_35=new L.a(this.parent.get(el.a))),this.__EnvService_35},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._RouterModule_1=new r.n(this.parent.get(r.t,null),this.parent.get(r.k,null)),this._\u0275ba_2=new o.v,this._FormsModule_3=new o.i,this._ReactiveFormsModule_4=new o.s,this._TranslateModule_5=new a.b,this._TranslateStore_6=new s.a,this._TranslateLoader_7=p.b(this.parent.get(tl.e)),this._TranslateParser_8=new c.a,this._MissingTranslationHandler_9=new d.a,this._USE_STORE_10=void 0,this._TranslateService_11=new _.a(this._TranslateStore_6,this._TranslateLoader_7,this._TranslateParser_8,this._MissingTranslationHandler_9,this._USE_STORE_10),this._AppTranslationModule_12=new p.a(this._TranslateService_11),this._NgbDropdownModule_13=new h.a,this._PipeModule_14=new v.a,this._NgaModule_15=new g.a,this._NgbTabsetModule_16=new f.a,this._DirectiveModule_17=new b.a,this._AngularEchartsModule_18=new m.a,this._ChartDesignModule_19=new j.a,this._ChartExecutionModule_20=new y.a,this._PrjModule_21=new u,this._ROUTES_29=[[{path:":prjId",component:N,canActivate:[I],children:[{path:"view",component:Q},{path:"design",loadChildren:"../../../design/design.module#DesignModule"},{path:"implement",loadChildren:"../../../implement/implement.module#ImplementModule"},{path:"issue",loadChildren:"../../../issue/issue.module#IssueModule"},{path:"issue-query",loadChildren:"../../../issue-query/issue-query.module#IssueQueryModule"}]}]],this._PrjModule_21},n.prototype.getInternal=function(l,n){return l===i.CommonModule?this._CommonModule_0:l===r.n?this._RouterModule_1:l===o.v?this._\u0275ba_2:l===o.i?this._FormsModule_3:l===o.s?this._ReactiveFormsModule_4:l===a.b?this._TranslateModule_5:l===s.a?this._TranslateStore_6:l===ul.b?this._TranslateLoader_7:l===c.b?this._TranslateParser_8:l===d.b?this._MissingTranslationHandler_9:l===_.b?this._USE_STORE_10:l===_.a?this._TranslateService_11:l===p.a?this._AppTranslationModule_12:l===h.a?this._NgbDropdownModule_13:l===v.a?this._PipeModule_14:l===g.a?this._NgaModule_15:l===f.a?this._NgbTabsetModule_16:l===b.a?this._DirectiveModule_17:l===m.a?this._AngularEchartsModule_18:l===j.a?this._ChartDesignModule_19:l===y.a?this._ChartExecutionModule_20:l===u?this._PrjModule_21:l===i.NgLocalization?this._NgLocalization_22:l===o.y?this._\u0275i_23:l===o.e?this._FormBuilder_24:l===w.a?this._UserService_25:l===S.a?this._ClientService_26:l===P.a?this._PrivilegeService_27:l===R.a?this._OrgPrivilegeDirective_28:l===r.i?this._ROUTES_29:l===M.a?this._AccountService_30:l===O.a?this._ProjectService_31:l===I?this._PrjResolve_32:l===k.a?this._ReportService_33:l===E.a?this._VerService_34:l===L.a?this._EnvService_35:n},n.prototype.destroyInternal=function(){this.__OrgPrivilegeDirective_28&&this._OrgPrivilegeDirective_28.ngOnDestroy()},n}(t["\u0275NgModuleInjector"]),al=new t.NgModuleFactory(ol,u)}});