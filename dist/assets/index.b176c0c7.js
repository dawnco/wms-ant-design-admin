import{D as l}from"./index.e7a7ccf9.js";import{P as p}from"./index.62b0c78d.js";import{av as m,a as c,ax as n,o as d,j as f,z as g,n as r}from"./index.d00d010f.js";import{u}from"./useDescription.3f864115.js";import"./index.72264cda.js";import"./get.b6ec3b5b.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./eagerComputed.505d1976.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},s=[{field:"username",label:"\u7528\u6237\u540D"},{field:"nickName",label:"\u6635\u79F0",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],h=c({components:{Description:l,PageWrapper:p},setup(){const[e]=u({title:"useDescription",data:o,schema:s}),[a]=u({title:"\u65E0\u8FB9\u6846",bordered:!1,data:o,schema:s});return{mockData:o,schema:s,register:e,register1:a}}});function x(e,a,D,B,E,F){const t=n("Description"),i=n("PageWrapper");return d(),f(i,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:g(()=>[r(t,{title:"\u57FA\u7840\u793A\u4F8B",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{class:"mt-4",title:"\u5782\u76F4\u793A\u4F8B",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),r(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),r(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}var V=m(h,[["render",x]]);export{V as default};