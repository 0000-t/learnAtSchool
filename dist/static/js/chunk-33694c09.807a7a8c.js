(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33694c09"],{"0cc4":function(t,e,a){"use strict";a("b374")},"117f":function(t,e,a){"use strict";a("2c24")},"25b1":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tao-table"},[a("el-table",{staticClass:"myTable",attrs:{data:t.tableData,"cell-style":{padding:"6px",border:"0.3px solid #E6E6E6"},"header-cell-style":{background:"#F2F2F2",border:"0.3px solid #E6E6E6",color:"#737573"},border:"","highlight-current-row":""}},[t.expand?a("el-table-column",{attrs:{type:"expand"}},[[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t._t("expand",[a("el-form-item",{attrs:{label:"商品名称"}},[a("div",[t._v("sdnvbgksdfbnsb")])])])],2)]],2):t._e(),t._l(t.title,(function(t,e){return a("el-table-column",{key:e,attrs:{align:"center",label:t.label,prop:t.prop,sortable:!!t.sort}})})),t.showTool?a("el-table-column",{attrs:{align:"center",label:"操作",width:t.toolWidth},scopedSlots:t._u([{key:"default",fn:function(e){return[t.showEdit?a("el-button",{staticClass:"t-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("\n          "+t._s(t.editTxt)+"\n        ")]):t._e(),t.showOther?a("el-button",{staticClass:"t-btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return t.handleOther(e.$index,e.row)}}},[t._v("\n          "+t._s(t.otherTxt)+"\n        ")]):t._e(),t.showDelete?a("el-button",{staticClass:"t-btn",attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")]):t._e()]}}],null,!1,2313940382)}):t._e()],2),a("el-row",{staticClass:"path"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content table-page"},[t._t("page",[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":"","current-page":t.page,"page-size":t.pageSize,total:t.total},on:{"prev-click":t.lastPath,"next-click":t.nextPath,"current-change":t.currentPath}})])],2)])],1)],1)},n=[],o={props:{title:{type:Array},tableData:{type:Array},total:{type:Number,default:0},page:{type:Number,default:1},expand:{type:Boolean,default:!1},toolWidth:{type:Number,default:200},showTool:{type:Boolean,default:!0},showEdit:{type:Boolean,default:!0},showOther:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0},editTxt:{type:String,default:"编辑"},otherTxt:{type:String,default:"其它"},pageSize:{type:Number,default:10}},data(){return{tao:{name:"我的"}}},methods:{handleEdit(t,e){this.$emit("edit",{index:t,row:e})},handleOther(t,e){this.$emit("other",{index:t,row:e})},handleDelete(t,e){this.$emit("delete",{index:t,row:e})},lastPath(t){this.$emit("last",t)},nextPath(t){this.$emit("next",t)},currentPath(t){this.$emit("current",t)}},computed:{}},r=o,i=(a("0cc4"),a("2877")),s=Object(i["a"])(r,l,n,!1,null,"35ebeacc",null);e["a"]=s.exports},"2c24":function(t,e,a){},"4d59":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-row",[a("el-col",{staticClass:"headCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[t._t("module")],2)]),a("el-col",{staticClass:"myCol",attrs:{span:24}},[a("div",{staticClass:"grid-content"},[t._t("table")],2)])],1)],1)},n=[],o=a("25b1"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"审批人"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)},i=[],s={data(){return{formInline:{user:"",region:""}}},methods:{onSubmit(){console.log("submit!")}}},c=s,u=a("2877"),d=Object(u["a"])(c,r,i,!1,null,"4c4c51b0",null),p=d.exports,h={components:{Table:o["a"],InputGroup:p}},m=h,b=(a("117f"),Object(u["a"])(m,l,n,!1,null,"1ffb9b9c",null));e["a"]=b.exports},6686:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price"},[a("Management",[a("div",{attrs:{slot:"module"},slot:"module"},[a("InputGroup",{on:{append:t.append,search:t.search,showAll:t.showAll}})],1),a("div",{staticClass:"slotTable",attrs:{slot:"table"},slot:"table"},[a("Table",{attrs:{tableData:t.tableData,title:t.title,total:t.totalElements,page:t.page,showTool:!1,toolWidth:150},on:{edit:t.handleEdit,delete:t.handleDelete,current:t.currentPath}})],1)]),a("PriceDialog",{attrs:{isShow:t.isShow,row:t.row},on:{confirm:t.confirm,cancel:t.cancel}})],1)},n=[],o=a("4d59"),r=a("25b1"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.append}},[t._v("添加")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.showAll}},[t._v("显示全部")])],1)],1)},s=[],c={data(){return{formInline:{id:""}}},methods:{submit(t){this.formInline.id&&this.$emit("search",this.formInline)},append(){this.$emit("append")},showAll(){this.formInline.id="",this.$emit("showAll")}}},u=c,d=a("2877"),p=Object(d["a"])(u,i,s,!1,null,"330f4e8c",null),h=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dialog",{attrs:{isShow:t.isShow},on:{confirm:t.confirm,cancel:t.cancel}},[a("div",{attrs:{slot:"form"},slot:"form"},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.row}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.row.title,callback:function(e){t.$set(t.row,"title",e)},expression:"row.title"}})],1),a("el-form-item",{attrs:{label:"兑换积分"}},[a("el-input",{model:{value:t.row.cost,callback:function(e){t.$set(t.row,"cost",e)},expression:"row.cost"}})],1),a("el-form-item",{attrs:{label:"链接"}},[a("el-input",{model:{value:t.row.url,callback:function(e){t.$set(t.row,"url",e)},expression:"row.url"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.row.text,callback:function(e){t.$set(t.row,"text",e)},expression:"row.text"}})],1)],1)],1)])},b=[],f=a("8c8a"),w={components:{Dialog:f["a"]},props:{isShow:{type:Boolean,default:!1},row:{type:Object,default(){return{id:"",name:"",description:""}}}},data(){return{}},methods:{confirm(){this.$emit("confirm",this.row)},cancel(){this.$emit("cancel")}}},g=w,y=Object(d["a"])(g,m,b,!1,null,null,null),x=y.exports,v=a("5c96"),_=a("7aa9"),$=a("1bab");function O(t,e=10){return Object($["a"])({url:`/price/findAll/${t}/${e}`,method:"post"})}function S(t){return Object($["a"])({url:"/price/"+t,method:"delete"})}function E(t){return Object($["a"])({url:"/price",method:"put",data:t})}function j(t){return console.log(t),Object($["a"])({url:"/price",method:"post",data:t})}function k(t){return Object($["a"])({url:"/price/"+t})}var D={components:{Management:o["a"],Table:r["a"],InputGroup:h,PriceDialog:x},data(){return{tableData:[],title:[{label:"id",prop:"id"},{label:"名称",prop:"title"},{label:"兑换积分",prop:"cost"},{label:"链接",prop:"url"},{label:"备注",prop:"text"}],row:{},isShow:!1,totalElements:0,page:1}},created(){this.priceByPathAndSize(1)},methods:{async priceByPathAndSize(t,e=10){const a=await O(t,e);this.totalElements=a.data.total,this.tableData=a.data.rows,this.page=t},handleEdit(t){this.row={...t.row,edit:!0},this.isShow=!0},handleDelete(t){v["MessageBox"].confirm("您确定删除这一行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(async e=>{let a=await S(t.row.id);a.flag?(Object(_["a"])("删除","success"),this.priceByPathAndSize(1)):Object(_["a"])("删除","error")}).catch(t=>{})},async confirm(t){if(this.closeDialog(),t.edit){let e=await E({...t});e.flag?(Object(_["a"])("修改","success"),this.priceByPathAndSize(1)):Object(_["a"])("修改","error")}else{let e=await j({...t});e.flag?(Object(_["a"])("添加","success"),this.priceByPathAndSize(1)):Object(_["a"])("添加","error")}},async search(t){let e=await k(t.id);e.flag?(this.tableData=[e.data],this.totalElements=this.tableData.length,Object(_["a"])("查询")):Object(_["a"])("查询","error")},cancel(){this.closeDialog()},closeDialog(){this.isShow=!1},currentPath(t){this.priceByPathAndSize(t)},append(){this.row={},this.isShow=!0},showAll(){this.priceByPathAndSize(1)}},computed:{}},C=D,P=(a("c844"),Object(d["a"])(C,l,n,!1,null,null,null));e["default"]=P.exports},b374:function(t,e,a){},c844:function(t,e,a){"use strict";a("e242")},e242:function(t,e,a){}}]);
//# sourceMappingURL=chunk-33694c09.807a7a8c.js.map