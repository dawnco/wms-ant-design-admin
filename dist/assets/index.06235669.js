import{a,v as r,fm as m,N as _,o as c,h as k,aB as f,aE as C,av as v,ax as i,j as O,z as s,n as x,i as B,t as E}from"./index.a5ffc99c.js";import{P as S}from"./index.33983858.js";import"./index.a72ad212.js";import"./index.eea3e5b6.js";import"./useSize.8c2a780d.js";import"./eagerComputed.c906e8d0.js";import"./useWindowSizeFn.449f7fa6.js";import"./useContentViewHeight.26660cfc.js";import"./ArrowLeftOutlined.147a8e1c.js";import"./index.10cecb72.js";import"./transButton.62748be9.js";const $=a({emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return m(n,()=>{t("clickOutside")}),_(()=>{t("mounted")}),(o,l)=>(c(),k("div",{ref_key:"wrap",ref:n},[f(o.$slots,"default")],512))}}),g=C($);const h=a({components:{ClickOutSide:g,PageWrapper:S},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function y(e,t,n,o,l,w){const u=i("ClickOutSide"),p=i("PageWrapper");return c(),O(p,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:s(()=>[x(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:s(()=>[B("div",{onClick:t[0]||(t[0]=(...d)=>e.innerClick&&e.innerClick(...d)),class:"demo-box"},E(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var q=v(h,[["render",y],["__scopeId","data-v-6c56edd4"]]);export{q as default};
