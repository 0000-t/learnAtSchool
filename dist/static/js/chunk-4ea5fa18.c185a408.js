(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea5fa18"],{1451:function(e,t,a){},"1d92":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"study"},[a("Management",[a("div",{attrs:{slot:"module"},slot:"module"},[a("InputGroup",{on:{append:e.append,search:e.search,showAll:e.showAll}})],1),a("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[a("Table",{attrs:{tableData:e.tableData,title:e.title,total:e.totalElements,page:e.page},on:{edit:e.handleEdit,delete:e.handleDelete,current:e.currentPath}})],1)]),a("StudyDialog",{attrs:{isShow:e.isShow,row:e.row},on:{confirm:e.confirm,cancel:e.cancel}})],1)},o=[],n=a("4d59"),r=a("25b1"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{attrs:{placeholder:"id"},model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id","string"===typeof t?t.trim():t)},expression:"formInline.id"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v("添加")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.showAll}},[e._v("显示全部")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(e){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.formInline.id="",this.$emit("append")},showAll(){this.formInline.id="",this.$emit("showAll")}}},d=c,u=a("2877"),p=Object(u["a"])(d,i,s,!1,null,"023f9cc4",null),m=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{attrs:{isShow:e.isShow},on:{confirm:e.confirm,cancel:e.cancel,close:e.closeDialog}},[a("div",{attrs:{slot:"form"},slot:"form"},[a("el-form",{ref:"cate",attrs:{model:e.row,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"课程id",prop:"courseId"}},[a("el-input",{model:{value:e.row.courseId,callback:function(t){e.$set(e.row,"courseId",t)},expression:"row.courseId"}})],1),a("el-form-item",{attrs:{label:"学生id",prop:"studentId"}},[a("el-input",{model:{value:e.row.studentId,callback:function(t){e.$set(e.row,"studentId",t)},expression:"row.studentId"}})],1),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"选择日期"},model:{value:e.row.createTime,callback:function(t){e.$set(e.row,"createTime",t)},expression:"row.createTime"}}),a("el-time-select",{attrs:{"picker-options":{start:"08:30",step:"00:15",end:"18:30"},placeholder:"选择时间"},model:{value:e.row.createTime,callback:function(t){e.$set(e.row,"createTime",t)},expression:"row.createTime"}})],1),a("el-form-item",{attrs:{label:"持续时间",prop:"duration"}},[a("el-input",{model:{value:e.row.durationn,callback:function(t){e.$set(e.row,"durationn",t)},expression:"row.durationn"}})],1),a("el-form-item",{attrs:{label:"学分",prop:"scope"}},[a("el-input",{model:{value:e.row.scope,callback:function(t){e.$set(e.row,"scope",t)},expression:"row.scope"}})],1)],1)],1)])},f=[],b=a("8c8a"),w={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(e){return console.log(e),{}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")},closeDialog(){this.$refs["cate"].resetFields()}}},g=w,y=Object(u["a"])(g,h,f,!1,null,"36a138b6",null),v=y.exports,x=a("5c96"),_=a("7aa9"),$=a("1bab");function I(e,t=10){return Object($["a"])({url:`/learnrecord/search/${e}/${t}`,method:"post",data:{searchMap:{}}})}function k(e){return Object($["a"])({url:"/study/"+e,method:"delete"})}function S(e){return Object($["a"])({url:"/study/"+e.id,method:"put",data:e})}function D(e){return Object($["a"])({url:"/study",method:"post",data:e})}function E(e){return Object($["a"])({url:"/study/"+e})}var j={components:{Management:n["a"],Table:r["a"],InputGroup:m,StudyDialog:v},data(){return{tableData:[],title:[{label:"课程id",prop:"courseId"},{label:"学生id",prop:"studentId"},{label:"创建时间",prop:"crateTime"},{label:"持续时间",prop:"duration"}],row:{},isShow:!1,totalElements:0,page:1}},created(){this.studyByPageAndSize(1)},methods:{async studyByPageAndSize(e,t=10){const a=await I(e,t);this.totalElements=a.data.total,this.tableData=a.data.rows,this.page=e},handleEdit(e){this.row={...e.row,edit:!0},this.isShow=!0},handleDelete(e){x["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async t=>{let a=await k(e.row.id);a.flag?(Object(_["a"])("删除","success"),this.studyByPageAndSize(1)):Object(_["a"])("删除","error")}).catch(e=>{})},async confirm(e){if(this.closeDialog(),e.edit){let t=await S({id:e.id,name:e.name,description:e.description});t.flag?(Object(_["a"])("修改","success"),this.studyByPageAndSize(1)):Object(_["a"])("修改","error")}else{let t=await D({name:e.name,description:e.description});t.flag?(Object(_["a"])("添加","success"),this.studyByPageAndSize(1)):Object(_["a"])("添加","error")}},async search(e){let t=await E(e.id);t.flag?(this.tableData=[t.data],this.totalElements=this.tableData.length,Object(_["a"])("查询")):Object(_["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShow=!1},currentPath(e){this.studyByPageAndSize(e)},append(){this.row={},this.isShow=!0},showAll(){this.studyByPageAndSize(1)}},computed:{}},O=j,T=(a("9b7e"),Object(u["a"])(O,l,o,!1,null,null,null));t["default"]=T.exports},"25b1":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tao-table"},[a("el-table",{staticClass:"myTable",attrs:{data:e.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[e.expand?a("el-table-column",{attrs:{type:"expand"}},[[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e._t("expand",[a("el-form-item",{attrs:{label:"商品名称"}},[a("div",[e._v("sdnvbgksdfbnsb")])])])],2)]],2):e._e(),e._l(e.title,(function(e,t){return a("el-table-column",{key:t,attrs:{align:"center",label:e.label,prop:e.prop,sortable:!!e.sort}})})),e.showTool?a("el-table-column",{attrs:{align:"center",label:"操作",width:e.toolWidth},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showEdit?a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("\n          "+e._s(e.editTxt)+"\n        ")]):e._e(),e.showDelete?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2199528418)}):e._e()],2),a("el-row",{staticClass:"path"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content table-page"},[e._t("page",[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"prev-click":e.lastPath,"next-click":e.nextPath,"current-change":e.currentPath}})])],2)])],1)],1)},o=[],n={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(e,t){this.$emit("edit",{index:e,row:t})},handleDelete(e,t){this.$emit("delete",{index:e,row:t})},lastPath(e){this.$emit("last",e)},nextPath(e){this.$emit("next",e)},currentPath(e){this.$emit("current",e)}},computed:{}},r=n,i=(a("9e1d"),a("2877")),s=Object(i["a"])(r,l,o,!1,null,"65e74063",null);t["a"]=s.exports},"42ef":function(e,t,a){"use strict";a("95ae")},"434b":function(e,t,a){},"4d59":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("el-row",[a("el-col",{staticClass:"headCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[e._t("module")],2)]),a("el-col",{staticClass:"myCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[e._t("table")],2)])],1)],1)},o=[],n=a("25b1"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)},i=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,d=a("2877"),u=Object(d["a"])(c,r,i,!1,null,"4c4c51b0",null),p=u.exports,m={components:{Table:n["a"],InputGroup:p}},h=m,f=(a("42ef"),Object(d["a"])(h,l,o,!1,null,"ee9fc8a4",null));t["a"]=f.exports},"95ae":function(e,t,a){},"9b7e":function(e,t,a){"use strict";a("434b")},"9e1d":function(e,t,a){"use strict";a("1451")}}]);
//# sourceMappingURL=chunk-4ea5fa18.c185a408.js.map