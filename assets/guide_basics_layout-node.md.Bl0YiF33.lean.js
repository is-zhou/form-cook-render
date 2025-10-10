const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/ChildNodeStyle.aDJnkoaW.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/ChildNodeText.uFFrdMln.js","assets/chunks/ChildNode.ZBqHIA-q.js"])))=>i.map(i=>d[i]);
import{D as h,v as d,aX as k,p as E,C,c as b,o as F,aY as g,ag as m,G as a,j as v,ah as c,k as e,w as i,ax as u,a as Z}from"./chunks/framework.Cu7FsKFC.js";import{L as y,N as f}from"./chunks/index.ZrIwg8oB.js";const _=`<script setup lang="ts">
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
      id: "4",
      componentName: "FormItem",
      componentType: "layout",
      attrs: {
        label: "活动时间",
        style: "border: 2px solid #b383b8;",
      },
      children: [
        {
          id: "",
          componentName: "DatePicker",
          componentType: "form",
          formItemAttrs: { field: "date1" },
          attrs: {
            placeholder: "请选择日期",
          },
          defaultValue: "",
        },
        {
          id: "",
          componentName: "TimePicker",
          componentType: "form",
          formItemAttrs: { field: "date2" },
          attrs: {
            placeholder: "请选择时间",
          },
          defaultValue: "",
        },
      ],
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
    attrs: {
      labelWidth: "80px",
    },
  },
  formContentConfigList: [
    {
      id: "5",
      componentName: "div",
      componentType: "layout",
      attrs: {
        style: "color:red;padding:28px 80px;",
      },
      children: ["我是嵌套在布局容器里的文本子节点"],
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
`,A=`<script setup lang="ts">
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
      id: "4",
      componentName: "FormItem",
      componentType: "layout",
      attrs: {
        label: "活动时间",
      },
      children: [
        {
          id: "",
          componentName: "DatePicker",
          componentType: "form",
          formItemAttrs: { field: "date1" },
          attrs: {
            placeholder: "请选择日期",
          },
          defaultValue: "",
        },
        {
          id: "",
          componentName: "TimePicker",
          componentType: "form",
          formItemAttrs: { field: "date2" },
          attrs: {
            placeholder: "请选择时间",
          },
          defaultValue: "",
        },
      ],
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
`,V=JSON.parse('{"title":"布局节点配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/layout-node.md","filePath":"guide/basics/layout-node.md"}'),B={name:"guide/basics/layout-node.md"},G=Object.assign(B,{setup(T){const l=h();d(async()=>{l.value=(await k(async()=>{const{default:t}=await import("./chunks/ChildNodeStyle.aDJnkoaW.js");return{default:t}},__vite__mapDeps([0,1]))).default});const o=h();d(async()=>{o.value=(await k(async()=>{const{default:t}=await import("./chunks/ChildNodeText.uFFrdMln.js");return{default:t}},__vite__mapDeps([2,1]))).default});const n=E(!0),r=h();return d(async()=>{r.value=(await k(async()=>{const{default:t}=await import("./chunks/ChildNode.ZBqHIA-q.js");return{default:t}},__vite__mapDeps([3,1]))).default}),(t,s)=>{const p=C("ClientOnly");return F(),b("div",null,[s[3]||(s[3]=g("",3)),m(a(e(y),null,null,512),[[c,n.value]]),a(p,null,{default:i(()=>[a(e(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),vueCode:e(A)},u({_:2},[r.value?{name:"vue",fn:i(()=>[a(e(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=v("h2",{id:"子节点文本配置",tabindex:"-1"},[Z("子节点文本配置 "),v("a",{class:"header-anchor",href:"#子节点文本配置","aria-label":'Permalink to "子节点文本配置"'},"​")],-1)),m(a(e(y),null,null,512),[[c,n.value]]),a(p,null,{default:i(()=>[a(e(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[1]||(s[1]=()=>{n.value=!1}),vueCode:e(D)},u({_:2},[o.value?{name:"vue",fn:i(()=>[a(e(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=g("",3)),m(a(e(y),null,null,512),[[c,n.value]]),a(p,null,{default:i(()=>[a(e(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[2]||(s[2]=()=>{n.value=!1}),vueCode:e(_)},u({_:2},[l.value?{name:"vue",fn:i(()=>[a(e(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{V as __pageData,G as default};
