<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ComponentConfig, FormSchema } from "./types/schema";
import RenderFormNode from "./components/RenderFormNode.vue";
import { setDefaultValues } from "./utils";
import reloadMap from "./utils/reloadMap";
import { cloneDeep } from "lodash-es";

interface FormRenderExpose {
  validate: () => Promise<boolean | undefined>;
  submit: () => Promise<FormData>;
  resetFields: () => void;
}
type FormData = Record<string, unknown>;

const formData = defineModel<FormData>({ required: true });
const formSchema = defineModel<FormSchema>("formSchema", {
  default: () => ({}),
});

const formContentConfigList = ref<ComponentConfig[]>([]);

watch(
  () => formSchema.value,
  async () => {
    if (!formSchema.value.formContentConfigList) return;

    Object.assign(
      formData.value,
      setDefaultValues(formData.value, formSchema.value.formContentConfigList)
    );

    await nextTick();

    formContentConfigList.value = formSchema.value.formContentConfigList;
  },
  { immediate: true }
);

watch(
  () => cloneDeep(formData.value),
  async (newData, oldData) => {
    await nextTick();
    reloadMap.triggerUpdate(newData, oldData);
  },
  { deep: true }
);
onBeforeUnmount(() => {
  reloadMap.clearAll();
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
    v-if="formContentConfigList.length"
    ref="formRef"
    :model="formData"
    v-bind="formSchema.formAreaConfig.attrs"
  >
    <RenderFormNode
      v-model:config-list="formContentConfigList"
      v-model:form-data="formData"
    ></RenderFormNode>

    <el-form-item>
      <el-button type="primary" @click="submitForm()"> Create </el-button>
      <el-button @click="resetForm()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
