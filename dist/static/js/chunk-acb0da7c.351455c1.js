(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acb0da7c"],{"019a":function(e,t,a){},1451:function(e,t,a){},"25b1":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tao-table"},[a("el-table",{staticClass:"myTable",attrs:{data:e.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[e.expand?a("el-table-column",{attrs:{type:"expand"}},[[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e._t("expand",[a("el-form-item",{attrs:{label:"商品名称"}},[a("div",[e._v("sdnvbgksdfbnsb")])])])],2)]],2):e._e(),e._l(e.title,(function(e,t){return a("el-table-column",{key:t,attrs:{align:"center",label:e.label,prop:e.prop,sortable:!!e.sort}})})),e.showTool?a("el-table-column",{attrs:{align:"center",label:"操作",width:e.toolWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showEdit?a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("\n          "+e._s(e.editTxt)+"\n        ")]):e._e(),e.showDelete?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2199528418)}):e._e()],2),a("el-row",{staticClass:"path"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content table-page"},[e._t("page",[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"prev-click":e.lastPath,"next-click":e.nextPath,"current-change":e.currentPath}})])],2)])],1)],1)},n=[],r={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(e,t){this.$emit("edit",{index:e,row:t})},handleDelete(e,t){this.$emit("delete",{index:e,row:t})},lastPath(e){this.$emit("last",e)},nextPath(e){this.$emit("next",e)},currentPath(e){this.$emit("current",e)}},computed:{}},o=r,i=(a("9e1d"),a("2877")),s=Object(i["a"])(o,l,n,!1,null,"65e74063",null);t["a"]=s.exports},"281c":function(e,t,a){"use strict";a("be73")},"42ef":function(e,t,a){"use strict";a("95ae")},"4ab5":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"g",(function(){return d}));var l=a("1bab");function n(e,t=10){return Object(l["a"])({url:`/role/search/${e}/${t}`})}function r(e){return Object(l["a"])({url:"/role/"+e,method:"delete"})}function o(e){return Object(l["a"])({url:"/role",method:"put",data:e})}function i(e){return Object(l["a"])({url:"/role",method:"post",data:e})}function s(e){return Object(l["a"])({url:"/role/"+e})}function c(){return Object(l["a"])({url:"/role"})}function u(e){return Object(l["a"])({url:"/authority/getRoleAuthority?roleId="+e})}function d(e){let{rightIds:t,roleId:a}=e;return Object(l["a"])({url:`/authority/giveRight2Role?rightIds=${t}&roleId=${a}`,method:"post"})}},"4d59":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-row",[a("el-col",{staticClass:"headCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[e._t("module")],2)]),a("el-col",{staticClass:"myCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[e._t("table")],2)])],1)],1)},n=[],r=a("25b1"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)},i=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,u=a("2877"),d=Object(u["a"])(c,o,i,!1,null,"4c4c51b0",null),m=d.exports,h={components:{Table:r["a"],InputGroup:m}},p=h,f=(a("42ef"),Object(u["a"])(p,l,n,!1,null,"ee9fc8a4",null));t["a"]=f.exports},"8d85":function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return c}));var l=a("1bab");function n(e,t=10){return Object(l["a"])({url:`/user/all/${e}/${t}`})}function r(){return Object(l["a"])({url:"/user/contacts",method:"post"})}function o(e){return Object(l["a"])({url:"/user/"+e,method:"delete"})}function i(e){let{userId:t,roleIds:a}=e;return Object(l["a"])({url:`authority/giveRole2User?userId=${t}&roleIds=${a}`,method:"post"})}function s(e){let t=0==e.type?"/user/addAdmin":"/user/addTeacher";return Object(l["a"])({url:t,method:"post",data:e})}function c(e){return Object(l["a"])({url:"/user/"+e})}},9419:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("Management",[a("div",{attrs:{slot:"module"},slot:"module"},[a("InputGroup",{on:{append:e.append,search:e.search,showAll:e.showAll}})],1),a("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[a("Table",{attrs:{tableData:e.tableData,title:e.title,total:e.totalElements,page:e.page,editTxt:"设置角色",toolWidth:220},on:{edit:e.handleEdit,delete:e.handleDelete,current:e.currentPath}})],1)]),a("UserDialog",{attrs:{isShow:e.isShow,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}}),a("SetRoleDialog",{attrs:{isShow:e.isShowSet,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}})],1)},n=[],r=a("4d59"),o=a("25b1"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{attrs:{placeholder:"id"},model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id","string"===typeof t?t.trim():t)},expression:"formInline.id"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v("添加")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(e){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")}}},u=c,d=a("2877"),m=Object(d["a"])(u,i,s,!1,null,"58bf54a0",null),h=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel}},[a("div",{attrs:{slot:"form"},slot:"form"},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.row}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.row.nickname,callback:function(t){e.$set(e.row,"nickname",t)},expression:"row.nickname"}})],1),a("el-form-item",{attrs:{label:"名字"}},[a("el-input",{model:{value:e.row.username,callback:function(t){e.$set(e.row,"username",t)},expression:"row.username"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.row.type,callback:function(t){e.$set(e.row,"type",t)},expression:"row.type"}},[a("el-option",{attrs:{label:"管理员",value:"0"}}),a("el-option",{attrs:{label:"老师",value:"1"}})],1)],1),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{model:{value:e.row.phone,callback:function(t){e.$set(e.row,"phone",t)},expression:"row.phone"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:e.row.password,callback:function(t){e.$set(e.row,"password",t)},expression:"row.password"}})],1)],1)],1)])},f=[],b=a("8c8a"),w={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},g=w,y=(a("9de0"),Object(d["a"])(g,p,f,!1,null,"596f2356",null)),v=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel}},[a("div",{attrs:{slot:"form"},slot:"form"},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.row}},[a("el-form-item",{attrs:{label:"名字"}},[a("el-input",{model:{value:e.row.username,callback:function(t){e.$set(e.row,"username",t)},expression:"row.username"}})],1),a("el-form-item",{attrs:{label:"权限"}},[a("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.row.role,(function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.id,name:"role"}},[e._v(e._s(t.name))])})),1)],1)],1)],1)])},x=[],j={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{}}}},data(){return{checked:[]}},methods:{confirm(){this.$emit("confirm",{id:this.row.id,role:this.checked,edit:this.row.edit})},cancel(){this.$emit("cancel")},handleCheckAllChange(e){console.log(e)},handleCheckedCitiesChange(e){console.log(e)}}},O=j,$=(a("9b72"),Object(d["a"])(O,k,x,!1,null,null,null)),_=$.exports,S=a("5c96"),D=a("7aa9"),I=a("8d85"),E=a("4ab5"),C={components:{Management:r["a"],Table:o["a"],InputGroup:h,UserDialog:v,SetRoleDialog:_},data(){return{tableData:[],title:[{label:"名字",prop:"username"},{label:"昵称",prop:"nickname"},{label:"类型",prop:"type"},{label:"手机号",prop:"phone"}],role:[],row:{},isShow:!1,isShowSet:!1,totalElements:0,page:1}},created(){this.allUser(),this.getRole()},methods:{async userByPathAndSize(e,t=10){const a=await Object(I["e"])(e,t);this.totalElements=a.data.totalElements,this.tableData=a.data.content,this.page=e},async getRole(){let e=await Object(E["c"])();this.role=e.data},async allUser(){let e=await Object(I["d"])();this.tableData=[...e.data.student,...e.data.teacher],this.tableData.forEach(e=>{e.type=0==e.type?"管理员":"老师"})},handleEdit(e){this.row={username:e.row.username,id:e.row.id,role:this.role,edit:!0},this.isShowSet=!0},handleDelete(e){S["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async t=>{let a=await Object(I["c"])(e.row.id);a.flag?(Object(D["a"])("删除","success"),this.allUser(1)):Object(D["a"])("删除","error")}).catch(e=>{})},async confirm(e){if(this.closeDialog(),e.edit){let t=await Object(I["a"])({userId:e.id,roleIds:e.role});t.flag?(Object(D["a"])("角色赋予","success"),this.allUser(1)):Object(D["a"])("角色赋予","error")}else{let t=await Object(I["b"])({nickname:e.nickname,passwork:e.passwork,phone:e.phone,type:e.type,username:e.username});t.flag?(Object(D["a"])("添加","success"),this.allUser(1)):Object(D["a"])("添加","error")}},async search(e){let t=await Object(I["f"])(e.id);t.flag?(this.tableData=[t.data],this.totalElements=this.tableData.length,Object(D["a"])("查询")):Object(D["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShowSet=!1,this.isShow=!1},currentPath(e){this.allUser(e)},append(){this.row={},this.isShow=!0},showAll(){this.userByPathAndSize(1)}},computed:{}},T=C,B=(a("281c"),Object(d["a"])(T,l,n,!1,null,null,null));t["default"]=B.exports},"95ae":function(e,t,a){},"9b72":function(e,t,a){"use strict";a("019a")},"9de0":function(e,t,a){"use strict";a("bfa5")},"9e1d":function(e,t,a){"use strict";a("1451")},be73:function(e,t,a){},bfa5:function(e,t,a){}}]);
//# sourceMappingURL=chunk-acb0da7c.351455c1.js.map