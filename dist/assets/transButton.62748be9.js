import{a as O,v as S,N as T,_ as f,n as h,T as s,c1 as v}from"./index.a5ffc99c.js";var x=globalThis&&globalThis.__rest||function(t,l){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)l.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a},K={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},w=O({name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(l,a){var e=a.slots,n=a.emit,c=a.attrs,p=a.expose,i=S(),b=function(o){var u=o.keyCode;u===v.ENTER&&o.preventDefault()},k=function(o){var u=o.keyCode;u===v.ENTER&&n("click",o)},m=function(o){n("click",o)},y=function(){i.value&&i.value.focus()},C=function(){i.value&&i.value.blur()};return T(function(){l.autofocus&&y()}),p({focus:y,blur:C}),function(){var r,o=l.noStyle,u=l.disabled,g=x(l,["noStyle","disabled"]),d={};return o||(d=f({},K)),u&&(d.pointerEvents="none"),h("div",s(s(s({role:"button",tabindex:0,ref:i},g),c),{},{onClick:m,onKeydown:b,onKeyup:k,style:f(f({},d),c.style||{})}),[(r=e.default)===null||r===void 0?void 0:r.call(e)])}}}),E=w;export{E as T};
