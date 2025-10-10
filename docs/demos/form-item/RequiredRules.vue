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
</script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
