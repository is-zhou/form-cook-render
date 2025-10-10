const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/CreateForm.D1I1WLDd.js","assets/chunks/framework.Cd6hzTNw.js"])))=>i.map(i=>d[i]);
import{p as E,D as e,v as r,aX as d,C as o,c as y,o as g,aW as p,ag as F,G as i,ah as c,k as a,w as h,ax as u}from"./chunks/framework.Cd6hzTNw.js";import{L as m,N as q}from"./chunks/index.BpdcUPsw.js";const C=`<script setup lang="ts">
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
      defaultValue: [],
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
      defaultValue: "",
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
      defaultValue: "",
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
`,v=JSON.parse('{"title":"快速渲染一个表单","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basics/create-form.md","filePath":"guide/basics/create-form.md"}'),f={name:"guide/basics/create-form.md"},D=Object.assign(f,{setup(B){const l=E(!0),n=e();return r(async()=>{n.value=(await d(async()=>{const{default:t}=await import("./chunks/CreateForm.D1I1WLDd.js");return{default:t}},__vite__mapDeps([0,1]))).default}),(t,s)=>{const k=o("ClientOnly");return g(),y("div",null,[s[1]||(s[1]=p("",5)),F(i(a(m),null,null,512),[[c,l.value]]),i(k,null,{default:h(()=>[i(a(q),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(C)},u({_:2},[n.value?{name:"vue",fn:h(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=p("",3))])}}});export{v as __pageData,D as default};
