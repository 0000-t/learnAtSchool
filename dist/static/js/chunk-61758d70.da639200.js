(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61758d70"],{"0783":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"authority"},[a("Management",[a("div",{attrs:{slot:"module"},slot:"module"},[a("InputGroup",{on:{append:t.append,search:t.search,showAll:t.showAll}})],1),a("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[a("Table",{attrs:{tableData:t.tableData,title:t.title,total:t.totalElements,page:t.page},on:{edit:t.handleEdit,delete:t.handleDelete,current:t.currentPath}})],1)]),a("AuthorityDialog",{attrs:{isShow:t.isShow,row:t.row},on:{confirm:t.confirm,cancel:t.cancel}})],1)},l=[],i=a("4d59"),o=a("25b1"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{attrs:{placeholder:"id"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id","string"===typeof e?e.trim():e)},expression:"formInline.id"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("查询")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.append}},[t._v("添加")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.showAll}},[t._v("显示全部")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(t){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")},showAll(){this.formInline.id="",this.$emit("showAll")}}},u=c,d=a("2877"),p=Object(d["a"])(u,r,s,!1,null,"21393d78",null),h=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dialog",{attrs:{isShow:t.isShow},on:{confirm:t.confirm,cancel:t.cancel}},[a("div",{attrs:{slot:"form"},slot:"form"},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.row}},[a("el-form-item",{attrs:{label:"权限id"}},[a("el-input",{model:{value:t.row.id,callback:function(e){t.$set(t.row,"id",e)},expression:"row.id"}})],1),a("el-form-item",{attrs:{label:"权限名称"}},[a("el-input",{model:{value:t.row.name,callback:function(e){t.$set(t.row,"name",e)},expression:"row.name"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:t.row.description,callback:function(e){t.$set(t.row,"description",e)},expression:"row.description"}})],1)],1)],1)])},f=[],b=a("8c8a"),y={components:{Dialog:b["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{id:"",name:"",description:""}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},w=y,g=Object(d["a"])(w,m,f,!1,null,null,null),v=g.exports,x=a("5c96"),_=a("7aa9"),j=a("47ed"),O={components:{Management:i["a"],Table:o["a"],InputGroup:h,AuthorityDialog:v},data(){return{tableData:[],title:[{label:"权限id",prop:"id"},{label:"权限名称",prop:"name"},{label:"描述",prop:"description"}],row:{},isShow:!1,totalElements:0,page:1}},created(){this.authorityByPathAndSize(1)},methods:{async authorityByPathAndSize(t,e=10){const a=await Object(j["d"])(t,e);this.totalElements=a.data.total,this.tableData=a.data.rows,this.page=t},handleEdit(t){this.row={...t.row,edit:!0},this.isShow=!0},handleDelete(t){x["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async e=>{let a=await Object(j["b"])(t.row.id);a.flag?(Object(_["a"])("删除","success"),this.authorityByPathAndSize(1)):Object(_["a"])("删除","error")}).catch(t=>{})},async confirm(t){if(this.closeDialog(),t.edit){let e=await Object(j["f"])({id:t.id,name:t.name,description:t.description});e.flag?(Object(_["a"])("修改","success"),this.authorityByPathAndSize(1)):Object(_["a"])("修改","error")}else{let e=await Object(j["a"])({id:"",name:t.name,description:t.description});e.flag?(Object(_["a"])("添加","success"),this.authorityByPathAndSize(1)):Object(_["a"])("添加","error")}},async search(t){let e=await Object(j["e"])(t.id);e.flag?(this.tableData=[e.data],this.totalElements=this.tableData.length,Object(_["a"])("查询")):Object(_["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShow=!1},currentPath(t){this.authorityByPathAndSize(t)},append(){this.row={},this.isShow=!0},showAll(){this.authorityByPathAndSize(1)}},computed:{}},$=O,E=(a("c096"),Object(d["a"])($,n,l,!1,null,null,null));e["default"]=E.exports},1451:function(t,e,a){},"1b17":function(t,e,a){},"25b1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tao-table"},[a("el-table",{staticClass:"myTable",attrs:{data:t.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[t.expand?a("el-table-column",{attrs:{type:"expand"}},[[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t._t("expand",[a("el-form-item",{attrs:{label:"商品名称"}},[a("div",[t._v("sdnvbgksdfbnsb")])])])],2)]],2):t._e(),t._l(t.title,(function(t,e){return a("el-table-column",{key:e,attrs:{align:"center",label:t.label,prop:t.prop,sortable:!!t.sort}})})),t.showTool?a("el-table-column",{attrs:{align:"center",label:"操作",width:t.toolWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showEdit?a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("\n          "+t._s(t.editTxt)+"\n        ")]):t._e(),t.showDelete?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")]):t._e()]}}],null,!1,2199528418)}):t._e()],2),a("el-row",{staticClass:"path"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content table-page"},[t._t("page",[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":t.page,"page-size":t.pageSize,total:t.total},on:{"prev-click":t.lastPath,"next-click":t.nextPath,"current-change":t.currentPath}})])],2)])],1)],1)},l=[],i={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(t,e){this.$emit("edit",{index:t,row:e})},handleDelete(t,e){this.$emit("delete",{index:t,row:e})},lastPath(t){this.$emit("last",t)},nextPath(t){this.$emit("next",t)},currentPath(t){this.$emit("current",t)}},computed:{}},o=i,r=(a("9e1d"),a("2877")),s=Object(r["a"])(o,n,l,!1,null,"65e74063",null);e["a"]=s.exports},"42ef":function(t,e,a){"use strict";a("95ae")},"47ed":function(t,e,a){"use strict";a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return c}));var n=a("1bab");function l(t,e=10){return Object(n["a"])({url:`/authority/search/${t}/${e}`})}function i(t){return Object(n["a"])({url:"/authority/"+t,method:"delete"})}function o(t){return Object(n["a"])({url:"/authority",method:"put",data:t})}function r(t){return console.log(t),Object(n["a"])({url:"/authority",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/authority/"+t})}function c(){return Object(n["a"])({url:"/authority"})}},"4d59":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-row",[a("el-col",{staticClass:"headCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[t._t("module")],2)]),a("el-col",{staticClass:"myCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[t._t("table")],2)])],1)],1)},l=[],i=a("25b1"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)},r=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,u=a("2877"),d=Object(u["a"])(c,o,r,!1,null,"4c4c51b0",null),p=d.exports,h={components:{Table:i["a"],InputGroup:p}},m=h,f=(a("42ef"),Object(u["a"])(m,n,l,!1,null,"ee9fc8a4",null));e["a"]=f.exports},"95ae":function(t,e,a){},"9e1d":function(t,e,a){"use strict";a("1451")},c096:function(t,e,a){"use strict";a("1b17")}}]);
//# sourceMappingURL=chunk-61758d70.da639200.js.map