import{ca as o,au as a,bs as d}from"./index.a5ffc99c.js";function m(i,r=150,n){let e=()=>{i()};e=d(e,r);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},s=()=>{window.removeEventListener("resize",e)};return o(()=>{t()}),a(()=>{s()}),[t,s]}export{m as u};
