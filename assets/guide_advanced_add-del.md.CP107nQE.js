const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/AddDel.BmeangQm.js","assets/chunks/framework.Cu7FsKFC.js","assets/chunks/Base.C5epYYLk.js"])))=>i.map(i=>d[i]);
import{D as i,v as c,aX as m,p as _,C as v,c as b,o as Z,aY as u,ag as y,G as e,j as g,ah as f,k as n,w as d,ax as h,a as D}from"./chunks/framework.Cu7FsKFC.js";import{L as p,N as x}from"./chunks/index.ZrIwg8oB.js";const T=`<script setup lang="ts">
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
`,B=JSON.parse('{"title":"添加/删除表单项","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/add-del.md","filePath":"guide/advanced/add-del.md"}'),C={name:"guide/advanced/add-del.md"},S=Object.assign(C,{setup(k){const l=i();c(async()=>{l.value=(await m(async()=>{const{default:r}=await import("./chunks/AddDel.BmeangQm.js");return{default:r}},__vite__mapDeps([0,1]))).default});const a=_(!0),o=i();return c(async()=>{o.value=(await m(async()=>{const{default:r}=await import("./chunks/Base.C5epYYLk.js");return{default:r}},__vite__mapDeps([2,1]))).default}),(r,t)=>{const s=v("ClientOnly");return Z(),b("div",null,[t[2]||(t[2]=u('<h1 id="添加-删除表单项" tabindex="-1">添加/删除表单项 <a class="header-anchor" href="#添加-删除表单项" aria-label="Permalink to &quot;添加/删除表单项&quot;">​</a></h1><p>通过内置组件 <code>ArrayContainer</code> 来快速实现动态的添加删除表单项</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>组件必须配置 <code>arrayKeyPath</code> 字段，该字段是 formData 到动态数组的路径，配置该字段后 <code>ArrayContainer</code> 组件的子组件为表单的字段直接配置为数组项的字段即可，组件会自动生成数组关系。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',4)),y(e(n(p),null,null,512),[[f,a.value]]),e(s,null,{default:d(()=>[e(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(A)},h({_:2},[o.value?{name:"vue",fn:d(()=>[e(n(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=g("h2",{id:"进阶用法",tabindex:"-1"},[D("进阶用法 "),g("a",{class:"header-anchor",href:"#进阶用法","aria-label":'Permalink to "进阶用法"'},"​")],-1)),y(e(n(p),null,null,512),[[f,a.value]]),e(s,null,{default:d(()=>[e(n(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(T)},h({_:2},[l.value?{name:"vue",fn:d(()=>[e(n(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=u('<h2 id="组件属性" tabindex="-1">组件属性 <a class="header-anchor" href="#组件属性" aria-label="Permalink to &quot;组件属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性名</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>arrayKeyPath</td><td style="text-align:center;">数组路径</td><td style="text-align:center;"><code>string</code></td><td style="text-align:right;"></td></tr><tr><td>children</td><td style="text-align:center;">子项渲染协议数组（子组件）</td><td style="text-align:center;"><code>ComponentConfig[]</code></td><td style="text-align:right;"></td></tr><tr><td>max</td><td style="text-align:center;">最大表单项数量</td><td style="text-align:center;"><code>number</code></td><td style="text-align:right;">1000</td></tr><tr><td>min</td><td style="text-align:center;">最小表单项数量</td><td style="text-align:center;"><code>number</code></td><td style="text-align:right;">0</td></tr><tr><td>limitButtonDisplay</td><td style="text-align:center;">达到最大或最小表单数量时不显示按钮</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:right;"></td></tr><tr><td>removeText</td><td style="text-align:center;">自定义删除按钮文本</td><td style="text-align:center;"><code>string</code></td><td style="text-align:right;"></td></tr><tr><td>addText</td><td style="text-align:center;">自定义新增按钮文本</td><td style="text-align:center;"><code>string</code></td><td style="text-align:right;"></td></tr><tr><td>isSetDefaultValue</td><td style="text-align:center;">新增时是否初始化默认值</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:right;"></td></tr><tr><td>limitButtonDisplay</td><td style="text-align:center;">达到最大或最小表单数量时不显示按钮</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:right;"></td></tr><tr><td>style_container</td><td style="text-align:center;">自定义最外层容器样式</td><td style="text-align:center;"><code>string</code> <code>Record&lt;string, string&gt;</code></td><td style="text-align:right;"></td></tr><tr><td>style_item_wrap</td><td style="text-align:center;">自定义项容器样式</td><td style="text-align:center;"><code>string</code> <code>Record&lt;string, string&gt;</code></td><td style="text-align:right;"></td></tr><tr><td>style_item_content</td><td style="text-align:center;">自定义动态项容器样式</td><td style="text-align:center;"><code>string</code> <code>Record&lt;string, string&gt;</code></td><td style="text-align:right;"></td></tr><tr><td>style_btnAdd_container</td><td style="text-align:center;">自定义新增按钮容器样式</td><td style="text-align:center;"><code>string</code> <code>Record&lt;string, string&gt;</code></td><td style="text-align:right;"></td></tr><tr><td>style_btnDel_container</td><td style="text-align:center;">自定义删除按钮容器样式</td><td style="text-align:center;"><code>string</code> <code>Record&lt;string, string&gt;</code></td><td style="text-align:right;"></td></tr></tbody></table>',2))])}}});export{B as __pageData,S as default};
