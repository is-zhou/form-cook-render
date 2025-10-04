<script lang="ts" setup>
import { ComponentConfig } from "../types/schema";
import { useRenderNode } from "../core/useRenderNode";
import { get, set } from "lodash-es";

type FormData = Record<string, unknown>;

const configList = defineModel<ComponentConfig[]>("configList", {
  required: true,
});

const formData = defineModel<FormData>("formData", {
  required: true,
  default: () => ({}),
});

const { renderForm, renderLayout } = useRenderNode(formData);

function getVisible(config: ComponentConfig) {
  let isVisible = true;
  if (typeof config.visible === "boolean" && !config.visible) {
    isVisible = false;
  }
  if (typeof config.visible === "function") {
    isVisible = !!config.visible({
      formData: formData.value,
      schemaItem: config,
    });
  }

  if (
    !isVisible &&
    config.componentType === "form" &&
    get(formData.value, config.formItemAttrs.field) !== undefined
  ) {
    set(formData.value, config.formItemAttrs.field, undefined);
  }

  return isVisible;
}
</script>
<template>
  <template v-for="config in configList">
    <template v-if="config.componentType === 'form'">
      <el-form-item
        v-if="getVisible(config)"
        v-bind="config.formItemAttrs"
        :prop="config.formItemAttrs.field"
      >
        <component :is="renderForm(config)" :key="config.id" />
      </el-form-item>
    </template>
    <template v-else>
      <el-form-item
        v-if="config.componentName === 'FormItem'"
        v-bind="config.attrs"
      >
        <template v-if="config.children">
          <RenderFormNode
            v-model:config-list="config.children"
            v-model:form-data="formData"
          ></RenderFormNode>
        </template>
      </el-form-item>
      <component
        v-else-if="config.children?.length"
        :is="renderLayout(config)"
        :key="config.id"
      >
        <template v-if="config.children">
          <RenderFormNode
            v-model:config-list="config.children"
            v-model:form-data="formData"
          ></RenderFormNode>
        </template>
      </component>
      <component v-else-if="config.slots" :is="renderLayout(config)">
      </component>
    </template>
  </template>
</template>
