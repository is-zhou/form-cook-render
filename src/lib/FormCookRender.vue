<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { getComponent } from "./core/registry";
import { ComponentConfig, FormSchema } from "./types/schema";
import { get, set } from "lodash-es";
import { ElForm, ElButton, ElFormItem } from "element-plus";

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

const renderNode = (node: ComponentConfig): VNode | undefined => {
  const comp = getComponent(node.componentName);

  if (!comp) {
    return;
  }

  if (node.componentType === "layout") {
    return h(comp, node.attrs, {
      default: () => node.children?.map(renderNode),
    });
  }

  let slots: { [key: string]: () => Array<VNode> } | undefined = undefined;
  if (Array.isArray(node.slots) && node.slots.length > 0) {
    // {
    //   slotName: () => [
    //     h("option", { value: "shanghai" }, "Zone one"),
    //     h("option", { value: "beijing" }, "Zone two"),
    //   ];
    // }
    slots = {};

    node.slots.forEach((slot) => {
      const slotComp = getComponent(slot.componentName);
      if (!slotComp) {
        return;
      }

      if (slot.options) {
        const list = slot.options?.map((opt) => {
          const { value, name, label } = opt;
          return h(slotComp, { value, name, label }, { default: () => label });
        });

        slots![slot.name] = () => list;
      } else {
        slots![slot.name] = () => [h(slot.componentName)];
      }
    });
  }

  if (node.defaultValue !== "") {
    const currentVal = get(formData.value, node.formItemAttrs.field);
    if (currentVal === undefined) {
      set(formData.value, node.formItemAttrs.field, node.defaultValue);
    }
  }

  return h(
    ElFormItem,
    { prop: node.formItemAttrs.field, ...node.formItemAttrs },
    {
      default: () =>
        h(
          comp,
          {
            ...node.attrs,
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
              set(formData.value, node.formItemAttrs.field, v),
          },
          slots
        ),
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
