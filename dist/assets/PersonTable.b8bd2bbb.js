import{B as k}from"./TableImg.099cc1f2.js";import{j as C}from"./BasicForm.f5f564d7.js";import{u as w}from"./useTable.d24f52ce.js";import{a as _,aw as E,ay as r,o as d,h as B,n as c,z as f,j as D,l as g,B as N}from"./index.8974946c.js";import"./index.8b566456.js";import"./Checkbox.ca83ee0a.js";import"./index.7cfb2783.js";import"./index.b324fb8d.js";import"./eagerComputed.6d37f154.js";import"./useForm.a3c80db7.js";import"./index.71b2acdc.js";import"./index.8fa4764a.js";import"./index.1359973e.js";import"./useSize.e92adaf4.js";import"./useWindowSizeFn.66fd46ef.js";import"./useContentViewHeight.a176c986.js";import"./ArrowLeftOutlined.a6797b0a.js";import"./index.fcb52254.js";import"./transButton.70b54c94.js";import"./index.ba9dd245.js";import"./index.8cd81056.js";import"./index.eeadc4e3.js";import"./uuid.2b29000c.js";import"./index.7d6907f3.js";import"./_baseIteratee.19992612.js";import"./get.6ebaba4f.js";import"./DeleteOutlined.0ca7fec0.js";import"./index.1011d53c.js";import"./useRefs.8792725b.js";import"./index.f9ca903c.js";import"./Form.5c777fa1.js";import"./Col.7aead188.js";import"./useFlexGapSupport.15eac266.js";import"./index.f2c1a646.js";import"./FullscreenOutlined.956c3219.js";import"./index.bf55eaed.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.639c8f19.js";import"./index.ddc2dc8c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.44d2070c.js";import"./index.46694659.js";/* empty css              *//* empty css              */import"./index.5a8912a5.js";import"./index.71b10258.js";import"./index.62198fd1.js";import"./download.98afff28.js";import"./base64Conver.08b9f4ec.js";import"./index.af4c9aa6.js";import"./index.519d1a7c.js";import"./uniqBy.57acf3a9.js";const T=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],x=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],y=_({components:{BasicTable:k,TableAction:C},setup(){const[e,{getDataSource:n}]=w({columns:T,showIndexColumn:!1,dataSource:x,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action"},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=n(),b=i.findIndex(h=>h.key===t.key);i.splice(b,1)}}function u(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function s(t){}function p(){const t=n(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:u.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:e,handleEdit:a,createActions:m,handleAdd:p,getDataSource:n,handleEditChange:s}}}),F=N(" \u65B0\u589E\u6210\u5458 ");function A(e,n,a,l,u,s){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return d(),B("div",null,[c(m,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{bodyCell:f(({column:o,record:i})=>[o.key==="action"?(d(),D(p,{key:0,actions:e.createActions(i,o)},null,8,["actions"])):g("",!0)]),_:1},8,["onRegister","onEditChange"]),c(t,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:f(()=>[F]),_:1},8,["onClick"])])}var Ft=E(y,[["render",A]]);export{Ft as default};
