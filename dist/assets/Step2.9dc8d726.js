var f=(a,r,i)=>new Promise((c,s)=>{var _=o=>{try{t(i.next(o))}catch(n){s(n)}},m=o=>{try{t(i.throw(o))}catch(n){s(n)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,r)).next())});import{B as v}from"./BasicForm.4092a552.js";import{u as h}from"./useForm.932b00c0.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,av as x,ax as u,o as C,h as g,n as e,z as p,B as d}from"./index.d00d010f.js";import{A as B}from"./index.58b6f38e.js";import{D}from"./index.420ad400.js";import{D as l}from"./index.72264cda.js";/* empty css              *//* empty css               */import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./useSize.fb85ad3c.js";import"./DeleteOutlined.3d6f436d.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.99c0f294.js";import"./useWindowSizeFn.c6dbabe3.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const A=b({components:{BasicForm:v,[B.name]:B,[D.name]:D,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(a,{emit:r}){const[i,{validate:c,setProps:s}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){r("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();s({submitButtonOptions:{loading:!0}}),setTimeout(()=>{s({submitButtonOptions:{loading:!1}}),r("next",t)},1500)}catch(t){}})}return{register:i}}}),y={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Vben "),w=d(" 500\u5143 ");function I(a,r,i,c,s,_){const m=u("a-alert"),t=u("a-descriptions-item"),o=u("a-descriptions"),n=u("a-divider"),F=u("BasicForm");return C(),g("div",y,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:p(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:p(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:p(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:p(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:p(()=>[w]),_:1})]),_:1}),e(n),e(F,{onRegister:a.register},null,8,["onRegister"])])}var Et=x(A,[["render",I],["__scopeId","data-v-01481d2f"]]);export{Et as default};