var m=(t,e,n)=>new Promise((s,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},o=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((n=n.apply(t,e)).next())});import{as as I,w as z,at as h,L as C,f as S,ap as F,al as A,am as k,k as d,v as f,au as T,a as g,C as N,av as w,c as D,aw as j,ax as p,o as y,j as _,z as v,B as E,t as O,ay as $,b as P,az as R,aA as L,n as V,aB as q,aC as U,aD as x,aE as B}from"./index.a5ffc99c.js";function G(t,e="value",n="change",s){const u=I(),l=u==null?void 0:u.emit,o=z({value:t[e]}),r=h(o),a=i=>{o.value=i};return C(()=>{o.value=t[e]}),[S({get(){return o.value},set(i){F(i,r.value)||(o.value=i,A(()=>{l==null||l(n,i,...k(d(s))||[])}))}}),a,r]}function H(t){const e=f(t),n=f(!1);let s;function u(){s&&window.clearInterval(s)}function l(){n.value=!1,u(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),o()}return T(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const J={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},K=g({name:"CountButton",components:{Button:N},props:J,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:u,reset:l}=H(t.count),{t:o}=D(),r=S(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));C(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&j(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:s}}});function M(t,e,n,s,u,l){const o=p("Button");return y(),_(o,$(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[E(O(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var b=w(K,[["render",M]]);const Q={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},W=g({name:"CountDownInput",components:{CountButton:b},inheritAttrs:!1,props:Q,setup(t){const{prefixCls:e}=P("countdown-input"),[n]=G(t);return{prefixCls:e,state:n}}});function X(t,e,n,s,u,l){const o=p("CountButton"),r=p("a-input");return y(),_(r,$(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),R({addonAfter:v(()=>[V(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[L(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[q(t.$slots,a,U(x(c||{})))])}))]),1040,["class","size","value"])}var Y=w(W,[["render",X]]);const et=B(Y);B(b);export{et as C,G as u};
