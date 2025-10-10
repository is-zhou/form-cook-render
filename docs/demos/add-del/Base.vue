<script setup lang="ts">
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
</script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
