import{av as B,a as k,cC as h,I as f,aY as A,v as g,bV as b,ax as r,o as E,j as v,z as t,n as u,i as T,h as P,aA as $,B as s,t as y,F as V,E as w}from"./index.a5ffc99c.js";import{P as L}from"./index.33983858.js";import{A as D}from"./index.35d59315.js";import"./index.a72ad212.js";import"./index.eea3e5b6.js";import"./useSize.8c2a780d.js";import"./eagerComputed.c906e8d0.js";import"./useWindowSizeFn.449f7fa6.js";import"./useContentViewHeight.26660cfc.js";import"./ArrowLeftOutlined.147a8e1c.js";import"./index.10cecb72.js";import"./transButton.62748be9.js";const N=k({name:"TabsDemo",components:{CollapseContainer:h,PageWrapper:L,[f.name]:f,[D.name]:D},setup(){const e=A(),l=g(""),{closeAll:m,closeLeft:C,closeRight:_,closeOther:F,closeCurrent:i,refreshPage:o,setTitle:c}=b(),{createMessage:n}=w();function p(){l.value?c(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function a(d){e(`/feat/tabs/detail/${d}`)}return{closeAll:m,closeLeft:C,closeRight:_,closeOther:F,closeCurrent:i,toDetail:a,refreshPage:o,setTabTitle:p,title:l}}}),W={class:"mt-2 flex flex-grow-0"},I=s(" \u8BBE\u7F6ETab\u6807\u9898 "),M=s(" \u5173\u95ED\u6240\u6709 "),O=s(" \u5173\u95ED\u5DE6\u4FA7 "),R=s(" \u5173\u95ED\u53F3\u4FA7 "),j=s(" \u5173\u95ED\u5176\u4ED6 "),z=s(" \u5173\u95ED\u5F53\u524D "),G=s(" \u5237\u65B0\u5F53\u524D ");function S(e,l,m,C,_,F){const i=r("a-alert"),o=r("a-button"),c=r("a-input"),n=r("CollapseContainer"),p=r("PageWrapper");return E(),v(p,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(i,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),T("div",W,[u(o,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[I]),_:1},8,["onClick"]),u(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=a=>e.title=a),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(o,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[M]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[O]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[R]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[j]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[z]),_:1},8,["onClick"]),u(o,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[G]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(E(),P(V,null,$(6,a=>u(o,{key:a,class:"mr-2",onClick:d=>e.toDetail(a)},{default:t(()=>[s(" \u6253\u5F00"+y(a)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var tu=B(N,[["render",S]]);export{tu as default};
