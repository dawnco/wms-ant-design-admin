import{av as _,a as f,dt as C,s as A,ft as r,f as m,ax as t,o as S,j as B,z as s,n as o,i as a,t as p,B as n}from"./index.d00d010f.js";import{A as D}from"./index.58b6f38e.js";import{S as R}from"./index.b66f5d3c.js";import{P as g}from"./index.62b0c78d.js";import y from"./CurrentPermissionMode.6f8d66af.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./eagerComputed.505d1976.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.420ad400.js";const P=f({components:{Space:R,Alert:D,CurrentPermissionMode:y,PageWrapper:g},setup(){const{changeRole:u}=C(),e=A();return{userStore:e,RoleEnum:r,isSuper:m(()=>e.getRoleList.includes(r.SUPER)),isTest:m(()=>e.getRoleList.includes(r.TEST)),changeRole:u}}}),v=n(" \u5F53\u524D\u89D2\u8272: "),T={class:"mt-4"},$=n(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): ");function h(u,e,k,U,L,M){const l=t("CurrentPermissionMode"),c=t("Alert"),i=t("a-button"),d=t("Space"),E=t("PageWrapper");return S(),B(E,{title:"\u524D\u7AEF\u6743\u9650\u793A\u4F8B",contentBackground:"",contentClass:"p-4",content:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:s(()=>[o(l),a("p",null,[v,a("a",null,p(u.userStore.getRoleList),1)]),o(c,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),a("div",T,[$,o(d,null,{default:s(()=>[o(i,{onClick:e[0]||(e[0]=F=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:s(()=>[n(p(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),o(i,{onClick:e[1]||(e[1]=F=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:s(()=>[n(p(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}var X=_(P,[["render",h],["__scopeId","data-v-05d085c9"]]);export{X as default};