import{_ as T}from"./index.11e1348a.js";import{t as C}from"./data.ec134722.js";import{P as B}from"./index.71b2acdc.js";import{aw as k,a as E,b1 as A,v as p,ay as u,o as v,j as K,z as n,n as e,ah as y,al as R,k as _,dr as $,ba as L,B as D}from"./index.8974946c.js";import{C as b}from"./index.552d1900.js";import"./index.0ce8b1e8.js";/* empty css              */import{R as w,C as P}from"./index.519d1a7c.js";import"./fromPairs.84aabb58.js";import"./index.b324fb8d.js";import"./eagerComputed.6d37f154.js";import"./useContextMenu.fee55dda.js";import"./index.bf55eaed.js";import"./get.6ebaba4f.js";import"./index.8fa4764a.js";import"./index.1359973e.js";import"./useSize.e92adaf4.js";import"./useWindowSizeFn.66fd46ef.js";import"./useContentViewHeight.a176c986.js";import"./ArrowLeftOutlined.a6797b0a.js";import"./index.fcb52254.js";import"./transButton.70b54c94.js";import"./index.2880096c.js";import"./useRefs.8792725b.js";import"./PlusOutlined.03bc80b7.js";import"./Col.7aead188.js";import"./useFlexGapSupport.15eac266.js";const x=E({components:{BasicTree:T,PageWrapper:B,Card:b,Row:w,Col:P,Spin:A},setup(){const t=p(null),d=p(null),F=p(null),c=p([]),l=p(!1);function h(a,i){}function o(){l.value=!0,setTimeout(()=>{c.value=y(C),l.value=!1,R(()=>{var a;_(d),(a=_(d))==null||a.expandAll(!0)})},2e3)}function r(){l.value=!0,setTimeout(()=>{c.value=y(C),l.value=!1},2e3)}const m=p([{title:"parent ",key:"0-0"}]);function f(a){return new Promise(i=>{if($(a.children)&&a.children.length>0){i();return}setTimeout(()=>{const s=_(t);if(s){const g=[{title:`Child Node ${a.eventKey}-0`,key:`${a.eventKey}-0`},{title:`Child Node ${a.eventKey}-1`,key:`${a.eventKey}-1`}];s.updateNodeByKey(a.eventKey,{children:g}),s.setExpandedKeys(L([a.eventKey,...s.getExpandedKeys()]))}i()},300)})}return{treeData:C,handleCheck:h,tree:m,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:d,loadTreeRef:F,tree2:c,loadTreeData:o,treeLoading:l,loadTreeData2:r}}}),S=D(" 123123 "),W=D("\u52A0\u8F7D\u6570\u636E"),V=D("\u8BF7\u6C42\u6570\u636E");function j(t,d,F,c,l,h){const o=u("BasicTree"),r=u("Col"),m=u("a-button"),f=u("Spin"),a=u("Card"),i=u("Row"),s=u("PageWrapper");return v(),K(s,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[e(i,{gutter:[16,16]},{default:n(()=>[e(r,{span:8},{default:n(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:n(()=>[S]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:n(()=>[e(m,{onClick:t.loadTreeData,loading:t.treeLoading},{default:n(()=>[W]),_:1},8,["onClick","loading"])]),default:n(()=>[e(f,{spinning:t.treeLoading},{default:n(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:n(()=>[e(m,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:n(()=>[V]),_:1},8,["onClick","loading"])]),default:n(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var me=k(x,[["render",j]]);export{me as default};
