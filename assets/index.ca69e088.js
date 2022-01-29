var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&d(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&d(e,t,a[t]);return e},s=(e,r)=>a(e,t(r));import{b as i,e as c,f as p,a as u,h as m,i as f}from"./index.05e9d6b9.js";import{g as h}from"./index.3ca5be33.js";import{D as b}from"./dynamic-table.e550ac7f.js";import{u as y}from"./useFormModal.e76c1670.js";import{b as v,a as I}from"./utils.1ab06744.js";import{d as x,r as g,x as w,b as k,c as P,y as j,z as O,Q as K,h as S}from"./vendor.c17881da.js";import"./index.d17e73d8.js";const T=[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0}],C=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}],R=S(" 新增 "),q=x(s(n({},{name:"SystemPermissionRole"}),{setup(e){const a=g(),[t]=y(),r=(e,a,t=[])=>a.reduce(((a,l)=>{var o;return(null==(o=l.children)?void 0:o.length)?r(e,l.children,t):e.includes(l.value)&&a.push(l.value),a}),t),l=async e=>{var l,o;const[d]=await t({modalProps:{title:(e.id?"编辑":"新增")+"角色",width:"50%",onFinish:async t=>{var r,l,o,i,u;e.id&&(t.roleId=e.id);const m=null==(l=null==(r=d.value)?void 0:r.compRefs)?void 0:l.menus,f=null==(i=null==(o=d.value)?void 0:o.compRefs)?void 0:i.depts,h=s(n({},t),{menus:[...m.halfCheckedKeys,...m.checkedKeys],depts:[...f.halfCheckedKeys,...f.checkedKeys]});await(e.id?c:p)(h),null==(u=a.value)||u.refreshTable()}},formSchema:{labelWidth:100,layout:"vertical",schemas:C}}),[i,f]=await Promise.all([u(),h()]),b=v(f),y=I(i);if(null==(l=d.value)||l.updateSchema([{field:"menus",componentProps:{treeData:b}},{field:"depts",componentProps:{treeData:y}}]),e.id){const a=await m({roleId:e.id}),t=a.menus.map((e=>e.menuId)),l=a.depts.map((e=>e.departmentId));null==(o=d.value)||o.setFieldsValue(s(n({},e),{name:a.roleInfo.name,label:a.roleInfo.label,remark:a.roleInfo.remark,menus:r(t,b),depts:r(l,y)}))}},o=[...T,{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.role.update",effect:"disable"},onClick:()=>l(e)},{label:"删除",auth:"sys.role.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>(async e=>{var t;await f({roleIds:[e.id]}),null==(t=a.value)||t.refreshTable()})(e)}}]}];return(e,t)=>{const r=w("a-button");return k(),P("div",null,[j(K(b),{ref_key:"dynamicTableRef",ref:a,"row-key":"id","header-title":"角色管理","data-request":K(i),columns:o,bordered:"",size:"small"},{toolbar:O((()=>[j(r,{type:"primary",disabled:!e.$auth("sys.role.add"),onClick:t[0]||(t[0]=e=>l({}))},{default:O((()=>[R])),_:1},8,["disabled"])])),_:1},8,["data-request"])])}}}));export{q as default};
