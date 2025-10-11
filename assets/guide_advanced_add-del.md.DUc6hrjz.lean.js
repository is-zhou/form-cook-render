const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/AddDel.BvQckrsg.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/Base.C5epYYLk.js"])))=>i.map(i=>d[i]);
import{D as i,v as c,aX as m,p as x,C as v,c as b,o as Z,aY as u,ag as y,G as e,j as g,ah as f,k as n,w as d,ax as h,a as D}from"./chunks/framework.Cu7FsKFC.js";import{L as p,N as _}from"./chunks/index.ZrIwg8oB.js";const T=`<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";

const formData = ref({
  arrayDesc: [
    { content: "活动是以室外的形式开展的...", num: 10 },
    { content: "户外拓展游戏...", num: 8 },
  ],
});
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
      id: "arrayDesc",
      componentName: "ArrayContainer",
      componentType: "layout",
      attrs: {
        addText: "新增活动项",
        removeText: "删除",
        min: 1,
        max: 3,
        arrayKeyPath: "arrayDesc",
        isSetDefaultValue: false,
        limitButtonDisplay: true,
      },
      children: [
        {
          id: "content",
          componentName: "Input",
          componentType: "form",
          formItemAttrs: {
            field: "content",
            label: "活动形式",
            rules: [
              { required: true, message: "请输入活动形式", trigger: "blur" },
            ],
          },
          attrs: { type: "textarea", placeholder: "请输入活动形式" },
          defaultValue: "活动形式是...",
        },
        {
          id: "num",
          componentName: "InputNumber",
          componentType: "form",
          formItemAttrs: {
            field: "num",
            label: "人数",
          },
          attrs: { type: "textarea", placeholder: "请输入人数" },
          defaultValue: 0,
        },
      ],
      slots: {},
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
      id: "arrayDesc",
      componentName: "ArrayContainer",
      componentType: "layout",
      attrs: {
        arrayKeyPath: "arrayDesc",
      },
      children: [
        {
          id: "content",
          componentName: "Input",
          componentType: "form",
          formItemAttrs: {
            field: "content",
            label: "活动形式",
          },
          attrs: { type: "textarea", placeholder: "请输入活动形式" },
          defaultValue: "活动形式是...",
        },
        {
          id: "num",
          componentName: "InputNumber",
          componentType: "form",
          formItemAttrs: {
            field: "num",
            label: "人数",
          },
          attrs: { type: "textarea", placeholder: "请输入人数" },
          defaultValue: 0,
        },
      ],
      slots: {},
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
`,S=JSON.parse('{"title":"添加/删除表单项","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/add-del.md","filePath":"guide/advanced/add-del.md"}'),C={name:"guide/advanced/add-del.md"},B=Object.assign(C,{setup(k){const l=i();c(async()=>{l.value=(await m(async()=>{const{default:r}=await import("./chunks/AddDel.BvQckrsg.js");return{default:r}},__vite__mapDeps([0,1]))).default});const a=x(!0),o=i();return c(async()=>{o.value=(await m(async()=>{const{default:r}=await import("./chunks/Base.C5epYYLk.js");return{default:r}},__vite__mapDeps([2,1]))).default}),(r,t)=>{const s=v("ClientOnly");return Z(),b("div",null,[t[2]||(t[2]=u("",4)),y(e(n(p),null,null,512),[[f,a.value]]),e(s,null,{default:d(()=>[e(n(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(A)},h({_:2},[o.value?{name:"vue",fn:d(()=>[e(n(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=g("h2",{id:"进阶用法",tabindex:"-1"},[D("进阶用法 "),g("a",{class:"header-anchor",href:"#进阶用法","aria-label":'Permalink to "进阶用法"'},"​")],-1)),y(e(n(p),null,null,512),[[f,a.value]]),e(s,null,{default:d(()=>[e(n(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(T)},h({_:2},[l.value?{name:"vue",fn:d(()=>[e(n(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=u("",2))])}}});export{S as __pageData,B as default};
