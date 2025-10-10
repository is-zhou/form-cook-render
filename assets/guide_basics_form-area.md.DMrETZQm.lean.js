const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Size.DSznBNI2.js","assets/chunks/framework.Cd6hzTNw.js","assets/chunks/Label.DzA8MeyN.js","assets/chunks/FormRules.IidSQcMH.js","assets/chunks/InlineForm.B75g0Pzn.js","assets/chunks/DefaultBtn.CNzUcUTZ.js"])))=>i.map(i=>d[i]);
import{D as h,v as r,aX as k,p as v,C as A,c as b,o as D,aW as l,ag as o,G as a,ah as d,k as i,w as e,ax as c}from"./chunks/framework.Cd6hzTNw.js";import{L as m,N as y}from"./chunks/index.BpdcUPsw.js";const _=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      size: "large",
      disabled: true,
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
  ],
});
<\/script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
`,C=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      labelWidth: "80px",
      labelPosition: "top",
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
  ],
});
<\/script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
`,Z=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      rules: {
        name: [{ required: true, message: "姓名必填" }],
        age: [
          { required: true, message: "年龄必填" },
          { type: "number", message: "年龄必须是数字" },
        ],
      },
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "name",
        label: "姓名",
        required: true,
      },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "age",
        label: "年龄",
      },
      attrs: {
        placeholder: "请输入年龄",
      },
      modifiers: { number: true },
    },
  ],
});
<\/script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
`,B=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      inline: true,
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
  ],
});
<\/script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
`,W=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {},
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
  ],
});
<\/script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
`,q=JSON.parse('{"title":"表单域配置 FormAreaConfig","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/form-area.md","filePath":"guide/basics/form-area.md"}'),T={name:"guide/basics/form-area.md"},x=Object.assign(T,{setup(S){const u=h();r(async()=>{u.value=(await k(async()=>{const{default:t}=await import("./chunks/Size.DSznBNI2.js");return{default:t}},__vite__mapDeps([0,1]))).default});const g=h();r(async()=>{g.value=(await k(async()=>{const{default:t}=await import("./chunks/Label.DzA8MeyN.js");return{default:t}},__vite__mapDeps([2,1]))).default});const E=h();r(async()=>{E.value=(await k(async()=>{const{default:t}=await import("./chunks/FormRules.IidSQcMH.js");return{default:t}},__vite__mapDeps([3,1]))).default});const f=h();r(async()=>{f.value=(await k(async()=>{const{default:t}=await import("./chunks/InlineForm.B75g0Pzn.js");return{default:t}},__vite__mapDeps([4,1]))).default});const n=v(!0),F=h();return r(async()=>{F.value=(await k(async()=>{const{default:t}=await import("./chunks/DefaultBtn.CNzUcUTZ.js");return{default:t}},__vite__mapDeps([5,1]))).default}),(t,s)=>{const p=A("ClientOnly");return D(),b("div",null,[s[5]||(s[5]=l("",4)),o(a(i(m),null,null,512),[[d,n.value]]),a(p,null,{default:e(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:i(W)},c({_:2},[F.value?{name:"vue",fn:e(()=>[a(i(F))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[6]||(s[6]=l("",5)),o(a(i(m),null,null,512),[[d,n.value]]),a(p,null,{default:e(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[1]||(s[1]=()=>{n.value=!1}),vueCode:i(B)},c({_:2},[f.value?{name:"vue",fn:e(()=>[a(i(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[7]||(s[7]=l("",3)),o(a(i(m),null,null,512),[[d,n.value]]),a(p,null,{default:e(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[2]||(s[2]=()=>{n.value=!1}),vueCode:i(Z)},c({_:2},[E.value?{name:"vue",fn:e(()=>[a(i(E))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[8]||(s[8]=l("",4)),o(a(i(m),null,null,512),[[d,n.value]]),a(p,null,{default:e(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[3]||(s[3]=()=>{n.value=!1}),vueCode:i(C)},c({_:2},[g.value?{name:"vue",fn:e(()=>[a(i(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[9]||(s[9]=l("",2)),o(a(i(m),null,null,512),[[d,n.value]]),a(p,null,{default:e(()=>[a(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[4]||(s[4]=()=>{n.value=!1}),vueCode:i(_)},c({_:2},[u.value?{name:"vue",fn:e(()=>[a(i(u))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[10]||(s[10]=l("",2))])}}});export{q as __pageData,x as default};
