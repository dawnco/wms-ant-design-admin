import{B as b}from"./TableImg.94df718a.js";import"./BasicForm.4092a552.js";import{getBasicColumns as p,getBasicShortColumns as E}from"./tableData.0902c609.js";import{av as R,a as D,v as w,ax as f,o as S,h as A,i as d,n as u,z as i,B as n,E as T,k as L}from"./index.d00d010f.js";import{d as y}from"./table.80e4c8ad.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const K=D({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(E())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),v={class:"p-4"},P={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",v,[d("div",P,[u(e,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[$]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[M]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[N]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[V]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[z]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[I]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[H]),_:1},8,["onClick"])]),d("div",j,[u(e,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[q]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[G]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[J]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[O]),_:1},8,["onClick"]),u(e,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[Q]),_:1},8,["onClick"])]),u(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Uo=R(K,[["render",U]]);export{Uo as default};