import{B as a,a as n}from"./index.1fc8bf58.js";import{B as c}from"./BasicForm.4092a552.js";import{u as l}from"./useForm.932b00c0.js";import{a as u,av as f,ax as i,o as d,j as B,z as _,i as g,n as w,ay as F}from"./index.d00d010f.js";import"./index.dfd53dc2.js";import"./ArrowLeftOutlined.6d181898.js";/* empty css              *//* empty css               */import"./index.420ad400.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./useSize.fb85ad3c.js";import"./DeleteOutlined.3d6f436d.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.99c0f294.js";import"./useWindowSizeFn.c6dbabe3.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.58b6f38e.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const p=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:12}}],h=u({components:{BasicDrawer:a,BasicForm:c},setup(){const[o,{setFieldsValue:t}]=l({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[e]=n(r=>{t({field2:r.data,field1:r.info})});return{register:e,schemas:p,registerForm:o}}});function D(o,t,e,r,$,v){const m=i("BasicForm"),s=i("BasicDrawer");return d(),B(s,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(m,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var uo=f(h,[["render",D]]);export{uo as default};