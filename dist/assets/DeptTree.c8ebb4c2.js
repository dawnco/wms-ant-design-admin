var l=(a,n,e)=>new Promise((r,o)=>{var s=t=>{try{i(e.next(t))}catch(p){o(p)}},c=t=>{try{i(e.throw(t))}catch(p){o(p)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(s,c);i((e=e.apply(a,n)).next())});import{_ as m}from"./index.b2c8ec8b.js";import{a as d}from"./system.ef4b0265.js";import{a as f,v as u,N as _,av as h,ax as v,o as D,h as T,n as B}from"./index.d00d010f.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useContextMenu.638f00c5.js";import"./index.420ad400.js";import"./get.b6ec3b5b.js";const $=f({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(a,{emit:n}){const e=u([]);function r(){return l(this,null,function*(){e.value=yield d()})}function o(s){n("select",s[0])}return _(()=>{r()}),{treeData:e,handleSelect:o}}}),k={class:"m-4 mr-0 overflow-hidden bg-white"};function w(a,n,e,r,o,s){const c=v("BasicTree");return D(),T("div",k,[B(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var M=h($,[["render",w]]);export{M as default};