<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { getComponent } from "./core/registry";
import { TComponentConfig, TFormSchema } from "./types/schema";
import { VNode } from "vue";

type FormData = Record<string, any>;

const formData = defineModel<FormData>({ default: () => ({}) });
const formSchema = defineModel<TFormSchema>("formSchema", {
  default: () => ({}),
});

const emits = defineEmits<{
  (e: "submit", formData: FormData): void;
  (e: "reset"): void;
}>();

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
  await validate();
  emits("submit", formData.value);
};

const resetForm = () => {
  if (!formRef.value) return;
  formRef.value.resetFields();
  emits("reset");
};

defineExpose({ validate, submit, resetFields });

const renderNode = (node: TComponentConfig) => {
  const comp = getComponent(node.componentName);

  if (!comp) {
    return;
  }

  if (node.componentType === "layout") {
    return h(comp, node.attrs, {
      default: () => node.children?.map(renderNode),
    });
  }

  return h(
    ElFormItem,
    { prop: node.field, ...node.formItemAttrs },
    {
      default: () =>
        h(comp, {
          ...node.attrs,
          modelValue: formData.value[node.field],
          "onUpdate:modelValue": (v) => (formData.value[node.field] = v),
        }),
    }
  );
};
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
