import{D as l}from"./index.a9962f89.js";import{P as p}from"./index.33983858.js";import{av as m,a as c,ax as n,o as d,j as f,z as g,n as r}from"./index.a5ffc99c.js";import{u}from"./useDescription.5f3c19a2.js";import"./index.d181c2f5.js";import"./get.975901b5.js";import"./index.a72ad212.js";import"./index.eea3e5b6.js";import"./useSize.8c2a780d.js";import"./eagerComputed.c906e8d0.js";import"./useWindowSizeFn.449f7fa6.js";import"./useContentViewHeight.26660cfc.js";import"./ArrowLeftOutlined.147a8e1c.js";import"./index.10cecb72.js";import"./transButton.62748be9.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},s=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],h=c({components:{Description:l,PageWrapper:p},setup(){const[e]=u({title:"useDescription",data:o,schema:s}),[a]=u({title:"\u65E0\u8FB9\u6846",bordered:!1,data:o,schema:s});return{mockData:o,schema:s,register:e,register1:a}}});function x(e,a,D,B,E,F){const t=n("Description"),i=n("PageWrapper");return d(),f(i,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:g(()=>[r(t,{title:"\u57FA\u7840\u793A\u4F8B",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{class:"mt-4",title:"\u5782\u76F4\u793A\u4F8B",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),r(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}var V=m(h,[["render",x]]);export{V as default};
