(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4465d9f1"],{1451:function(e,t,l){},"25b1":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tao-table"},[l("el-table",{staticClass:"myTable",attrs:{data:e.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[e.expand?l("el-table-column",{attrs:{type:"expand"}},[[l("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e._t("expand",[l("el-form-item",{attrs:{label:"商品名称"}},[l("div",[e._v("sdnvbgksdfbnsb")])])])],2)]],2):e._e(),e._l(e.title,(function(e,t){return l("el-table-column",{key:t,attrs:{align:"center",label:e.label,prop:e.prop,sortable:!!e.sort}})})),e.showTool?l("el-table-column",{attrs:{align:"center",label:"操作",width:e.toolWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showEdit?l("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("\n          "+e._s(e.editTxt)+"\n        ")]):e._e(),e.showDelete?l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2199528418)}):e._e()],2),l("el-row",{staticClass:"path"},[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"grid-content table-page"},[e._t("page",[l("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"prev-click":e.lastPath,"next-click":e.nextPath,"current-change":e.currentPath}})])],2)])],1)],1)},n=[],o={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(e,t){this.$emit("edit",{index:e,row:t})},handleDelete(e,t){this.$emit("delete",{index:e,row:t})},lastPath(e){this.$emit("last",e)},nextPath(e){this.$emit("next",e)},currentPath(e){this.$emit("current",e)}},computed:{}},i=o,r=(l("9e1d"),l("2877")),s=Object(r["a"])(i,a,n,!1,null,"65e74063",null);t["a"]=s.exports},"42ef":function(e,t,l){"use strict";l("95ae")},"4d59":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[l("el-row",[l("el-col",{staticClass:"headCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[e._t("module")],2)]),l("el-col",{staticClass:"myCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[e._t("table")],2)])],1)],1)},n=[],o=l("25b1"),i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"审批人"}},[l("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)},r=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,d=l("2877"),u=Object(d["a"])(c,i,r,!1,null,"4c4c51b0",null),p=u.exports,m={components:{Table:o["a"],InputGroup:p}},h=m,f=(l("42ef"),Object(d["a"])(h,a,n,!1,null,"ee9fc8a4",null));t["a"]=f.exports},"507e":function(e,t,l){"use strict";l("656e")},"656e":function(e,t,l){},"95ae":function(e,t,l){},"9e1d":function(e,t,l){"use strict";l("1451")},fbce:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"role"},[l("Management",[l("div",{attrs:{slot:"module"},slot:"module"},[l("InputGroup",{on:{append:e.append,search:e.search,showAll:e.showAll}})],1),l("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[l("Table",{attrs:{tableData:e.tableData,title:e.title,total:e.totalElements,page:e.page},on:{edit:e.handleEdit,delete:e.handleDelete,current:e.currentPath}})],1)]),l("RoleDialog",{attrs:{isShow:e.isShow,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}})],1)},n=[],o=l("4d59"),i=l("25b1"),r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"id"}},[l("el-input",{attrs:{placeholder:"id"},model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id","string"===typeof t?t.trim():t)},expression:"formInline.id"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("查询")])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v("添加")])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.showAll}},[e._v("显示全部")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(e){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")},showAll(){this.formInline.id="",this.$emit("showAll")}}},d=c,u=l("2877"),p=Object(u["a"])(d,r,s,!1,null,"34b138ad",null),m=p.exports,h=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel}},[l("div",{attrs:{slot:"form"},slot:"form"},[l("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.row}},[l("el-form-item",{attrs:{label:"id"}},[l("el-input",{attrs:{disabled:""},model:{value:e.row.id,callback:function(t){e.$set(e.row,"id",t)},expression:"row.id"}})],1),l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:e.row.name,callback:function(t){e.$set(e.row,"name",t)},expression:"row.name"}})],1),l("el-form-item",{attrs:{label:"描述"}},[l("el-input",{model:{value:e.row.description,callback:function(t){e.$set(e.row,"description",t)},expression:"row.description"}})],1)],1)],1)])},f=[],b=l("8c8a"),g={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},w=g,y=Object(u["a"])(w,h,f,!1,null,null,null),v=y.exports,x=l("5c96"),_=l("7aa9"),$=l("1bab");function D(e,t=10){return Object($["a"])({url:`/role/search/${e}/${t}`})}function E(e){return Object($["a"])({url:"/role/"+e,method:"delete"})}function S(e){return Object($["a"])({url:"/role/"+e.id,method:"put",data:e})}function j(e){return Object($["a"])({url:"/role",method:"post",data:e})}function k(e){return Object($["a"])({url:"/role/"+e})}var O={components:{Management:o["a"],Table:i["a"],InputGroup:m,RoleDialog:v},data(){return{tableData:[],title:[{label:"ID",prop:"id"},{label:"名称",prop:"name"},{label:"描述",prop:"description"}],row:{},isShow:!1,totalElements:0,page:1}},created(){this.roleByPageAndSize(1)},methods:{async roleByPageAndSize(e,t=10){const l=await D(e,t);console.log(l),this.totalElements=l.data.total,this.tableData=l.data.rows,this.page=e},handleEdit(e){this.row={...e.row,edit:!0},this.isShow=!0},handleDelete(e){x["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async t=>{let l=await E(e.row.id);console.log(l,e.row.id),l.flag?(Object(_["a"])("删除","success"),this.roleByPageAndSize(1)):Object(_["a"])("删除","error")}).catch(e=>{})},async confirm(e){if(this.closeDialog(),e.edit){let t=await S({id:e.id,name:e.name,description:e.description});console.log(t),t.flag?(Object(_["a"])("修改","success"),this.roleByPageAndSize(1)):Object(_["a"])("修改","error")}else{console.log(e);let t=await j({name:e.name,description:e.description});console.log(t),t.flag?(Object(_["a"])("添加","success"),this.roleByPageAndSize(1)):Object(_["a"])("添加","error")}},async search(e){let t=await k(e.id);console.log(t),t.flag?(this.tableData=[t.data],this.totalElements=this.tableData.length,Object(_["a"])("查询")):Object(_["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShow=!1},currentPath(e){this.roleByPageAndSize(e)},append(){this.row={},this.isShow=!0},showAll(){this.roleByPageAndSize(1)}}},I=O,C=(l("507e"),Object(u["a"])(I,a,n,!1,null,null,null));t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-4465d9f1.8e6c3fa1.js.map