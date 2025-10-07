<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ComponentConfig, FormSchema } from "../types/schema";
import FormNodes from "./FormNodes.vue";
import { cloneDeep } from "lodash-es";
import { setDefaultValues } from "@/core/defaultValues";
import { clearReloadAll, triggerReload } from "@/core/reload";
import { registerBuiltinFn } from "@/core/registry";

interface FormCookRenderExpose {
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
    triggerReload(newData, oldData);
  },
  { deep: true }
);
onBeforeUnmount(() => {
  clearReloadAll();
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

registerBuiltinFn("validate", () => validate());
registerBuiltinFn("submitForm", () => {
  submitForm();
});
registerBuiltinFn("resetForm", () => resetFields());

defineExpose<FormCookRenderExpose>({ validate, submit, resetFields });
</script>
<template>
  <el-form
    v-if="formContentConfigList.length"
    ref="formRef"
    :model="formData"
    v-bind="formSchema.formAreaConfig.attrs"
  >
    <FormNodes
      v-model:config-list="formContentConfigList"
      v-model:form-data="formData"
    ></FormNodes>

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
