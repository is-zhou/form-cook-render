<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { getComponent } from "./core/registry";

const formSchema = {
  formContentConfigList: [
    {
      field: "name",
      componentName: "input",
      formItemAttrs: { label: "Activity name" },
      attrs: {
        placeholder: "Activity name",
      },
    },
    {
      field: "region",
      componentName: "select",
      formItemAttrs: { label: "Activity zone" },
      slots: [
        {
          name: "default",
          componentName: "option",
          options: [
            {
              label: "Zone one",
              value: "shanghai",
            },
            {
              label: "Zone two",
              value: "beijing",
            },
          ],
        },
      ],
      attrs: {
        placeholder: "Activity zone",
      },
    },
    {
      field: "count",
      componentName: "selectV2",
      formItemAttrs: { label: "Activity count" },
      attrs: {
        placeholder: "Activity count",
        options: [
          {
            label: "1",
            value: "1",
          },
          {
            label: "2",
            value: "2",
          },
        ],
      },
    },
    {
      componentName: "formItem",
      componentType: "layout",
      formItemAttrs: { label: "Activity time" },
      attrs: {
        label: "Activity time",
        required: true,
      },
      children: [
        {
          field: "date1",
          componentName: "datePicker",
          formItemAttrs: {},
          attrs: {
            placeholder: "Pick a date",
          },
        },
        {
          field: "date2",
          componentName: "timePicker",
          formItemAttrs: {},
          attrs: {
            placeholder: "Pick a time",
          },
        },
      ],
    },
    {
      field: "delivery",
      componentName: "switch",
      formItemAttrs: { label: "Instant delivery" },
      attrs: {},
    },
    {
      field: "location",
      componentName: "segmented",
      formItemAttrs: { label: "Activity location" },
      attrs: {
        options: ["Home", "Company", "School"],
      },
    },
    {
      field: "type",
      componentName: "checkboxGroup",
      formItemAttrs: { label: "Activity type" },
      attrs: {},
      slots: [
        {
          name: "default",
          componentName: "checkbox",
          options: [
            {
              value: "Promotion activities",
              name: "type",
              label: "Promotion activities",
            },
            {
              value: "Offline activities",
              name: "type",
              label: "Offline activities",
            },
          ],
        },
      ],
    },
    {
      field: "resource",
      componentName: "radioGroup",
      formItemAttrs: { label: "Resources" },
      attrs: {},
      slots: [
        {
          name: "default",
          componentName: "radio",
          options: [
            {
              value: "Sponsorship",
              label: "Sponsorship",
            },
            {
              value: "Venue",
              label: "Venue",
            },
          ],
        },
      ],
    },
    {
      field: "desc",
      componentName: "input",
      formItemAttrs: { label: "Activity form" },
      attrs: {
        type: "textarea",
        placeholder: "Activity form",
      },
    },
  ],
};

interface FormData {
  name: string;
  region: string;
  count: string;
  date1: string;
  date2: string;
  delivery: boolean;
  location: string;
  type: string[];
  resource: string;
  desc: string;
}

const formRef = ref<FormInstance>();

const formData = reactive<any>({
  name: "",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  location: "",
  type: [],
  resource: "",
  desc: "",
});

const rules = reactive<FormRules<FormData>>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  location: [
    {
      required: true,
      message: "Please select a location",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <template v-for="config in formSchema.formContentConfigList">
      <template v-if="config.componentType === 'layout'">
        <component
          :is="getComponent(config.componentName)"
          v-bind="config.attrs"
        >
          <template v-if="config.children.length">
            <component
              v-for="c in config.children"
              :is="getComponent(c.componentName)"
              v-model="formData[c.field]"
              v-bind="c.attrs"
            ></component>
          </template>
        </component>
      </template>
      <el-form-item v-else :prop="config.field" v-bind="config.formItemAttrs">
        <component
          v-model="formData[config.field]"
          :is="getComponent(config.componentName)"
          v-bind="config.attrs"
        >
          <template v-for="slot in config?.slots" #[slot.name]>
            <template v-for="option in slot.options">
              <component
                :is="getComponent(slot.componentName)"
                :value="option.value"
                :name="option.name"
                >{{ option.label }}</component
              >
            </template>
          </template>
        </component>
      </el-form-item>
    </template>

    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">
        Create
      </el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
