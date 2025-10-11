<script setup lang="ts">
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
</script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
