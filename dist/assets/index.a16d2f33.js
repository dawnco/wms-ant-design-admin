import{T as i}from"./index.a22cbbb1.js";import{a as y,v as m,a7 as P,f as T,n as h,G as B}from"./index.a5ffc99c.js";var g=function(){return{tab:B.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}},c=y({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:g(),slots:["closeIcon","tab"],setup:function(e,l){var s=l.attrs,d=l.slots,r=m(e.forceRender);P([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?r.value=!0:e.destroyInactiveTabPane&&(r.value=!1)},{immediate:!0});var f=T(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var o,u=e.prefixCls,b=e.forceRender,t=e.id,n=e.active,v=e.tabKey;return h("div",{id:t&&"".concat(t,"-panel-").concat(v),role:"tabpanel",tabindex:n?0:-1,"aria-labelledby":t&&"".concat(t,"-tab-").concat(v),"aria-hidden":!n,style:[f.value,s.style],class:["".concat(u,"-tabpane"),n&&"".concat(u,"-tabpane-active"),s.class]},[(n||r.value||b)&&((o=d.default)===null||o===void 0?void 0:o.call(d))])}}});i.TabPane=c;i.install=function(a){return a.component(i.name,i),a.component(c.name,c),a};
