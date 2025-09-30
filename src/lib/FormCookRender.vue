<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ComponentConfig, FormSchema } from "./types/schema";
import RenderFormNode from "./components/RenderFormNode.vue";
import { setDefaultValues } from "./utils";
import reloadMap from "./utils/reloadMap";
import { cloneDeep } from "lodash-es";
import { setGlobalFn } from "./utils/globalFunctions";

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

setGlobalFn("validate", () => validate());
setGlobalFn("submitForm", () => {
  submitForm();
});

setGlobalFn("resetForm", () => resetFields());

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
      <el-button
        v-if="formSchema.formAreaConfig.defaultCreateBtn"
        :type="'primary'"
        @click="submitForm()"
      >
        {{
          typeof formSchema.formAreaConfig.defaultCreateBtn === "string"
            ? formSchema.formAreaConfig.defaultCreateBtn
            : "创建"
        }}
      </el-button>
      <el-button
        v-if="formSchema.formAreaConfig.defaultRestBtn"
        @click="resetForm()"
      >
        {{
          typeof formSchema.formAreaConfig.defaultRestBtn === "string"
            ? formSchema.formAreaConfig.defaultRestBtn
            : "重置"
        }}</el-button
      >
    </el-form-item>
    <slot></slot>
  </el-form>
</template>
