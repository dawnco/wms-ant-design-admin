import{av as $,a as A,b5 as P,ax as a,o as l,j as u,z as e,q as r,i as t,n as i,h as d,aA as w,F as k,fc as y,fd as L,l as m,t as c,B as f}from"./index.d00d010f.js";import{P as S}from"./index.2e13b641.js";/* empty css               */import{cardList as N}from"./data.a96915dc.js";import{P as V}from"./index.62b0c78d.js";import{L as p}from"./index.499c385d.js";import{R as v,C as h}from"./index.0e1e0fdd.js";import"./useRefs.6ba3ea31.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./eagerComputed.505d1976.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";const z=A({components:{Icon:P,Progress:S,PageWrapper:V,[p.name]:p,[p.Item.name]:p.Item,AListItemMeta:p.Item.Meta,[v.name]:v,[h.name]:h},setup(){return{prefixCls:"list-basic",list:N,pagination:{show:!0,pageSize:3}}}}),n=s=>(y("data-v-091ccf36"),s=s(),L(),s),W=n(()=>t("div",null,"\u6211\u7684\u5F85\u529E",-1)),b=n(()=>t("p",null,"8\u4E2A\u4EFB\u52A1",-1)),M=n(()=>t("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),R=n(()=>t("p",null,"32\u5206\u949F",-1)),j=n(()=>t("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),q=n(()=>t("p",null,"24\u4E2A\u4EFB\u52A1",-1)),D={key:0,class:"extra"},O={class:"description"},T={class:"info"},G=n(()=>t("span",null,"Owner",-1)),H=n(()=>t("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(s,Q,U,X,Y,Z){const _=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),x=a("a-list-item-meta"),B=a("a-list-item"),I=a("a-list"),E=a("PageWrapper");return l(),u(E,{class:r(s.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[t("div",{class:r(`${s.prefixCls}__top`)},[i(C,{gutter:12},{default:e(()=>[i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[W,b]),_:1},8,["class"]),i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[M,R]),_:1},8,["class"]),i(_,{span:8,class:r(`${s.prefixCls}__top-col`)},{default:e(()=>[j,q]),_:1},8,["class"])]),_:1})],2),t("div",{class:r(`${s.prefixCls}__content`)},[i(I,{pagination:s.pagination},{default:e(()=>[(l(!0),d(k,null,w(s.list,o=>(l(),u(B,{key:o.id,class:"list"},{default:e(()=>[i(x,null,{avatar:e(()=>[o.icon?(l(),u(g,{key:0,class:"icon",icon:o.icon,color:o.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[t("span",null,c(o.title),1),o.extra?(l(),d("div",D,c(o.extra),1)):m("",!0)]),description:e(()=>[t("div",O,c(o.description),1),t("div",T,[t("div",null,[G,f(c(o.author),1)]),t("div",null,[H,f(c(o.datetime),1)])]),t("div",J,[i(F,{percent:o.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var gt=$(z,[["render",K],["__scopeId","data-v-091ccf36"]]);export{gt as default};