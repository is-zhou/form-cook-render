<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { FormSchema } from "./types/schema";
import { ElForm, ElButton, ElFormItem, ElSkeleton } from "element-plus";
import { useRenderNode } from "./core/useRenderNode";

interface FormRenderExpose {
  validate: () => Promise<boolean | undefined>;
  submit: () => Promise<FormData>;
  resetFields: () => void;
}
type FormData = Record<string, unknown>;

const formData = defineModel<FormData>({ default: () => ({}) });
const formSchema = defineModel<FormSchema>("formSchema", {
  default: () => ({}),
});

const emits = defineEmits<{
  (e: "submit", formData: FormData): void;
  (e: "reset"): void;
}>();

const { renderNode } = useRenderNode(formData);

const formRef = ref<FormInstance>();

const validate = async () => {
  if (!formRef.value) return;
  return await formRef.value.validate();
};

const submit = async () => {
  await validate();
  return formData.value;
};

const resetFields = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
};

const submitForm = async () => {
  console.log(formData.value);

  await validate();
  emits("submit", formData.value);
};

const resetForm = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
  emits("reset");
};

defineExpose<FormRenderExpose>({ validate, submit, resetFields });
</script>
<template>
  <el-form
    ref="formRef"
    :model="formData"
    v-bind="formSchema.formAreaConfig.attrs"
  >
    <component
      v-for="config in formSchema.formContentConfigList"
      :is="renderNode(config)"
      :key="config.id"
    />

    <el-form-item>
      <el-button type="primary" @click="submitForm()"> Create </el-button>
      <el-button @click="resetForm()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
