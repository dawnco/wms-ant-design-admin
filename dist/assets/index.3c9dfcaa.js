import{a as bt,G as y,J as yt,cM as g,Q as gt,S as c,n as t,c4 as pt,aB as _t,cA as U,cN as ht,cO as Ct}from"./index.a5ffc99c.js";import"./index.a16d2f33.js";import{R as p,C as s}from"./index.315157fe.js";import{T as q}from"./index.a22cbbb1.js";var xt=q.TabPane,Tt=function(){return{prefixCls:String,title:y.any,extra:y.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:y.any,tabList:{type:Array},tabBarExtraContent:y.any,activeTabKey:String,defaultActiveTabKey:String,cover:y.any,onTabChange:{type:Function}}},St=bt({name:"ACard",props:Tt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,X){var r=X.slots,C=yt("card",e),Y=C.prefixCls,Z=C.direction,K=C.size,tt=function(o){var i=o.map(function(d,f){return U(d)&&!ht(d)||!U(d)?t("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(f)},[t("span",null,[d])]):null});return i},at=function(o){var i;(i=e.onTabChange)===null||i===void 0||i.call(e,o)},et=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return o.forEach(function(d){d&&Ct(d.type)&&d.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var l,o,i,d,f,x,T,S,$=e.headStyle,nt=$===void 0?{}:$,k=e.bodyStyle,m=k===void 0?{}:k,j=e.loading,G=e.bordered,rt=G===void 0?!0:G,L=e.type,v=e.tabList,lt=e.hoverable,R=e.activeTabKey,ot=e.defaultActiveTabKey,z=e.tabBarExtraContent,D=z===void 0?g((i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r)):z,N=e.title,A=N===void 0?g((d=r.title)===null||d===void 0?void 0:d.call(r)):N,O=e.extra,B=O===void 0?g((f=r.extra)===null||f===void 0?void 0:f.call(r)):O,w=e.actions,E=w===void 0?g((x=r.actions)===null||x===void 0?void 0:x.call(r)):w,I=e.cover,V=I===void 0?g((T=r.cover)===null||T===void 0?void 0:T.call(r)):I,_=gt((S=r.default)===null||S===void 0?void 0:S.call(r)),a=Y.value,it=(l={},c(l,"".concat(a),!0),c(l,"".concat(a,"-loading"),j),c(l,"".concat(a,"-bordered"),rt),c(l,"".concat(a,"-hoverable"),!!lt),c(l,"".concat(a,"-contain-grid"),et(_)),c(l,"".concat(a,"-contain-tabs"),v&&v.length),c(l,"".concat(a,"-").concat(K.value),K.value),c(l,"".concat(a,"-type-").concat(L),!!L),c(l,"".concat(a,"-rtl"),Z.value==="rtl"),l),dt=m.padding===0||m.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(a,"-loading-block")},null),ct=t("div",{class:"".concat(a,"-loading-content"),style:dt},[t(p,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),W=R!==void 0,ut=(o={size:"large"},c(o,W?"activeKey":"defaultActiveKey",W?R:ot),c(o,"onChange",at),c(o,"class","".concat(a,"-head-tabs")),o),F,J=v&&v.length?t(q,ut,{default:function(){return[v.map(function(n){var M=n.tab,h=n.slots,Q=h==null?void 0:h.tab;pt(!h,"Card","tabList slots is deprecated, Please use `customTab` instead.");var P=M!==void 0?M:r[Q]?r[Q](n):null;return P=_t(r,"customTab",n,function(){return[P]}),t(xt,{tab:P,key:n.key,disabled:n.disabled},null)})]},rightExtra:D?function(){return D}:null}):null;(A||B||J)&&(F=t("div",{class:"".concat(a,"-head"),style:nt},[t("div",{class:"".concat(a,"-head-wrapper")},[A&&t("div",{class:"".concat(a,"-head-title")},[A]),B&&t("div",{class:"".concat(a,"-extra")},[B])]),J]));var st=V?t("div",{class:"".concat(a,"-cover")},[V]):null,ft=t("div",{class:"".concat(a,"-body"),style:m},[j?ct:_]),vt=E&&E.length?t("ul",{class:"".concat(a,"-actions")},[tt(E)]):null;return t("div",{class:it,ref:"cardContainerRef"},[F,st,_&&_.length?ft:null,vt])}}}),Pt=St;export{Pt as C};
