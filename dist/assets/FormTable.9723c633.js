import{B as g}from"./TableImg.862b1bc6.js";import"./BasicForm.2d60aca0.js";import{u as h}from"./useTable.fc22b9c5.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{av as k,a as y,v as B,ax as i,o as m,j as C,z as t,n as s,h as c,i as b,t as E,F as T,B as p}from"./index.a5ffc99c.js";import{A}from"./index.35d59315.js";import{d as S}from"./table.bc2b4944.js";import"./index.f9dc3f90.js";import"./Checkbox.1271bd2c.js";import"./index.5f7e0192.js";import"./index.119bdcd7.js";import"./eagerComputed.c906e8d0.js";import"./useForm.0698201c.js";import"./index.33983858.js";import"./index.a72ad212.js";import"./index.eea3e5b6.js";import"./useSize.8c2a780d.js";import"./useWindowSizeFn.449f7fa6.js";import"./useContentViewHeight.26660cfc.js";import"./ArrowLeftOutlined.147a8e1c.js";import"./index.10cecb72.js";import"./transButton.62748be9.js";import"./index.87a97f2f.js";import"./index.ea2bc3aa.js";import"./index.87536a70.js";import"./uuid.2b29000c.js";import"./index.505b013e.js";import"./_baseIteratee.586a2442.js";import"./get.975901b5.js";import"./DeleteOutlined.82780be3.js";import"./index.2ab2c550.js";import"./useRefs.89590530.js";import"./index.01c6fa00.js";import"./Form.9e62a082.js";import"./Col.a827698b.js";import"./useFlexGapSupport.b2150de8.js";import"./index.671994af.js";import"./FullscreenOutlined.c0763b97.js";import"./index.87c11889.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.45f07282.js";import"./index.852a7fd3.js";import"./scrollTo.90eb179c.js";import"./index.59f58c72.js";/* empty css              *//* empty css               */import"./index.bcc1e8b0.js";import"./index.822a9a38.js";import"./download.5a638dc1.js";import"./base64Conver.08b9f4ec.js";import"./index.92dd59e7.js";import"./index.315157fe.js";import"./uniqBy.d42e541b.js";const D=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),w=p(" custom-slot "),v=p("\u6E05\u7A7A"),K={key:1},V=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[w]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[v]),_:1})],64)):(m(),c("span",K,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[V]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(D,[["render",$]]);export{zo as default};
