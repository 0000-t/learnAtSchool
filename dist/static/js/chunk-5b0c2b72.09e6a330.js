(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b0c2b72"],{"0ef6":function(t,a,e){},"84e3":function(t,a,e){"use strict";e("0ef6")},8566:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"teacher"},[e("table",{staticClass:"tao_table",attrs:{width:"100%",cellpadding:"8"}},[t._m(0),t._l(Object.keys(t.tableData),(function(a){return e("tbody",{key:a},t._l(t.tableData[a],(function(n,s){return e("tr",{key:s},[0==s?e("td",{attrs:{rowspan:t.tableData[a].length}},[t._v("\n          "+t._s(a)+"\n        ")]):t._e(),e("td",[t._v(t._s(n.title))]),e("td",[t._v(t._s(n.duration))])])})),0)}))],2)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",[t._v("老师")]),e("th",[t._v("课程")]),e("th",[t._v("学习时长")])])}],r=e("1bab");function c(){return Object(r["a"])({url:"/analysis/getTeacherCourseAnalysis"})}var i={data(){return{tableData:{}}},created(){this.init()},methods:{async init(){const t=await c();console.log(t),t.flag&&(this.tableData=t.data)}}},l=i,u=(e("84e3"),e("2877")),o=Object(u["a"])(l,n,s,!1,null,"191e8a96",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-5b0c2b72.09e6a330.js.map