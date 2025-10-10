const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Size.Cg1hk4p7.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/RequiredRules.DWBRZNwS.js","assets/chunks/FieldLabel.CqCrFaNC.js"])))=>i.map(i=>d[i]);
import{D as o,v as k,aX as d,p as E,C as A,c as F,o as v,aY as m,ag as c,G as a,ah as u,k as n,w as t,ax as y}from"./chunks/framework.Cu7FsKFC.js";import{L as f,N as g}from"./chunks/index.ZrIwg8oB.js";const b=`<script setup lang="ts">
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
`,I=JSON.parse('{"title":"表单项配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/form-item.md","filePath":"guide/basics/form-item.md"}'),C={name:"guide/basics/form-item.md"},T=Object.assign(C,{setup(B){const l=o();k(async()=>{l.value=(await d(async()=>{const{default:e}=await import("./chunks/Size.Cg1hk4p7.js");return{default:e}},__vite__mapDeps([0,1]))).default});const p=o();k(async()=>{p.value=(await d(async()=>{const{default:e}=await import("./chunks/RequiredRules.DWBRZNwS.js");return{default:e}},__vite__mapDeps([2,1]))).default});const i=E(!0),r=o();return k(async()=>{r.value=(await d(async()=>{const{default:e}=await import("./chunks/FieldLabel.CqCrFaNC.js");return{default:e}},__vite__mapDeps([3,1]))).default}),(e,s)=>{const h=A("ClientOnly");return v(),F("div",null,[s[3]||(s[3]=m(`<h1 id="表单项配置" tabindex="-1">表单项配置 <a class="header-anchor" href="#表单项配置" aria-label="Permalink to &quot;表单项配置&quot;">​</a></h1><h2 id="字段和标签配置" tabindex="-1">字段和标签配置 <a class="header-anchor" href="#字段和标签配置" aria-label="Permalink to &quot;字段和标签配置&quot;">​</a></h2><ul><li>字段 <code>formItemAttrs.field</code></li><li>标签文本 <code>formItemAttrs.label</code></li><li>标签长度 <code>formItemAttrs.labelWidth</code></li><li>标签位置 <code>formItemAttrs.labelPosition</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormCompConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  formItemAttrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //字段</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    field</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //标签</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //标签位置</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    labelPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;top&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //标签长度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    labelWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{i.value=!1}),vueCode:n(D)},y({_:2},[r.value?{name:"vue",fn:t(()=>[a(n(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=m(`<h2 id="必填和校验规则" tabindex="-1">必填和校验规则 <a class="header-anchor" href="#必填和校验规则" aria-label="Permalink to &quot;必填和校验规则&quot;">​</a></h2><ul><li>必填 <code>formItemAttrs.required </code></li><li>校验规则 <code>formItemAttrs.rules</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormCompConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  formItemAttrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //必填</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //校验规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    rules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormRules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[1]||(s[1]=()=>{i.value=!1}),vueCode:n(_)},y({_:2},[p.value?{name:"vue",fn:t(()=>[a(n(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=m(`<h2 id="表单项组件大小" tabindex="-1">表单项组件大小 <a class="header-anchor" href="#表单项组件大小" aria-label="Permalink to &quot;表单项组件大小&quot;">​</a></h2><ul><li>必填 <code>formItemAttrs.size</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormCompConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  formItemAttrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //表单项组件大小</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;large&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;small&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3)),c(a(n(f),null,null,512),[[u,i.value]]),a(h,null,{default:t(()=>[a(n(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[2]||(s[2]=()=>{i.value=!1}),vueCode:n(b)},y({_:2},[l.value?{name:"vue",fn:t(()=>[a(n(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{I as __pageData,T as default};
