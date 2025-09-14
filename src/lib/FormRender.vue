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
          return h(slotComp, { value, name }, { default: () => label });
        });

        slots![slot.name] = () => list;
      } else {
        slots![slot.name] = () => [h(slot.componentName)];
      }
    });
  }

  return h(
    ElFormItem,
    { prop: node.field, ...node.formItemAttrs },
    {
      default: () =>
        h(
          comp,
          {
            ...node.attrs,
            modelValue: formData.value[node.field],
            "onUpdate:modelValue": (v) => (formData.value[node.field] = v),
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
