var B=(e,l,t)=>new Promise((s,r)=>{var c=o=>{try{i(t.next(o))}catch(a){r(a)}},u=o=>{try{i(t.throw(o))}catch(a){r(a)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,u);i((t=t.apply(e,l)).next())});import{B as h}from"./BasicForm.f5f564d7.js";import{u as f}from"./useForm.a3c80db7.js";import{aw as C,a as F,cD as _,ay as m,o as P,j as g,z as p,i as k,n,B as d}from"./index.8974946c.js";import{P as w}from"./index.71b2acdc.js";/* empty css              *//* empty css              */import"./index.bf55eaed.js";import"./index.8b566456.js";import"./Checkbox.ca83ee0a.js";import"./index.7cfb2783.js";import"./index.eeadc4e3.js";import"./index.ba9dd245.js";import"./index.8cd81056.js";import"./index.5a8912a5.js";import"./get.6ebaba4f.js";import"./index.b324fb8d.js";import"./eagerComputed.6d37f154.js";import"./index.f9ca903c.js";import"./Form.5c777fa1.js";import"./Col.7aead188.js";import"./useFlexGapSupport.15eac266.js";import"./_baseIteratee.19992612.js";import"./useSize.e92adaf4.js";import"./DeleteOutlined.0ca7fec0.js";import"./transButton.70b54c94.js";import"./index.71b10258.js";import"./index.f2c1a646.js";import"./useWindowSizeFn.66fd46ef.js";import"./FullscreenOutlined.956c3219.js";import"./index.7d6907f3.js";import"./index.1011d53c.js";import"./useRefs.8792725b.js";import"./index.62198fd1.js";import"./index.ddc2dc8c.js";import"./uuid.2b29000c.js";import"./download.98afff28.js";import"./base64Conver.08b9f4ec.js";import"./index.af4c9aa6.js";import"./index.519d1a7c.js";import"./uniqBy.57acf3a9.js";import"./index.8fa4764a.js";import"./index.1359973e.js";import"./useContentViewHeight.a176c986.js";import"./ArrowLeftOutlined.a6797b0a.js";import"./index.fcb52254.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],A=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>B(void 0,null,function*(){const{validate:l}=e,t=yield l()})})}],W=F({components:{BasicForm:h,CollapseContainer:_,PageWrapper:w},setup(){const[e,{setProps:l,updateSchema:t,appendSchemaByField:s,removeSchemaByFiled:r}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[c]=f({labelWidth:120,schemas:A,actionColOptions:{span:24}});function u(){t({field:"field3",label:"\u5B57\u6BB53 New"})}function i(){t([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function o(){s({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function a(){r("field11")}return{register:e,register1:c,schemas:b,setProps:l,changeLabel3:u,changeLabel34:i,appendField:o,deleteField:a}}}),D={class:"mb-4"},y=d(" \u66F4\u6539\u5B57\u6BB53label "),E=d(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),S=d(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),v=d(" \u5220\u9664\u5B57\u6BB511 ");function I(e,l,t,s,r,c){const u=m("a-button"),i=m("BasicForm"),o=m("CollapseContainer"),a=m("PageWrapper");return P(),g(a,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:p(()=>[k("div",D,[n(u,{onClick:e.changeLabel3,class:"mr-2"},{default:p(()=>[y]),_:1},8,["onClick"]),n(u,{onClick:e.changeLabel34,class:"mr-2"},{default:p(()=>[E]),_:1},8,["onClick"]),n(u,{onClick:e.appendField,class:"mr-2"},{default:p(()=>[S]),_:1},8,["onClick"]),n(u,{onClick:e.deleteField,class:"mr-2"},{default:p(()=>[v]),_:1},8,["onClick"])]),n(o,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:p(()=>[n(i,{onRegister:e.register},null,8,["onRegister"])]),_:1}),n(o,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:p(()=>[n(i,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ae=C(W,[["render",I]]);export{Ae as default};
