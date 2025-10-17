const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Size.D76HR0vY.js","assets/chunks/framework.BXItUoLk.js","assets/chunks/RequiredRules.BKGVIcc4.js","assets/chunks/FieldLabel.BB1ac0kK.js"])))=>i.map(i=>d[i]);
import{D as o,v as k,aX as d,p as E,C as A,c as F,o as v,aY as m,ag as c,G as a,ah as u,k as n,w as t,aw as y}from"./chunks/framework.BXItUoLk.js";import{L as f,N as g}from"./chunks/index.M91En7i0.js";const b=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      labelWidth: "80px",
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "name",
        label: "大",
        size: "large",
      },
      attrs: {},
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "age",
        label: "默认大小",
        size: "default",
      },
      attrs: {},
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "desc",
        label: "小",
        size: "small",
      },
      attrs: {},
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
`,_=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      labelWidth: "80px",
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
        rules: [
          { required: true, message: "年龄必填" },
          { type: "number", message: "年龄必须是数字" },
        ],
      },
      attrs: {
        placeholder: "请输入年龄",
      },
      modifiers: { number: true },
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "desc",
        label: "活动形式",
        rules: [
          {
            required: true,
            message: "请输入活动形式",
            trigger: "blur",
          },
        ],
      },
      attrs: {
        placeholder: "请输入活动形式",
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
`,D=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "name",
        label: "姓名",
        labelWidth: "80px",
        labelPosition: "top",
      },
      attrs: {
        placeholder: "请输入姓名",
      },
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "desc", label: "活动形式" },
      attrs: {
        placeholder: "请输入活动形式",
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
`,I=JSON.parse('{"title":"表单项配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/form-item.md","filePath":"guide/basics/form-item.md"}'),C={name:"guide/basics/form-item.md"},T=Object.assign(C,{setup(B){const l=o();k(async()=>{l.value=(await d(async()=>{const{default:e}=await import("./chunks/Size.D76HR0vY.js");return{default:e}},__vite__mapDeps([0,1]))).default});const p=o();k(async()=>{p.value=(await d(async()=>{const{default:e}=await import("./chunks/RequiredRules.BKGVIcc4.js");return{default:e}},__vite__mapDeps([2,1]))).default});const i=E(!0),r=o();return k(async()=>{r.value=(await d(async()=>{const{default:e}=await import("./chunks/FieldLabel.BB1ac0kK.js");return{default:e}},__vite__mapDeps([3,1]))).default}),(e,s)=>{const h=A("ClientOnly");return v(),F("div",null,[s[3]||(s[3]=m("",4)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{i.value=!1}),vueCode:n(D)},y({_:2},[r.value?{name:"vue",fn:t(()=>[a(n(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=m("",3)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[1]||(s[1]=()=>{i.value=!1}),vueCode:n(_)},y({_:2},[p.value?{name:"vue",fn:t(()=>[a(n(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=m("",3)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[2]||(s[2]=()=>{i.value=!1}),vueCode:n(b)},y({_:2},[l.value?{name:"vue",fn:t(()=>[a(n(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{I as __pageData,T as default};
