(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edab5a10"],{"12cc":function(t,a,e){"use strict";e("4c3e")},"4c3e":function(t,a,e){},"772c":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"teacher"},[e("table",{staticClass:"tao_table",attrs:{width:"100%",cellpadding:"8"}},[t._m(0),t._l(Object.keys(t.tableData),(function(a){return e("tbody",{key:a},t._l(t.tableData[a],(function(n,s){return e("tr",{key:s},[0==s?e("td",{attrs:{rowspan:t.tableData[a].length}},[t._v("\n          "+t._s(a)+"\n        ")]):t._e(),e("td",[t._v(t._s(n.title))]),e("td",[t._v(t._s(n.teacherScope))]),e("td",[t._v(t._s(n.duration))]),0==s?e("td",{attrs:{rowspan:t.tableData[a].length}},[t._v("\n          "+t._s(t.sum(t.tableData[a]))+"\n        ")]):t._e()])})),0)}))],2)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",[t._v("老师")]),e("th",[t._v("课程")]),e("th",[t._v("分数")]),e("th",[t._v("学习时长")]),e("th",[t._v("学分")])])}],c=e("1bab");function r(){return Object(c["a"])({url:"/analysis/getStudentStudyAnalysis"})}var l={data(){return{tableData:{}}},created(){this.init()},methods:{async init(){const t=await r();console.log(t),t.flag&&(this.tableData=t.data)}},computed:{sum(){return t=>t.map(t=>t.scope).reduce((t,a)=>Number(t)+Number(a))}}},u=l,i=(e("12cc"),e("2877")),o=Object(i["a"])(u,n,s,!1,null,"6a234e29",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-edab5a10.69d0044c.js.map