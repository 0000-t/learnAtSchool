(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8ad8136"],{1451:function(e,t,l){},"25b1":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tao-table"},[l("el-table",{staticClass:"myTable",attrs:{data:e.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[e.expand?l("el-table-column",{attrs:{type:"expand"}},[[l("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e._t("expand",[l("el-form-item",{attrs:{label:"商品名称"}},[l("div",[e._v("sdnvbgksdfbnsb")])])])],2)]],2):e._e(),e._l(e.title,(function(e,t){return l("el-table-column",{key:t,attrs:{align:"center",label:e.label,prop:e.prop,sortable:!!e.sort}})})),e.showTool?l("el-table-column",{attrs:{align:"center",label:"操作",width:e.toolWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showEdit?l("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("\n          "+e._s(e.editTxt)+"\n        ")]):e._e(),e.showDelete?l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2199528418)}):e._e()],2),l("el-row",{staticClass:"path"},[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"grid-content table-page"},[e._t("page",[l("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"prev-click":e.lastPath,"next-click":e.nextPath,"current-change":e.currentPath}})])],2)])],1)],1)},n=[],o={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(e,t){this.$emit("edit",{index:e,row:t})},handleDelete(e,t){this.$emit("delete",{index:e,row:t})},lastPath(e){this.$emit("last",e)},nextPath(e){this.$emit("next",e)},currentPath(e){this.$emit("current",e)}},computed:{}},r=o,i=(l("9e1d"),l("2877")),s=Object(i["a"])(r,a,n,!1,null,"65e74063",null);t["a"]=s.exports},"281c":function(e,t,l){"use strict";l("be73")},"42ef":function(e,t,l){"use strict";l("95ae")},"4ab5":function(e,t,l){"use strict";l.d(t,"d",(function(){return n})),l.d(t,"b",(function(){return o})),l.d(t,"h",(function(){return r})),l.d(t,"a",(function(){return i})),l.d(t,"f",(function(){return s})),l.d(t,"c",(function(){return c})),l.d(t,"e",(function(){return u})),l.d(t,"g",(function(){return d}));var a=l("1bab");function n(e,t=10){return Object(a["a"])({url:`/role/search/${e}/${t}`})}function o(e){return Object(a["a"])({url:"/role/"+e,method:"delete"})}function r(e){return Object(a["a"])({url:"/role",method:"put",data:e})}function i(e){return Object(a["a"])({url:"/role",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/role/"+e})}function c(){return Object(a["a"])({url:"/role"})}function u(e){return Object(a["a"])({url:"/authority/getRoleAuthority?roleId="+e})}function d(e){let{rightIds:t,roleId:l}=e;return Object(a["a"])({url:`/authority/giveRight2Role?rightIds=${t}&roleId=${l}`,method:"post"})}},"4d59":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[l("el-row",[l("el-col",{staticClass:"headCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[e._t("module")],2)]),l("el-col",{staticClass:"myCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[e._t("table")],2)])],1)],1)},n=[],o=l("25b1"),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"审批人"}},[l("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)},i=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,u=l("2877"),d=Object(u["a"])(c,r,i,!1,null,"4c4c51b0",null),m=d.exports,h={components:{Table:o["a"],InputGroup:m}},p=h,f=(l("42ef"),Object(u["a"])(p,a,n,!1,null,"ee9fc8a4",null));t["a"]=f.exports},"8d85":function(e,t,l){"use strict";l.d(t,"e",(function(){return n})),l.d(t,"d",(function(){return o})),l.d(t,"c",(function(){return r})),l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return s})),l.d(t,"f",(function(){return c}));var a=l("1bab");function n(e,t=10){return Object(a["a"])({url:`/user/all/${e}/${t}`})}function o(){return Object(a["a"])({url:"/user/contacts",method:"post"})}function r(e){return Object(a["a"])({url:"/user/"+e,method:"delete"})}function i(e){let{userId:t,roleIds:l}=e;return Object(a["a"])({url:`authority/giveRole2User?userId=${t}&roleIds=${l}`,method:"post"})}function s(e){return Object(a["a"])({url:"/user",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/user/"+e})}},9419:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"user"},[l("Management",[l("div",{attrs:{slot:"module"},slot:"module"},[l("InputGroup",{on:{append:e.append,search:e.search,showAll:e.showAll}})],1),l("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[l("Table",{attrs:{tableData:e.tableData,title:e.title,total:e.totalElements,page:e.page,editTxt:"设置角色",toolWidth:220},on:{edit:e.handleEdit,delete:e.handleDelete,current:e.currentPath}})],1)]),l("UserDialog",{attrs:{isShow:e.isShow,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}}),l("SetRoleDialog",{attrs:{isShow:e.isShowSet,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}})],1)},n=[],o=l("4d59"),r=l("25b1"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"id"}},[l("el-input",{attrs:{placeholder:"id"},model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id","string"===typeof t?t.trim():t)},expression:"formInline.id"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("查询")])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v("添加")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(e){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")}}},u=c,d=l("2877"),m=Object(d["a"])(u,i,s,!1,null,"58bf54a0",null),h=m.exports,p=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel}},[l("div",{attrs:{slot:"form"},slot:"form"},[l("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.row}},[l("el-form-item",{attrs:{label:"昵称"}},[l("el-input",{model:{value:e.row.nickname,callback:function(t){e.$set(e.row,"nickname",t)},expression:"row.nickname"}})],1),l("el-form-item",{attrs:{label:"名字"}},[l("el-input",{model:{value:e.row.username,callback:function(t){e.$set(e.row,"username",t)},expression:"row.username"}})],1),l("el-form-item",{attrs:{label:"类型"}},[l("el-input",{model:{value:e.row.type,callback:function(t){e.$set(e.row,"type",t)},expression:"row.type"}})],1),l("el-form-item",{attrs:{label:"手机号"}},[l("el-input",{model:{value:e.row.phone,callback:function(t){e.$set(e.row,"phone",t)},expression:"row.phone"}})],1),l("el-form-item",{attrs:{label:"密码"}},[l("el-input",{model:{value:e.row.password,callback:function(t){e.$set(e.row,"password",t)},expression:"row.password"}})],1)],1)],1)])},f=[],b=l("8c8a"),w={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},g=w,y=Object(d["a"])(g,p,f,!1,null,null,null),v=y.exports,x=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel}},[l("div",{attrs:{slot:"form"},slot:"form"},[l("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.row}},[l("el-form-item",{attrs:{label:"名字"}},[l("el-input",{model:{value:e.row.username,callback:function(t){e.$set(e.row,"username",t)},expression:"row.username"}})],1),l("el-form-item",{attrs:{label:"权限"}},[l("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},e._l(e.row.role,(function(t,a){return l("el-checkbox",{key:a,attrs:{label:t.id,name:"role"}},[e._v(e._s(t.name))])})),1)],1)],1)],1)])},j=[],k={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{}}}},data(){return{checked:[]}},methods:{confirm(){this.$emit("confirm",{id:this.row.id,role:this.checked,edit:this.row.edit})},cancel(){this.$emit("cancel")},handleCheckAllChange(e){console.log(e)},handleCheckedCitiesChange(e){console.log(e)}}},O=k,$=Object(d["a"])(O,x,j,!1,null,null,null),_=$.exports,S=l("5c96"),D=l("7aa9"),I=l("8d85"),C=l("4ab5"),E={components:{Management:o["a"],Table:r["a"],InputGroup:h,UserDialog:v,SetRoleDialog:_},data(){return{tableData:[],title:[{label:"名字",prop:"username"},{label:"昵称",prop:"nickname"},{label:"手机号",prop:"phone"}],role:[],row:{},isShow:!1,isShowSet:!1,totalElements:0,page:1}},created(){this.allUser(),this.getRole()},methods:{async userByPathAndSize(e,t=10){const l=await Object(I["e"])(e,t);this.totalElements=l.data.totalElements,this.tableData=l.data.content,this.page=e},async getRole(){let e=await Object(C["c"])();this.role=e.data,console.log(this.role)},async allUser(){let e=await Object(I["d"])();console.log(e),this.tableData=e.data.student},handleEdit(e){console.log(e),this.row={username:e.row.username,id:e.row.id,role:this.role,edit:!0},this.isShowSet=!0},handleDelete(e){S["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async t=>{let l=await Object(I["c"])(e.row.id);console.log(l,e.row.id),l.flag?(Object(D["a"])("删除","success"),this.allUser(1)):Object(D["a"])("删除","error")}).catch(e=>{})},async confirm(e){if(this.closeDialog(),e.edit){let t=await Object(I["a"])({userId:e.id,roleIds:e.role});t.flag?(Object(D["a"])("角色赋予","success"),this.allUser(1)):Object(D["a"])("角色赋予","error")}else{let t=await Object(I["b"])({name:e.name,description:e.description});t.flag?(Object(D["a"])("添加","success"),this.allUser(1)):Object(D["a"])("添加","error")}},async search(e){let t=await Object(I["f"])(e.id);console.log(t),t.flag?(this.tableData=[t.data],this.totalElements=this.tableData.length,Object(D["a"])("查询")):Object(D["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShowSet=!1,this.isShow=!1},currentPath(e){this.allUser(e)},append(){this.row={},this.isShow=!0},showAll(){this.userByPathAndSize(1)}},computed:{}},T=E,B=(l("281c"),Object(d["a"])(T,a,n,!1,null,null,null));t["default"]=B.exports},"95ae":function(e,t,l){},"9e1d":function(e,t,l){"use strict";l("1451")},be73:function(e,t,l){}}]);
//# sourceMappingURL=chunk-f8ad8136.93013141.js.map