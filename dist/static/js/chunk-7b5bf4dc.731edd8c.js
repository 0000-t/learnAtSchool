(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b5bf4dc"],{1451:function(t,e,l){},"25b1":function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"tao-table"},[l("el-table",{staticClass:"myTable",attrs:{data:t.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[t.expand?l("el-table-column",{attrs:{type:"expand"}},[[l("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t._t("expand",[l("el-form-item",{attrs:{label:"商品名称"}},[l("div",[t._v("sdnvbgksdfbnsb")])])])],2)]],2):t._e(),t._l(t.title,(function(t,e){return l("el-table-column",{key:e,attrs:{align:"center",label:t.label,prop:t.prop,sortable:!!t.sort}})})),t.showTool?l("el-table-column",{attrs:{align:"center",label:"操作",width:t.toolWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showEdit?l("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(l){return t.handleEdit(e.$index,e.row)}}},[t._v("\n          "+t._s(t.editTxt)+"\n        ")]):t._e(),t.showDelete?l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")]):t._e()]}}],null,!1,2199528418)}):t._e()],2),l("el-row",{staticClass:"path"},[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"grid-content table-page"},[t._t("page",[l("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":t.page,"page-size":t.pageSize,total:t.total},on:{"prev-click":t.lastPath,"next-click":t.nextPath,"current-change":t.currentPath}})])],2)])],1)],1)},n=[],o={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(t,e){this.$emit("edit",{index:t,row:e})},handleDelete(t,e){this.$emit("delete",{index:t,row:e})},lastPath(t){this.$emit("last",t)},nextPath(t){this.$emit("next",t)},currentPath(t){this.$emit("current",t)}},computed:{}},i=o,r=(l("9e1d"),l("2877")),s=Object(r["a"])(i,a,n,!1,null,"65e74063",null);e["a"]=s.exports},"35c2":function(t,e,l){},"42ef":function(t,e,l){"use strict";l("95ae")},"4d59":function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[l("el-row",[l("el-col",{staticClass:"headCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[t._t("module")],2)]),l("el-col",{staticClass:"myCol",attrs:{span:24}},[l("div",{staticClass:"grid-content"},[t._t("table")],2)])],1)],1)},n=[],o=l("25b1"),i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[l("el-form-item",{attrs:{label:"审批人"}},[l("el-input",{attrs:{placeholder:"审批人"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)},r=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,u=l("2877"),d=Object(u["a"])(c,i,r,!1,null,"4c4c51b0",null),p=d.exports,m={components:{Table:o["a"],InputGroup:p}},b=m,h=(l("42ef"),Object(u["a"])(b,a,n,!1,null,"ee9fc8a4",null));e["a"]=h.exports},8958:function(t,e,l){"use strict";l("35c2")},"95ae":function(t,e,l){},"9e1d":function(t,e,l){"use strict";l("1451")},ea21:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"subject"},[l("Management",[l("div",{attrs:{slot:"module"},slot:"module"},[l("InputGroup",{on:{append:t.append,search:t.search,showAll:t.showAll}})],1),l("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[l("Table",{attrs:{tableData:t.tableData,title:t.title,total:t.totalElements,page:t.page},on:{edit:t.handleEdit,delete:t.handleDelete,current:t.currentPath}})],1)]),l("SubjectDialog",{attrs:{isShow:t.isShow,row:t.row},on:{confirm:t.confirm,cancel:t.cancel}})],1)},n=[],o=l("4d59"),i=l("25b1"),r=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[l("el-form-item",{attrs:{label:"id"}},[l("el-input",{attrs:{placeholder:"id"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id","string"===typeof e?e.trim():e)},expression:"formInline.id"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("查询")])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.append}},[t._v("添加")])],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.showAll}},[t._v("显示全部")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(t){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")},showAll(){this.formInline.id="",this.$emit("showAll")}}},u=c,d=l("2877"),p=Object(d["a"])(u,r,s,!1,null,"1f8ced7b",null),m=p.exports,b=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("Dialog",{attrs:{isShow:t.isShow},on:{confirm:t.confirm,cancel:t.cancel}},[l("div",{attrs:{slot:"form"},slot:"form"},[l("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.row}},[l("el-form-item",{attrs:{label:"标题"}},[l("el-input",{model:{value:t.row.title,callback:function(e){t.$set(t.row,"title",e)},expression:"row.title"}})],1),l("el-form-item",{attrs:{label:"备注"}},[l("el-input",{model:{value:t.row.text,callback:function(e){t.$set(t.row,"text",e)},expression:"row.text"}})],1),l("el-form-item",{attrs:{label:"链接"}},[l("el-input",{model:{value:t.row.url,callback:function(e){t.$set(t.row,"url",e)},expression:"row.url"}})],1)],1)],1)])},h=[],f=l("8c8a"),w={components:{Dialog:f["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{id:"",name:"",description:""}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},g=w,y=Object(d["a"])(g,b,h,!1,null,null,null),x=y.exports,j=l("5c96"),v=l("7aa9"),_=l("1bab");function $(t,e=10){return Object(_["a"])({url:`/subject/findAll/${t}/${e}`,method:"post"})}function S(t){return Object(_["a"])({url:"/subject/"+t,method:"delete"})}function E(t){return Object(_["a"])({url:"/subject",method:"put",data:t})}function k(t){return console.log(t),Object(_["a"])({url:"/subject",method:"post",data:t})}function D(t){return Object(_["a"])({url:"/subject/search",method:"post"})}var O={components:{Management:o["a"],Table:i["a"],InputGroup:m,SubjectDialog:x},data(){return{tableData:[],title:[{label:"标题",prop:"title"},{label:"备注",prop:"text"},{label:"链接",prop:"url"}],row:{},isShow:!1,totalElements:0,page:1}},created(){this.subjectByPageAndSize(1)},methods:{async subjectByPageAndSize(t,e=10){const l=await $(t,e);this.totalElements=l.data.total,this.tableData=l.data.rows,this.page=t},handleEdit(t){this.row={...t.row,edit:!0},this.isShow=!0},handleDelete(t){j["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async e=>{let l=await S(t.row.id);l.flag?(Object(v["a"])("删除","success"),this.subjectByPageAndSize(1)):Object(v["a"])("删除","error")}).catch(t=>{})},async confirm(t){if(this.closeDialog(),t.edit){let e=await E({id:t.id,text:t.text,title:t.title,url:t.url});e.flag?(Object(v["a"])("修改","success"),this.subjectByPageAndSize(1)):Object(v["a"])("修改","error")}else{let e=await k({text:t.text,title:t.title,url:t.url});e.flag?(Object(v["a"])("添加","success"),this.subjectByPageAndSize(1)):Object(v["a"])("添加","error")}},async search(t){let e=await D(t.id);e.flag?(this.tableData=[e.data],this.totalElements=this.tableData.length,Object(v["a"])("查询")):Object(v["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShow=!1},currentPath(t){this.subjectByPageAndSize(t)},append(){this.row={},this.isShow=!0},showAll(){this.subjectByPageAndSize(1)}}},A=O,C=(l("8958"),Object(d["a"])(A,a,n,!1,null,null,null));e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7b5bf4dc.731edd8c.js.map