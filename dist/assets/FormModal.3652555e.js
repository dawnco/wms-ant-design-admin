var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var F=(o,t,e)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,h=(o,t)=>{for(var e in t||(t={}))b.call(t,e)&&F(o,e,t[e]);if(u)for(var e of u(t))k.call(t,e)&&F(o,e,t[e]);return o};var c=(o,t,e)=>new Promise((a,m)=>{var p=i=>{try{s(e.next(i))}catch(l){m(l)}},n=i=>{try{s(e.throw(i))}catch(l){m(l)}},s=i=>i.done?a(i.value):Promise.resolve(i.value).then(p,n);s((e=e.apply(o,t)).next())});import{B as C,a as S}from"./index.99c0f294.js";import{B as w}from"./BasicForm.4092a552.js";import{u as $}from"./useForm.932b00c0.js";import{F as P,f as R}from"./Fields.664e75ae.js";import{i as E}from"./cms.dff13ee1.js";import{av as O,a as V,v as g,ax as f,o as j,j as z,z as A,n as y,ay as G}from"./index.d00d010f.js";import"./useWindowSizeFn.c6dbabe3.js";import"./FullscreenOutlined.bc0c7bcb.js";/* empty css              *//* empty css               */import"./index.420ad400.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./useSize.fb85ad3c.js";import"./DeleteOutlined.3d6f436d.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.58b6f38e.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const I=V({components:{BasicModal:C,BasicForm:w,Fields:P},setup(o,{emit:t}){const e=g("\u4FEE\u6539"),a=g([{name:"",sort:1,type:"input"}]),[m,{resetFields:p,setFieldsValue:n,updateSchema:s,validate:i,appendSchemaByField:l,removeSchemaByFiled:W}]=$({labelWidth:100,schemas:R,showActionButtonGroup:!1,baseColProps:{span:24}}),[B,{closeModal:v}]=S(r=>c(this,null,function*(){p(),n(h({},r.module)),r.module.identity?s({field:"identity",componentProps:{disabled:!0}}):s({field:"identity",componentProps:{disabled:!1}}),r.fields.length>0?d(r.fields):d([{name:"",identity:"",sort:100,type:"input"}])}));function d(r){a.value=r}function M(){return c(this,null,function*(){try{const r=yield i();yield E({module:r,fields:a.value}),v(),t("ok")}catch(r){}})}return{registerForm:m,registerModal:B,title:e,changeFields:d,fields:a,handleSubmit:M}}});function N(o,t,e,a,m,p){const n=f("BasicForm"),s=f("Fields"),i=f("BasicModal");return j(),z(i,G(o.$attrs,{keyboard:!1,maskClosable:!1,title:o.title,width:960,onRegister:o.registerModal,onOk:o.handleSubmit}),{default:A(()=>[y(n,{onRegister:o.registerForm},null,8,["onRegister"]),y(s,{fields:o.fields,onChange:o.changeFields},null,8,["fields","onChange"])]),_:1},16,["title","onRegister","onOk"])}var Ro=O(I,[["render",N]]);export{Ro as default};