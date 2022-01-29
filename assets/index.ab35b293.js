var e=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(n,o,a)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a;import{_ as i,b as g,i as d,j as w}from"./index.d17e73d8.js";import{d as l,r as u,a3 as p,b as c,c as m,y as b,z as v,Q as f,bv as _,h,t as k,F as x,f as y,A as j,bw as O,p as I,g as M,e as q}from"./vendor.c17881da.js";const P={class:"box"},T=(e=>(I("data-v-35afd154"),e=e(),M(),e))((()=>q("img",{src:"/vite-vue3-admin/assets/analysis.04ad2692.svg"},null,-1))),V=l((z=((e,n)=>{for(var o in n||(n={}))s.call(n,o)&&r(e,o,n[o]);if(a)for(var o of a(n))t.call(n,o)&&r(e,o,n[o]);return e})({},{name:"DashboardWelcome"}),n(z,o({setup(e){var n;const o=null==(n=g().userInfo)?void 0:n.loginIp,{online:a}=d(),{battery:s,batteryStatus:t,calcDischargingTime:r}=w(),i=u(function(e="en"){const n=navigator.userAgent.toLowerCase(),o=e=>e.test(n),a=e=>{var o;return null==(o=n.match(e))?void 0:o.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},s=new Map([[o(/windows|win32|win64|wow32|wow64/g),"windows"],[o(/macintosh|macintel/g),"macos"],[o(/x11/g),"linux"],[o(/android|adr/g),"android"],[o(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",t=new Map([["windows",new Map([[o(/windows nt 5.0|windows 2000/g),"2000"],[o(/windows nt 5.1|windows xp/g),"xp"],[o(/windows nt 5.2|windows 2003/g),"2003"],[o(/windows nt 6.0|windows vista/g),"vista"],[o(/windows nt 6.1|windows 7/g),"7"],[o(/windows nt 6.2|windows 8/g),"8"],[o(/windows nt 6.3|windows 8.1/g),"8.1"],[o(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",a(/os x [\d._]+/g)],["android",a(/android [\d._]+/g)],["ios",a(/os [\d._]+/g)]]).get(s)||"unknow";let r="unknow";"windows"===s||"macos"===s||"linux"===s?r="desktop":("android"===s||"ios"===s||o(/mobile/g))&&(r="mobile");const[i="unknow",g="unknow"]=new Map([[o(/applewebkit/g),["webkit",new Map([[o(/safari/g),"safari"],[o(/chrome/g),"chrome"],[o(/opr/g),"opera"],[o(/edge/g),"edge"]]).get(!0)]],[o(/gecko/g)&&o(/firefox/g),["gecko","firefox"]],[o(/presto/g),["presto","opera"]],[o(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],d=new Map([["webkit",a(/applewebkit\/[\d._]+/g)],["gecko",a(/gecko\/[\d._]+/g)],["presto",a(/presto\/[\d._]+/g)],["trident",a(/trident\/[\d._]+/g)]]).get(i)||"unknow",w=new Map([["firefox",a(/firefox\/[\d._]+/g)],["opera",a(/opr\/[\d._]+/g)],["iexplore",a(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",a(/edge\/[\d._]+/g)],["safari",a(/version\/[\d._]+/g)],["chrome",a(/chrome\/[\d._]+/g)]]).get(g)||"unknow",[l="none",u="unknow"]=new Map([[o(/micromessenger/g),["wechat",a(/micromessenger\/[\d._]+/g)]],[o(/qqbrowser/g),["qq",a(/qqbrowser\/[\d._]+/g)]],[o(/ucbrowser/g),["uc",a(/ucbrowser\/[\d._]+/g)]],[o(/qihu 360se/g),["360","unknow"]],[o(/2345explorer/g),["2345",a(/2345explorer\/[\d._]+/g)]],[o(/metasr/g),["sougou","unknow"]],[o(/lbbrowser/g),["liebao","unknow"]],[o(/maxthon/g),["maxthon",a(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({"内核":i,"内核版本":d,"平台":r,"载体":g,"载体版本":w,"系统":s,"系统版本":t},"none"===l?{}:{"外壳":l,"外壳版本":u}),en:Object.assign({engine:i,engineVs:d,platform:r,supporter:g,supporterVs:w,system:s,systemVs:t},"none"===l?{}:{shell:l,shellVs:u})}[e]}("zh-cn"));return p((()=>{Object.assign(i.value,{"距离电池充满需要":Number.isFinite(s.value.chargingTime)&&0!=s.value.chargingTime?r.value:"未知","剩余可使用时间":Number.isFinite(s.value.dischargingTime)&&0!=s.value.dischargingTime?r.value:"未知","电池状态":t.value,"当前电量":s.value.level+"%"})})),(e,n)=>(c(),m("div",P,[T,b(f(_),{title:"系统信息",bordered:""},{default:v((()=>[b(f(_).Item,{key:"IP",label:"IP"},{default:v((()=>[h(k(f(o)),1)])),_:1}),(c(!0),m(x,null,y(i.value,((e,n)=>(c(),j(f(_).Item,{key:n,label:n},{default:v((()=>[h(k(e),1)])),_:2},1032,["label"])))),128)),b(f(_).Item,{label:"网络状态"},{default:v((()=>[b(f(O),{status:f(a)?"processing":"default",text:f(a)?"在线":"离线"},null,8,["status","text"])])),_:1})])),_:1})]))}}))));var z,D=i(V,[["__scopeId","data-v-35afd154"]]);export{D as default};
