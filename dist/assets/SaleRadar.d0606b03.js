import{aw as r,a as i,v as s,a7 as n,ay as l,o as d,j as m,z as p,i as u,bm as c}from"./index.8974946c.js";import{C as f}from"./index.552d1900.js";import"./index.0ce8b1e8.js";/* empty css              */import{u as h}from"./useECharts.f906fa6b.js";import"./index.2880096c.js";import"./index.519d1a7c.js";import"./Col.7aead188.js";import"./useFlexGapSupport.15eac266.js";import"./useRefs.8792725b.js";import"./PlusOutlined.03bc80b7.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=s(null),{setOptions:t}=h(a);return n(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function y(e,a,t,w,S,C){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var x=r(g,[["render",y]]);export{x as default};
