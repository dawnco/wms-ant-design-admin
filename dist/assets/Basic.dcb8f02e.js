import{B}from"./TableImg.94df718a.js";import"./BasicForm.4092a552.js";import{getBasicColumns as v,getBasicData as h}from"./tableData.0902c609.js";import{av as b,a as A,v as e,ax as c,o as E,h as k,n as i,z as r,B as u,t as l}from"./index.d00d010f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const y=A({components:{BasicTable:B},setup(){const o=e(!1),a=e(!1),n=e(!0),p=e(!0),m=e(!1);function d(){o.value=!o.value}function t(){n.value=!n.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,m.value={pageSize:20}},3e3)}function g(){p.value=!p.value}function C(f){}return{columns:v(),data:h(),canResize:o,loading:a,striped:n,border:p,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:m,handleColumnChange:C}}}),z={class:"p-4"},F=u(" \u5F00\u542Floading ");function R(o,a,n,p,m,d){const t=c("a-button"),s=c("BasicTable");return E(),k("div",z,[i(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[i(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[u(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[u(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[F]),_:1},8,["onClick"]),i(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[u(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Fo=b(y,[["render",R]]);export{Fo as default};