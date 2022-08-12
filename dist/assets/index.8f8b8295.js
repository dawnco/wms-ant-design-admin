import{B as b}from"./TableImg.099cc1f2.js";import{j as C}from"./BasicForm.f5f564d7.js";import{u as g}from"./useTable.d24f52ce.js";import{a as _}from"./system.dcd552b9.js";import{b as T}from"./index.f2c1a646.js";import{D as B,c as D,s as E}from"./DeptModal.4f20ca5a.js";import{aw as k,a as M,ay as e,o as d,h as y,n as a,z as m,j as S,l as w,B as R}from"./index.8974946c.js";import"./index.8b566456.js";import"./Checkbox.ca83ee0a.js";import"./index.7cfb2783.js";import"./index.b324fb8d.js";import"./eagerComputed.6d37f154.js";import"./useForm.a3c80db7.js";import"./index.71b2acdc.js";import"./index.8fa4764a.js";import"./index.1359973e.js";import"./useSize.e92adaf4.js";import"./useWindowSizeFn.66fd46ef.js";import"./useContentViewHeight.a176c986.js";import"./ArrowLeftOutlined.a6797b0a.js";import"./index.fcb52254.js";import"./transButton.70b54c94.js";import"./index.ba9dd245.js";import"./index.8cd81056.js";import"./index.eeadc4e3.js";import"./uuid.2b29000c.js";import"./index.7d6907f3.js";import"./_baseIteratee.19992612.js";import"./get.6ebaba4f.js";import"./DeleteOutlined.0ca7fec0.js";import"./index.1011d53c.js";import"./useRefs.8792725b.js";import"./index.f9ca903c.js";import"./Form.5c777fa1.js";import"./Col.7aead188.js";import"./useFlexGapSupport.15eac266.js";import"./index.bf55eaed.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.639c8f19.js";import"./FullscreenOutlined.956c3219.js";import"./index.ddc2dc8c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.44d2070c.js";import"./index.46694659.js";/* empty css              *//* empty css              */import"./index.5a8912a5.js";import"./index.71b10258.js";import"./index.62198fd1.js";import"./download.98afff28.js";import"./base64Conver.08b9f4ec.js";import"./index.af4c9aa6.js";import"./index.519d1a7c.js";import"./uniqBy.57acf3a9.js";const v=M({name:"DeptManagement",components:{BasicTable:b,DeptModal:B,TableAction:C},setup(){const[o,{openModal:i}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:D,formConfig:{labelWidth:120,schemas:E},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function r(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:r,handleSuccess:n}}}),A=R(" \u65B0\u589E\u90E8\u95E8 ");function F(o,i,p,s,l,c){const r=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(r,{type:"primary",onClick:o.handleCreate},{default:m(()=>[A]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xo=k(v,[["render",F]]);export{xo as default};
