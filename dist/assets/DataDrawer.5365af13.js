var D=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var d=(t,o,e)=>o in t?D(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))C.call(o,e)&&d(t,e,o[e]);if(m)for(var e of m(o))I.call(o,e)&&d(t,e,o[e]);return t};var c=(t,o,e)=>new Promise((l,u)=>{var p=a=>{try{r(e.next(a))}catch(s){u(s)}},i=a=>{try{r(e.throw(a))}catch(s){u(s)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(p,i);r((e=e.apply(t,o)).next())});import{B as v}from"./BasicForm.2d60aca0.js";import{u as y}from"./useForm.0698201c.js";import{bR as P,av as A,a as E,v as _,k as b,f as S,ax as F,o as x,j as M,z as R,n as T,ay as k}from"./index.a5ffc99c.js";import{T as $}from"./index.87536a70.js";import{u as q}from"./upload.aaed90b0.js";import{g as L,a as N,u as O,b as j}from"./cms.61b351ed.js";import{B as z,a as U}from"./index.b7f94c9b.js";const ae=[{title:"\u540D\u79F0",dataIndex:"name",width:200,align:"left"},{title:"\u6392\u5E8F",dataIndex:"sort",width:50},{title:"\u6A21\u578B",dataIndex:"module",width:50},{title:"\u663E\u793A",dataIndex:"show",width:80,customRender:({record:t})=>{const e=~~t.show===1,l=e?"green":"red",u=e?"\u663E\u793A":"\u9690\u85CF";return P($,{color:l},()=>u)}}],V=t=>t==="2",ne=[{field:"name",label:"\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"show",label:"\u663E\u793A",component:"Select",componentProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]},colProps:{span:8}}],G=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0},{field:"parentId",label:"\u4E0A\u7EA7",component:"TreeSelect",componentProps:{fieldNames:{label:"name",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"module",label:"\u6A21\u578B",component:"ApiSelect",required:!0,componentProps:{api:L,resultField:"data",labelField:"name",valueField:"identity",getPopupContainer:()=>document.body}},{field:"summary",label:"\u7B80\u4ECB",component:"InputTextArea",required:!1},{field:"image",label:"\u56FE\u7247",component:"Upload",componentProps:{api:q,maxNumber:1,showPreviewNumber:!0,multiple:!1}},{field:"sort",label:"\u6392\u5E8F",component:"InputNumber",required:!0,helpMessage:"\u5347\u5E8F"},{field:"templateList",label:"\u5217\u8868\u6A21\u677F",component:"Input",helpMessage:"\u4F8B\u5982 /list.html"},{field:"templateContent",label:"\u8BE6\u60C5\u6A21\u677F",component:"Input",helpMessage:"\u4F8B\u5982 /content.html"},{field:"contentListSize",label:"\u5217\u8868\u6570\u91CF",component:"Input",helpMessage:"\u5217\u8868\u6BCF\u9875\u6570\u91CF 20"},{field:"redirect",label:"\u8DF3\u8F6C\u5730\u5740",component:"Input"},{field:"show",label:"\u662F\u5426\u663E\u793A",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]},ifShow:({values:t})=>!V(t.type)}],W=E({name:"MenuDrawer",components:{BasicDrawer:z,BasicForm:v},emits:["success","register"],setup(t,{emit:o}){const e=_(!0),[l,{resetFields:u,setFieldsValue:p,updateSchema:i,validate:r}]=y({labelWidth:100,schemas:G,showActionButtonGroup:!1,baseColProps:{span:24}}),[a,{setDrawerProps:s,closeDrawer:g}]=U(n=>c(this,null,function*(){u(),s({confirmLoading:!1}),e.value=!!(n!=null&&n.isUpdate),b(e)&&p(f({},n.record));const B=yield N({});i({field:"parentId",componentProps:{treeData:B}})})),h=S(()=>b(e)?"\u7F16\u8F91\u5206\u7C7B":"\u65B0\u589E\u5206\u7C7B");function w(){return c(this,null,function*(){try{const n=yield r();s({confirmLoading:!0}),n.id?yield O(n):yield j(n),g(),o("success")}finally{s({confirmLoading:!1})}})}return{registerDrawer:a,registerForm:l,getTitle:h,handleSubmit:w}}});function H(t,o,e,l,u,p){const i=F("BasicForm"),r=F("BasicDrawer");return x(),M(r,k(t.$attrs,{onRegister:t.registerDrawer,showFooter:"",title:t.getTitle,width:"50%",onOk:t.handleSubmit}),{default:R(()=>[T(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var J=A(W,[["render",H]]),ue=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{J as D,ue as a,ae as c,ne as s};
