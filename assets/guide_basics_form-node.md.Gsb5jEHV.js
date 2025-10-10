const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Visible.CfrOZ268.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/DefaultValue.DdySZiXc.js"])))=>i.map(i=>d[i]);
import{D as r,v as h,aX as d,p as g,C as b,c as v,o as E,aY as k,ag as m,G as a,ah as c,k as s,w as i,ax as u}from"./chunks/framework.Cu7FsKFC.js";import{L as f,N as y}from"./chunks/index.ZrIwg8oB.js";const F=`<script setup lang="ts">
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
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
      defaultValue: "齐天大圣",
      visible: false,
    },
    {
      id: "5",
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {
        disabled: true,
      },
      defaultValue: true,
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "desc", label: "活动形式" },
      attrs: {
        type: "textarea",
        placeholder: "请输入活动形式",
        readonly: true,
      },
      defaultValue: "活动形式是只读的...",
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
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
      defaultValue: "齐天大圣",
    },
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
        options: [
          {
            label: "1次",
            value: "1",
          },
          {
            label: "2次",
            value: "2",
          },
        ],
      },
      defaultValue: "2",
    },
    {
      id: "5",
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: true,
    },
    {
      id: "6",
      componentName: "Segmented",
      componentType: "form",
      formItemAttrs: { field: "location", label: "活动地点" },
      attrs: {
        options: ["家里", "公司", "学校"],
      },
      defaultValue: "学校",
    },
    {
      id: "7",
      componentName: "CheckboxGroup",
      componentType: "form",
      formItemAttrs: { field: "type", label: "活动类型" },
      attrs: {},
      slots: {
        default: {
          componentName: "Checkbox",
          options: [
            {
              value: "促销活动",
              name: "type",
              label: "促销活动",
            },
            {
              value: "线下活动",
              name: "type",
              label: "线下活动",
            },
          ],
        },
      },
      defaultValue: ["促销活动"],
    },
    {
      id: "8",
      componentName: "RadioGroup",
      componentType: "form",
      formItemAttrs: { field: "resource", label: "资源类型" },
      attrs: {},
      slots: {
        default: {
          componentName: "Radio",
          options: [
            {
              value: "赞助",
              label: "赞助",
            },
            {
              value: "场地",
              label: "场地",
            },
          ],
        },
      },
      defaultValue: "场地",
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "desc", label: "活动形式" },
      attrs: {
        type: "textarea",
        placeholder: "请输入活动形式",
      },
      defaultValue: "活动形式是...",
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
`,Z=JSON.parse('{"title":"表单节点配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/form-node.md","filePath":"guide/basics/form-node.md"}'),_={name:"guide/basics/form-node.md"},V=Object.assign(_,{setup(C){const l=r();h(async()=>{l.value=(await d(async()=>{const{default:t}=await import("./chunks/Visible.CfrOZ268.js");return{default:t}},__vite__mapDeps([0,1]))).default});const e=g(!0),o=r();return h(async()=>{o.value=(await d(async()=>{const{default:t}=await import("./chunks/DefaultValue.DdySZiXc.js");return{default:t}},__vite__mapDeps([2,1]))).default}),(t,n)=>{const p=b("ClientOnly");return E(),v("div",null,[n[2]||(n[2]=k(`<h1 id="表单节点配置" tabindex="-1">表单节点配置 <a class="header-anchor" href="#表单节点配置" aria-label="Permalink to &quot;表单节点配置&quot;">​</a></h1><h2 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormCompConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //默认值</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  defaultValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3)),m(a(s(f),null,null,512),[[c,e.value]]),a(p,null,{default:i(()=>[a(s(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),vueCode:s(A)},u({_:2},[o.value?{name:"vue",fn:i(()=>[a(s(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),n[3]||(n[3]=k(`<h2 id="可见、禁用、只读" tabindex="-1">可见、禁用、只读 <a class="header-anchor" href="#可见、禁用、只读" aria-label="Permalink to &quot;可见、禁用、只读&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormCompConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //组件属性</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //禁用配置</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    disabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DynamicProp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //只读配置</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    readonly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DynamicProp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  visible</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DynamicProp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),m(a(s(f),null,null,512),[[c,e.value]]),a(p,null,{default:i(()=>[a(s(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:n[1]||(n[1]=()=>{e.value=!1}),vueCode:s(F)},u({_:2},[l.value?{name:"vue",fn:i(()=>[a(s(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{Z as __pageData,V as default};
