import{av as _,a as m,cU as S,ex as f,ey as T,ez as x,eA as R,eB as X,eC as h,eD as y,eE as B,eF as C,eG as E,eH as Y,eI as w,eJ as F,v as n,ax as o,o as r,j as i,z as s,i as l,n as p,aH as b,x as k,y as $,B as g}from"./index.d00d010f.js";import{P as A}from"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./eagerComputed.505d1976.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],D=P.map(e=>({label:e,value:e,key:e})),N=m({components:{Select:S,PageWrapper:A,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:R,SlideYReverseTransition:X,ScrollYReverseTransition:h,SlideXTransition:y,ScrollXTransition:B,SlideXReverseTransition:C,ScrollXReverseTransition:E,ScaleRotateTransition:Y,ExpandXTransition:w,ExpandTransition:F},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:D,value:e,start:t,show:a}}}),V={class:"flex"},W=g(" start "),z={class:"box"};function H(e,a,t,I,U,j){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[l("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[W]),_:1},8,["onClick"])]),(r(),i(b(`${e.value}Transition`),null,{default:s(()=>[k(l("div",z,null,512),[[$,e.show]])]),_:1}))]),_:1})}var oe=_(N,[["render",H],["__scopeId","data-v-45b1f032"]]);export{oe as default};