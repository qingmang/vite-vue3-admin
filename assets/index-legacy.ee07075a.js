!function(){var e=document.createElement("style");e.innerHTML=".btn-rows button[data-v-3d3e8891]{margin-right:12px}\n",document.head.appendChild(e),System.register(["./vendor-legacy.38f67009.js","./index-legacy.637f3556.js","./index-legacy.f25f109a.js","./index-legacy.db1a9531.js"],(function(e){"use strict";var l,o,n,r,a,t,i,s,d,u,c,p,m,f;return{setters:[function(e){l=e.d,o=e.r,n=e.x,r=e.b,a=e.c,t=e.y,i=e.Q,s=e.bx,d=e.z,u=e.h,c=e.u,p=e.ae},function(){},function(){},function(e){m=e._,f=e.m}],execute:function(){const b=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,l)=>l?"1"===l?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:(e,l="")=>new Promise(((e,o)=>{setTimeout((()=>{l.includes("admin")?o("该字段不能包含admin关键字"):e()}),100)}))}]}];const v=u(" 确定 ");e("default",m(l({name:"DemosFormRuleForm",setup(e){const l=o(),u={schemas:b,labelWidth:120};function m(){var e;null===(e=l.value)||void 0===e||e.validate().then((()=>c.success("验证通过！")))}return(e,o)=>{const c=n("a-button"),b=p;return r(),a("div",null,[t(i(s),{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),t(b,null,{default:d((()=>[t(i(f),{ref_key:"dynamicForm",ref:l,"form-schema":u},{"operate-button":d((()=>[t(c,{type:"primary",onClick:m},{default:d((()=>[v])),_:1})])),_:1},512)])),_:1})])}}}),[["__scopeId","data-v-3d3e8891"]]))}}}))}();
