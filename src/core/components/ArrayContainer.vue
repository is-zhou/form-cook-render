<script setup lang="ts">
import { get, set, cloneDeep } from "lodash-es";
import { ElButton } from "element-plus";
import type { ComponentConfig } from "@/types/schema";
import {
  collectDefaultValues,
  normalizeStyle,
  replaceIndexInSchema,
} from "@/utils";
import FormNodes from "@/renderer/FormNodes.vue";

interface Props {
  arrayKeyPath: string;
  children?: ComponentConfig[];
  max?: number;
  min?: number;
  limitButtonDisplay?: boolean;
  removeText?: string;
  addText?: string;
  isSetDefaultValue?: boolean;
  style_container?: string | Record<string, string>;
  style_item_wrap?: string | Record<string, string>;
  style_item_content?: string | Record<string, string>;
  style_btnAdd_container?: string | Record<string, string>;
  style_btnDel_container?: string | Record<string, string>;
}

const formData = defineModel<Record<string, unknown>>("formData", {
  required: true,
});

const {
  arrayKeyPath,
  children,
  max = 1000,
  min = 0,
  limitButtonDisplay,
  removeText = "删除",
  addText = "新增",
  isSetDefaultValue = true,
  style_container,
  style_item_wrap,
  style_item_content,
  style_btnAdd_container,
  style_btnDel_container,
} = defineProps<Props>();

const defaultItem = collectDefaultValues(children);

let initList = get(formData, arrayKeyPath);
if (!initList) {
  initList = [isSetDefaultValue ? cloneDeep(defaultItem) : {}];
}
const list = ref(initList);
// 同步主表单数据
set(formData.value, arrayKeyPath, list.value);

const arrayContainerChildren = ref([]);

watch(
  () => list.value,
  () => {
    arrayContainerChildren.value = list.value.map(
      (_: Record<string, unknown>, index: number) => {
        return children?.map((child) =>
          replaceIndexInSchema(cloneDeep(child), arrayKeyPath, index)
        );
      }
    );
  },
  { immediate: true, deep: true }
);
const addItem = () => {
  if (max && list.value.length >= max) return;
  list.value.push(isSetDefaultValue ? cloneDeep(defaultItem) : {});
  set(formData.value, arrayKeyPath, list.value);
};

const removeItem = (index: number) => {
  if (min && list.value.length <= min) return;
  list.value.splice(index, 1);
  set(formData.value, arrayKeyPath, list.value);
};
</script>

<template>
  <div class="container" :style="normalizeStyle(style_container)">
    <template v-for="(list, index) in arrayContainerChildren" :key="index">
      <div class="item_wrap" :style="normalizeStyle(style_item_wrap)">
        <div class="item_content" :style="normalizeStyle(style_item_content)">
          <FormNodes
            v-model:config-list="arrayContainerChildren[index]"
            v-model:form-data="formData"
          ></FormNodes>
        </div>
        <div
          class="btnDel_container"
          :style="normalizeStyle(style_btnDel_container)"
        >
          <span
            @click="removeItem(index)"
            :style="{
              visibility: !(
                arrayContainerChildren.length === min && limitButtonDisplay
              )
                ? 'visible'
                : 'hidden',
            }"
          >
            <slot name="del">
              <el-button
                type="danger"
                :disabled="arrayContainerChildren.length === min"
              >
                {{ removeText }}
              </el-button>
            </slot>
          </span>
        </div>
      </div>
    </template>
    <div
      class="btnAdd_container"
      :style="normalizeStyle(style_btnAdd_container)"
    >
      <span
        @click="addItem"
        :style="{
          visibility: !(
            arrayContainerChildren.length >= max && limitButtonDisplay
          )
            ? 'visible'
            : 'hidden',
        }"
      >
        <slot name="add">
          <el-button
            type="primary"
            :disabled="arrayContainerChildren.length >= max"
          >
            {{ addText }}
          </el-button>
        </slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.item_wrap {
  display: flex;
  align-items: center;
  gap: 20px;

  border: 1px solid var(--el-border-color-light);
  padding: 12px;
  border-radius: 6px;

  .item_content {
    flex: 1;
  }
}
.btnAdd_container {
  text-align: right;
}
</style>
