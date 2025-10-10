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
      id: "4",
      componentName: "FormItem",
      componentType: "layout",
      attrs: {
        label: "活动时间",
        style: "border: 2px solid #b383b8;",
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
