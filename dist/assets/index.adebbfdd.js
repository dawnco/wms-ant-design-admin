import{aw as P,a as $,cG as U,b7 as C,bs as h,aG as N,b as O,s as R,f as A,ay as r,o as t,h as S,n,z as g,j as _,l as f,i as s,q as a,t as V,F as z,c as B,aN as T}from"./index.8974946c.js";import{D as F}from"./siteSetting.c485f07c.js";import{c as w,u as G}from"./index.f40ba26f.js";import{b as D}from"./index.f2c1a646.js";import{h as j}from"./header.d801b988.js";import"./FullscreenOutlined.956c3219.js";import"./index.9a188f46.js";import"./useWindowSizeFn.66fd46ef.js";import"./useContentViewHeight.a176c986.js";import"./uniqBy.57acf3a9.js";import"./_baseIteratee.19992612.js";import"./get.6ebaba4f.js";import"./index.27ad5922.js";import"./index.0ce8b1e8.js";import"./useRefs.8792725b.js";import"./PlusOutlined.03bc80b7.js";import"./RedoOutlined.639c8f19.js";import"./index.2880096c.js";import"./lock.911e538b.js";const q=$({name:"UserDropdown",components:{Dropdown:U,Menu:C,MenuItem:w(()=>h(()=>import("./DropMenuItem.73db3266.js"),["assets/DropMenuItem.73db3266.js","assets/index.8974946c.js","assets/index.fd713453.css"])),MenuDivider:C.Divider,LockAction:w(()=>h(()=>import("./LockModal.61d72080.js"),["assets/LockModal.61d72080.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.8974946c.js","assets/index.fd713453.css","assets/index.f2c1a646.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.66fd46ef.js","assets/FullscreenOutlined.956c3219.js","assets/BasicForm.f5f564d7.js","assets/BasicForm.9ea33745.css","assets/index.bf55eaed.js","assets/index.3a3c1369.css","assets/index.8b566456.js","assets/index.cb0992d5.css","assets/Checkbox.ca83ee0a.js","assets/index.7cfb2783.js","assets/index.695a0c50.css","assets/index.eeadc4e3.js","assets/index.49ada229.css","assets/index.ba9dd245.js","assets/index.47f7c782.css","assets/index.8cd81056.js","assets/index.579bd49e.css","assets/index.5a8912a5.js","assets/index.7b8b5e30.css","assets/get.6ebaba4f.js","assets/index.b324fb8d.js","assets/index.560eb672.css","assets/eagerComputed.6d37f154.js","assets/index.f9ca903c.js","assets/Form.5c777fa1.js","assets/Col.7aead188.js","assets/useFlexGapSupport.15eac266.js","assets/_baseIteratee.19992612.js","assets/useSize.e92adaf4.js","assets/DeleteOutlined.0ca7fec0.js","assets/transButton.70b54c94.js","assets/index.71b10258.js","assets/index.cd256673.css","assets/index.7d6907f3.js","assets/index.aeeee80c.css","assets/index.1011d53c.js","assets/index.8f5fe29a.css","assets/useRefs.8792725b.js","assets/index.62198fd1.js","assets/index.9d09be4d.css","assets/index.ddc2dc8c.js","assets/index.b1363280.css","assets/uuid.2b29000c.js","assets/download.98afff28.js","assets/base64Conver.08b9f4ec.js","assets/index.af4c9aa6.js","assets/index.88b1d373.css","assets/index.519d1a7c.js","assets/uniqBy.57acf3a9.js","assets/useForm.a3c80db7.js","assets/lock.911e538b.js","assets/header.d801b988.js"])),EditPassword:w(()=>h(()=>import("./editPasswordModal.5b3d4340.js"),["assets/editPasswordModal.5b3d4340.js","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.f2c1a646.js","assets/index.d0b877f3.css","assets/index.8974946c.js","assets/index.fd713453.css","assets/useWindowSizeFn.66fd46ef.js","assets/FullscreenOutlined.956c3219.js","assets/BasicForm.f5f564d7.js","assets/BasicForm.9ea33745.css","assets/index.bf55eaed.js","assets/index.3a3c1369.css","assets/index.8b566456.js","assets/index.cb0992d5.css","assets/Checkbox.ca83ee0a.js","assets/index.7cfb2783.js","assets/index.695a0c50.css","assets/index.eeadc4e3.js","assets/index.49ada229.css","assets/index.ba9dd245.js","assets/index.47f7c782.css","assets/index.8cd81056.js","assets/index.579bd49e.css","assets/index.5a8912a5.js","assets/index.7b8b5e30.css","assets/get.6ebaba4f.js","assets/index.b324fb8d.js","assets/index.560eb672.css","assets/eagerComputed.6d37f154.js","assets/index.f9ca903c.js","assets/Form.5c777fa1.js","assets/Col.7aead188.js","assets/useFlexGapSupport.15eac266.js","assets/_baseIteratee.19992612.js","assets/useSize.e92adaf4.js","assets/DeleteOutlined.0ca7fec0.js","assets/transButton.70b54c94.js","assets/index.71b10258.js","assets/index.cd256673.css","assets/index.7d6907f3.js","assets/index.aeeee80c.css","assets/index.1011d53c.js","assets/index.8f5fe29a.css","assets/useRefs.8792725b.js","assets/index.62198fd1.js","assets/index.9d09be4d.css","assets/index.ddc2dc8c.js","assets/index.b1363280.css","assets/uuid.2b29000c.js","assets/download.98afff28.js","assets/base64Conver.08b9f4ec.js","assets/index.af4c9aa6.js","assets/index.88b1d373.css","assets/index.519d1a7c.js","assets/uniqBy.57acf3a9.js","assets/useForm.a3c80db7.js"]))},props:{theme:N.oneOf(["dark","light"])},setup(){const{prefixCls:e}=O("header-user-dropdown"),{t:v}=B(),{getShowDoc:k,getUseLockPage:b}=G(),d=R(),y=A(()=>{const{realName:m="",avatar:E,desc:x}=d.getUserInfo||{};return{realName:m,avatar:E||j,desc:x}}),[o,{openModal:i}]=D(),[p,{openModal:l}]=D();function c(){i(!0)}function u(){d.confirmLoginOut()}function I(){T(F)}function L(){l(!0)}function M(m){switch(m.key){case"logout":u();break;case"doc":I();break;case"lock":c();break;case"editPassword":L();break}}return{prefixCls:e,t:v,getUserInfo:y,handleMenuClick:M,getShowDoc:k,register:o,registerEdit:p,getUseLockPage:b}}}),H=["src"];function W(e,v,k,b,d,y){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction"),u=r("EditPassword");return t(),S(z,null,[n(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:g(()=>[n(p,{onClick:e.handleMenuClick},{default:g(()=>[e.getShowDoc?(t(),_(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):f("",!0),e.getShowDoc?(t(),_(i,{key:1})):f("",!0),e.getUseLockPage?(t(),_(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):f("",!0),n(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"]),n(o,{key:"editPassword",text:e.t("layout.header.dropdownItemEditPassword"),icon:"ion:lock-closed-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:g(()=>[s("span",{class:a([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:a(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),s("span",{class:a(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:a([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),n(c,{onRegister:e.register},null,8,["onRegister"]),n(u,{onRegister:e.registerEdit},null,8,["onRegister"])],64)}var me=P(q,[["render",W]]);export{me as default};
