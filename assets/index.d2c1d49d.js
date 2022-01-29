var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,d=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&o(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&o(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{y as n,M as i,_ as c,N as f}from"./index.d17e73d8.js";import{d as v,bZ as b,l as m,b as p,A as _,aN as y,aO as k,Q as I,b_ as w,k as C,j as h,o as O,bY as j,c as z,y as L,z as g,bv as P,h as M,t as N,by as S,ae as V,F as $,f as x,e as F}from"./vendor.c17881da.js";const A=v({props:u(d({},b()),{strokeColor:{type:[String,Object,Function]}}),setup(e){const a=e,l=m((()=>"function"==typeof a.strokeColor?u(d({},a),{strokeColor:a.strokeColor(a.percent)}):u(d({},a),{strokeColor:a.strokeColor})));return(e,a)=>(p(),_(I(w),y(k(I(l))),null,16))}});const D={class:"sys-server-stat-container"},E={class:"disk-info"},G={class:"disk-info--item"},H={class:"disk-info"},Q={class:"disk-info--item"};var U=c(v(u(d({},{name:"SystemMonitorServe"}),{setup(e){let a=-1;const l=C({runtime:{os:"",arch:"",nodeVersion:"",npmVersion:""},disk:{size:0,used:0,available:0},memory:{total:0,available:0},cpu:{manufacturer:"",brand:"",physicalCores:0,model:"",speed:0,rawCurrentLoad:0,rawCurrentLoadIdle:0,coresLoad:[]}}),{runtime:t,disk:s,memory:r,cpu:o}=h(l),d=m((()=>({size:f(s.value.size),used:f(s.value.used),available:f(s.value.available)}))),u=m((()=>({total:f(r.value.total),free:f(r.value.available),used:f(r.value.total-r.value.available)}))),c=m((()=>s.value.size<=0?0:Math.floor(s.value.used/s.value.size*100))),v=m((()=>r.value.total<=0?0:Math.floor((r.value.total-r.value.available)/r.value.total*100))),b=m((()=>`${o.value.manufacturer} ${o.value.brand} @ ${o.value.speed}GHz`)),y=async()=>{const e=await n({url:i.stat,method:"get"});t.value=e.runtime,s.value=e.disk,r.value=e.memory,o.value=e.cpu};y();const k=e=>e<30?"#5cb87a":e<70?"#e6a23c":"#f53f3f",w=(e,a)=>a<=0?0:Math.floor(e/a*100);return O((()=>{a=setInterval(y,1e4)})),j((()=>{clearInterval(a)})),(e,a)=>(p(),z("div",D,[L(I(V),{class:"stat-card",title:"运行环境"},{default:g((()=>[L(I(P),{column:1,"label-style":{width:"50%"}},{default:g((()=>[L(I(P).Item,{label:"操作系统"},{default:g((()=>[M(N(I(t).os),1)])),_:1}),L(I(P).Item,{label:"系统架构"},{default:g((()=>[M(N(I(t).arch),1)])),_:1}),L(I(P).Item,{label:"Node版本"},{default:g((()=>[L(I(S),{color:"processing",size:"small"},{default:g((()=>[M("v"+N(I(t).nodeVersion),1)])),_:1})])),_:1}),L(I(P).Item,{label:"NPM版本"},{default:g((()=>[L(I(S),{color:"processing",size:"small"},{default:g((()=>[M("v"+N(I(t).npmVersion),1)])),_:1})])),_:1})])),_:1})])),_:1}),L(I(V),{class:"stat-card",title:"CPU"},{default:g((()=>[L(I(P),{column:1,"label-style":{width:"50%"},"content-style":{width:"50%"}},{default:g((()=>[L(I(P).Item,{label:"详细"},{default:g((()=>[M(N(I(b)),1)])),_:1}),L(I(P).Item,{label:"负载"},{default:g((()=>[L(A,{percent:w(I(o).rawCurrentLoad,I(o).rawCurrentLoadIdle+I(o).rawCurrentLoad),strokeColor:k},null,8,["percent"])])),_:1}),(p(!0),z($,null,x(I(o).coresLoad,((e,a)=>(p(),_(I(P).Item,{key:a,label:`核心${a+1} 负载`},{default:g((()=>[L(A,{percent:w(e.rawLoad,e.rawLoad+e.rawLoadIdle),strokeColor:k},null,8,["percent"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),L(I(V),{class:"stat-card",title:"磁盘"},{default:g((()=>[F("div",E,[L(I(P),{class:"disk-info--item",column:1},{default:g((()=>[L(I(P).Item,{label:"总空间"},{default:g((()=>[M(N(I(d).size),1)])),_:1}),L(I(P).Item,{label:"已用空间"},{default:g((()=>[M(N(I(d).used),1)])),_:1}),L(I(P).Item,{label:"可用空间"},{default:g((()=>[M(N(I(d).available),1)])),_:1})])),_:1}),F("div",G,[L(A,{type:"dashboard",percent:I(c),width:100,strokeColor:k},null,8,["percent"])])])])),_:1}),L(I(V),{class:"stat-card",title:"内存"},{default:g((()=>[F("div",H,[L(I(P),{class:"disk-info--item",column:1},{default:g((()=>[L(I(P).Item,{label:"总内存"},{default:g((()=>[M(N(I(u).total),1)])),_:1}),L(I(P).Item,{label:"已用内存"},{default:g((()=>[M(N(I(u).used),1)])),_:1}),L(I(P).Item,{label:"可用内存"},{default:g((()=>[M(N(I(u).free),1)])),_:1})])),_:1}),F("div",Q,[L(A,{type:"dashboard",percent:I(v),width:100,strokeColor:k},null,8,["percent"])])])])),_:1})]))}})),[["__scopeId","data-v-ed595d20"]]);export{U as default};
