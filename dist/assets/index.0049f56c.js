import{B as C}from"./TableImg.94df718a.js";import{j as h}from"./BasicForm.4092a552.js";import{u as g}from"./useTable.8a96c0e7.js";import{av as _,a as F,fB as B,ax as t,o as d,h as I,n as p,z as l,j as T,l as w,fC as P,B as k}from"./index.d00d010f.js";import{u as S}from"./index.1fc8bf58.js";import{D as v,c as y}from"./DataDrawer.11f4995d.js";import{c as f}from"./customSetting.4c03ff9f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./index.dfd53dc2.js";const A=F({name:"AppUserIndex",components:{BasicTable:C,DataDrawer:v,TableAction:h},setup(){const[e,{openDrawer:n}]=S(),[m,{reload:r}]=g({title:"\u7528\u6237\u5217\u8868",api:B,columns:y,formConfig:{labelWidth:f.table.formConfig.labelWidth,schemas:[{field:"name",label:"\u83DC\u5355\u540D\u79F0",helpMessage:"\u83DC\u5355\u540D\u79F0\u63CF\u8FF0",component:"Input",colProps:{span:4}},{field:"name",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:4}},{field:"name",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:4}},{field:"name",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:4}},{field:"name",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:4}},{field:"name",label:"2222",component:"Input",colProps:{span:4}},{field:"name",label:"\u83DC\u5355\u540D\u79F0",component:"Input",colProps:{span:4}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:1},{label:"\u505C\u7528",value:0}]},colProps:{span:4}}]},useSearchForm:!0,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:f.table.actionColumn});function s(){n(!0,{isUpdate:!1})}function u(o){o.parentId=o.parentId>0?o.parentId:null,n(!0,{record:o,isUpdate:!0})}function a(o){P(o),r()}function i(){r()}return{registerTable:m,registerDrawer:e,handleCreate:s,handleEdit:u,handleDelete:a,handleSuccess:i}}}),E=k("\u65B0\u589E\u7528\u6237");function R(e,n,m,r,s,u){const a=t("a-button"),i=t("TableAction"),o=t("BasicTable"),b=t("DataDrawer");return d(),I("div",null,[p(o,{onRegister:e.registerTable},{toolbar:l(()=>[p(a,{type:"primary",onClick:e.handleCreate},{default:l(()=>[E]),_:1},8,["onClick"])]),bodyCell:l(({column:D,record:c})=>[D.key==="action"?(d(),T(i,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,c)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{placement:"left",title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,c)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister"]),p(b,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=_(A,[["render",R]]);export{$e as default};