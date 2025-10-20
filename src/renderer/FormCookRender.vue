<script lang="ts">
import type { FormInstance } from "element-plus";
import { ComponentConfig, FormAreaConfig, FormSchema } from "../types/schema";
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

export default defineComponent({
  name: "FormCookRender",
  components: { FormNodes },
  props: {
    modelValue: {
      type: Object as () => FormData,
      required: true,
    },
    formSchema: {
      type: Object as () => FormSchema,
      default: () => ({}),
    },
  },
  emits: ["submit", "reset"],
  setup(props, { emit, expose }) {
    const formRef = shallowRef<FormInstance | null>(null);
    const contentConfigList = ref<ComponentConfig[]>([]);
    const areaConfig = ref<FormAreaConfig>();

    watch(
      () => props.formSchema,
      async () => {
        const { formAreaConfig, formContentConfigList } = cloneDeep(
          props.formSchema
        );

        Object.assign(
          props.modelValue,
          setDefaultValues(props.modelValue, formContentConfigList)
        );

        await nextTick();

        areaConfig.value = formAreaConfig;
        contentConfigList.value = formContentConfigList;
      },
      { immediate: true, deep: true }
    );

    watch(
      () => cloneDeep(props.modelValue),
      async (newData, oldData) => {
        await nextTick();
        triggerReload(newData, oldData);
      },
      { deep: true }
    );

    onBeforeUnmount(() => {
      clearReloadAll();
    });

    const validate = async () => {
      if (!formRef.value) return;
      return await formRef.value.validate();
    };

    const submit = async () => {
      await validate();
      return props.modelValue;
    };

    const resetFields = () => {
      if (!formRef.value) return;
      formRef.value.resetFields();
    };

    const submitForm = async () => {
      await validate();
      emit("submit", props.modelValue);
    };

    const resetForm = () => {
      if (!formRef.value) return;
      formRef.value.resetFields();
      emit("reset");
    };

    registerBuiltinFn("validate", () => validate());
    registerBuiltinFn("submitForm", () => submitForm());
    registerBuiltinFn("resetForm", () => resetFields());

    expose<FormCookRenderExpose>({ validate, submit, resetFields });

    return {
      formRef,
      formAreaConfig: areaConfig,
      formContentConfigList: contentConfigList,
      formData: props.modelValue,
      formSchema: props.formSchema,
      submitForm,
      resetForm,
    };
  },
});
</script>
<template>
  <el-form
    v-if="formContentConfigList.length"
    ref="formRef"
    :model="formData"
    v-bind="formAreaConfig?.attrs"
  >
    <FormNodes
      v-model:config-list="formContentConfigList"
      v-model:form-data="formData"
      :areaAttrs="{
        size: formAreaConfig?.attrs?.size,
        disabled: formAreaConfig?.attrs?.disabled,
      }"
    ></FormNodes>

    <el-form-item>
      <el-button
        v-if="formAreaConfig?.defaultCreateBtn"
        :type="'primary'"
        @click="submitForm()"
      >
        {{
          typeof formAreaConfig.defaultCreateBtn === "string"
            ? formAreaConfig.defaultCreateBtn
            : "创建"
        }}
      </el-button>
      <el-button v-if="formAreaConfig?.defaultRestBtn" @click="resetForm()">
        {{
          typeof formAreaConfig.defaultRestBtn === "string"
            ? formAreaConfig.defaultRestBtn
            : "重置"
        }}
      </el-button>
    </el-form-item>
    <slot></slot>
  </el-form>
</template>
