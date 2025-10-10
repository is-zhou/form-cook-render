const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Config.BqcINC7r.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/Readonly.D7PtAzaU.js","assets/chunks/Disabled.Clz-4Ba7.js","assets/chunks/Visible.Bz0ZHwDG.js"])))=>i.map(i=>d[i]);
import{D as d,v as m,aX as p,p as _,C as W,c as Z,o as C,j as a,aY as g,a as s,ag as u,G as n,ah as h,k as t,w as r,ax as c}from"./chunks/framework.Cu7FsKFC.js";import{L as f,N as k}from"./chunks/index.ZrIwg8oB.js";const D=`<script setup lang="ts">
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
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: false,
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
      defaultValue: "齐天大圣",
      visible: (prams) => {
        if (prams.formData.delivery === true) {
          prams.schemaItem.formItemAttrs.label = "配送员";
        } else {
          prams.schemaItem.formItemAttrs.label = "姓名";
        }
        return true;
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
      id: "1",
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: false,
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
        readonly: (prams) => {
          return !prams.formData.delivery === true;
        },
      },
      defaultValue: "齐天大圣",
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
`,T=`<script setup lang="ts">
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
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: false,
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
        disabled: (prams) => {
          return !prams.formData.delivery === true;
        },
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
`,V=`<script setup lang="ts">
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
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: true,
    },
    {
      id: "2",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
      defaultValue: "齐天大圣",
      visible: (prams) => {
        return prams.formData.delivery === true;
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
`,F=JSON.parse('{"title":"组件联动","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/dynamic.md","filePath":"guide/advanced/dynamic.md"}'),B={name:"guide/advanced/dynamic.md"},L=Object.assign(B,{setup(I){const y=d();m(async()=>{y.value=(await p(async()=>{const{default:i}=await import("./chunks/Config.BqcINC7r.js");return{default:i}},__vite__mapDeps([0,1]))).default});const v=d();m(async()=>{v.value=(await p(async()=>{const{default:i}=await import("./chunks/Readonly.D7PtAzaU.js");return{default:i}},__vite__mapDeps([2,1]))).default});const E=d();m(async()=>{E.value=(await p(async()=>{const{default:i}=await import("./chunks/Disabled.Clz-4Ba7.js");return{default:i}},__vite__mapDeps([3,1]))).default});const l=_(!0),b=d();return m(async()=>{b.value=(await p(async()=>{const{default:i}=await import("./chunks/Visible.Bz0ZHwDG.js");return{default:i}},__vite__mapDeps([4,1]))).default}),(i,e)=>{const o=W("ClientOnly");return C(),Z("div",null,[e[11]||(e[11]=a("h1",{id:"组件联动",tabindex:"-1"},[s("组件联动 "),a("a",{class:"header-anchor",href:"#组件联动","aria-label":'Permalink to "组件联动"'},"​")],-1)),e[12]||(e[12]=a("h2",{id:"显示隐藏联动-visible",tabindex:"-1"},[s("显示隐藏联动 visible "),a("a",{class:"header-anchor",href:"#显示隐藏联动-visible","aria-label":'Permalink to "显示隐藏联动 visible"'},"​")],-1)),e[13]||(e[13]=a("p",null,[s("表单组件和布局组件都可通过 "),a("code",null,"visible"),s(" 和数据进行动态控制"),a("code",null,"显示隐藏")],-1)),a("ul",null,[a("li",null,[e[4]||(e[4]=s("开启即时配送才需要输入姓名",-1)),u(n(t(f),null,null,512),[[h,l.value]]),n(o,null,{default:r(()=>[n(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(V)},c({_:2},[b.value?{name:"vue",fn:r(()=>[n(t(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])]),e[14]||(e[14]=g(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">visible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  formData: Record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string, any&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schemaItem: ComponentConfig;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params.formData.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="表单禁用联动-disabled" tabindex="-1">表单禁用联动 disabled <a class="header-anchor" href="#表单禁用联动-disabled" aria-label="Permalink to &quot;表单禁用联动 disabled&quot;">​</a></h2>`,2)),a("ul",null,[a("li",null,[e[5]||(e[5]=s("开启即时配送才可以输入姓名",-1)),u(n(t(f),null,null,512),[[h,l.value]]),n(o,null,{default:r(()=>[n(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:t(T)},c({_:2},[E.value?{name:"vue",fn:r(()=>[n(t(E))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])]),e[15]||(e[15]=g(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  formData: Record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string, any&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schemaItem: ComponentConfig;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params.formData.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="表单只读联动-readonly" tabindex="-1">表单只读联动 readonly <a class="header-anchor" href="#表单只读联动-readonly" aria-label="Permalink to &quot;表单只读联动 readonly&quot;">​</a></h2>`,2)),a("ul",null,[a("li",null,[e[6]||(e[6]=s("开启即时配送才可以修改姓名",-1)),u(n(t(f),null,null,512),[[h,l.value]]),n(o,null,{default:r(()=>[n(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:t(A)},c({_:2},[v.value?{name:"vue",fn:r(()=>[n(t(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])]),e[16]||(e[16]=g(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  formData: Record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string, any&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  schemaItem: ComponentConfig;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params.formData.count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="表单配置联动" tabindex="-1">表单配置联动 <a class="header-anchor" href="#表单配置联动" aria-label="Permalink to &quot;表单配置联动&quot;">​</a></h2>`,2)),a("ul",null,[a("li",null,[e[7]||(e[7]=s("开启即时配送第二项 ",-1)),e[8]||(e[8]=a("strong",null,"姓名",-1)),e[9]||(e[9]=s(" 修改为 ",-1)),e[10]||(e[10]=a("strong",null,"配送员",-1)),u(n(t(f),null,null,512),[[h,l.value]]),n(o,null,{default:r(()=>[n(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:t(D)},c({_:2},[y.value?{name:"vue",fn:r(()=>[n(t(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])])])}}});export{F as __pageData,L as default};
