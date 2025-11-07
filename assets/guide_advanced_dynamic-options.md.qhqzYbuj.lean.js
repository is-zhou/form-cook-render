const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Fn.DXZRY1vE.js","assets/chunks/framework.C7m0Jmdh.js"])))=>i.map(i=>d[i]);
import{p as r,D as E,v as d,aX as g,C as o,c,o as y,j as i,ag as m,G as a,aY as u,a as p,ah as b,k as n,w as h,aw as F}from"./chunks/framework.C7m0Jmdh.js";import{L as C,N as f}from"./chunks/index.DrcMiTYW.js";const v=`<script setup lang="ts">
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
      id: "2",
      componentName: "Select",
      componentType: "form",
      formItemAttrs: { field: "region", label: "所在地区" },
      slots: {
        default: {
          componentName: "Option",
          options: [
            {
              label: "上海",
              value: "shanghai",
            },
            {
              label: "北京",
              value: "beijing",
            },
          ],
        },
      },
      attrs: {
        placeholder: "请选择地区",
      },
      defaultValue: "shanghai",
    },
    {
      id: "3",
      componentName: "SelectV2",
      componentType: "form",
      formItemAttrs: { field: "count", label: "活动次数" },
      attrs: {
        placeholder: "请选择次数",
        options: (params) =>
          new Promise((res) => {
            setTimeout(() => {
              const list = [
                {
                  label: "1次",
                  value: "1",
                },
                {
                  label: "2次",
                  value: "2",
                },
              ];
              res([list, ["activity.name"]]);
            }, 1000);
          }),
      },
      defaultValue: "2",
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
`,T=JSON.parse('{"title":"options","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/dynamic-options.md","filePath":"guide/advanced/dynamic-options.md"}'),B={name:"guide/advanced/dynamic-options.md"},W=Object.assign(B,{setup(_){const e=r(!0),l=E();return d(async()=>{l.value=(await g(async()=>{const{default:t}=await import("./chunks/Fn.DXZRY1vE.js");return{default:t}},__vite__mapDeps([0,1]))).default}),(t,s)=>{const k=o("ClientOnly");return y(),c("div",null,[s[1]||(s[1]=i("h1",{id:"options",tabindex:"-1"},[p("options "),i("a",{class:"header-anchor",href:"#options","aria-label":'Permalink to "options"'},"​")],-1)),s[2]||(s[2]=i("h2",{id:"动态函数",tabindex:"-1"},[p("动态函数 "),i("a",{class:"header-anchor",href:"#动态函数","aria-label":'Permalink to "动态函数"'},"​")],-1)),m(a(n(C),null,null,512),[[b,e.value]]),a(k,null,{default:h(()=>[a(n(f),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(v)},F({_:2},[l.value?{name:"vue",fn:h(()=>[a(n(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[3]||(s[3]=u("",3))])}}});export{T as __pageData,W as default};
