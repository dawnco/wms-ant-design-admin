var v=Object.defineProperty;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,F=(e,o)=>{for(var t in o||(o={}))C.call(o,t)&&y(e,t,o[t]);if(h)for(var t of h(o))w.call(o,t)&&y(e,t,o[t]);return e};var u=(e,o,t)=>new Promise((p,n)=>{var l=r=>{try{a(t.next(r))}catch(i){n(i)}},m=r=>{try{a(t.throw(r))}catch(i){n(i)}},a=r=>r.done?p(r.value):Promise.resolve(r.value).then(l,m);a((t=t.apply(e,o)).next())});import{av as b,a as I,ff as S,aY as D,aX as L,v as P,N as k,ax as c,o as x,j as R,z as d,n as f,B as W,E as $}from"./index.d00d010f.js";import{P as q}from"./index.62b0c78d.js";import{B as M}from"./BasicForm.4092a552.js";import{u as N}from"./useForm.932b00c0.js";import{f as V,r as j}from"./data.c3eebc7f.js";import{c as E,s as z}from"./cms.dff13ee1.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./eagerComputed.505d1976.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";/* empty css              *//* empty css               */import"./index.420ad400.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./DeleteOutlined.3d6f436d.js";import"./index.b66f5d3c.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.58b6f38e.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./upload.47c9d604.js";import"./index.f6199c2f.js";const A=I({name:"CmsContentDetail",components:{PageWrapper:q,BasicForm:M,Loading:S},setup(){const e=D(),{createMessage:o}=$(),t=L(),[p,{setFieldsValue:n,validate:l,appendSchemaByField:m,removeSchemaByFiled:a}]=N({labelWidth:100,schemas:V,showResetButton:!1,showSubmitButton:!1,baseColProps:{span:24}}),r=P(!1);k(()=>u(this,null,function*(){r.value=!0;try{const s=yield E({contentId:t.query.contentId,moduleIdentity:t.query.moduleIdentity,categoryId:t.query.categoryId});n(F({},s)),j(m,a,s.fields)}finally{r.value=!1}}));function i(){return u(this,null,function*(){try{let s=yield l();r.value=!0,yield z(s),o.success("\u4FDD\u5B58\u6210\u529F"),e("/cms/content/index")}catch(s){let g=[],_=s.errorFields;if(_){g=_[0].errors;let B=g.join(" ");o.error(B)}else o.error(s.message)}finally{r.value=!1}})}return{go:e,showLoading:r,registerForm:p,handleSubmit:i}}}),G=W(" \u63D0\u4EA4");function H(e,o,t,p,n,l){const m=c("Loading"),a=c("BasicForm"),r=c("a-button"),i=c("PageWrapper");return x(),R(i,{title:"",contentFullHeight:""},{rightFooter:d(()=>[f(r,{type:"primary",onClick:e.handleSubmit},{default:d(()=>[G]),_:1},8,["onClick"])]),default:d(()=>[f(m,{loading:e.showLoading},null,8,["loading"]),f(a,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1})}var zt=b(A,[["render",H]]);export{zt as default};