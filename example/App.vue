<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "../src/index";
const formeSchema = ref<FormSchema>({
  formAreaConfig: {
    attrs: {
      "label-width": "auto",
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
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
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "input",
      componentType: "form",
      formItemAttrs: { field: "activity.name", label: "名称" },
      attrs: {
        placeholder: "请输入名称",
      },
      defaultValue: "齐天大圣",
      visible(params) {
        return params.formData.region === "beijing";
      },
      disabled(params) {
        return params.formData.region === "shanghai";
      },
    },
    {
      id: "2",
      componentName: "select",
      componentType: "form",
      formItemAttrs: { field: "region", label: "Activity region" },
      slots: {
        default: {
          componentName: "option",
          options: [
            {
              label: "shanghai",
              value: "shanghai",
            },
            {
              label: "beijing",
              value: "beijing",
            },
          ],
        },
      },
      attrs: {
        placeholder: "Activity region",
      },
      defaultValue: "shanghai",
      disabled(params) {},
      visible(params) {
        return params.formData.count === "1";
      },
    },
    {
      id: "3",
      componentName: "selectV2",
      componentType: "form",
      formItemAttrs: { field: "count", label: "Activity count" },
      attrs: {
        placeholder: "Activity count",
        options: (params) =>
          new Promise((res) => {
            setTimeout(() => {
              res([
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "2",
                  value: "2",
                },
              ]);

              if (
                params.formData.region === "beijing" &&
                params.schemaItem.componentType === "form"
              ) {
                params.schemaItem.formItemAttrs.label = "6666";
              }
              console.log("获得了结果");
            }, 1000);
          }),
      },
      defaultValue: "2",
      disabled(params) {},
    },
    {
      id: "4",
      componentName: "formItem",
      componentType: "layout",
      attrs: {
        label: "Activity time",
        required: true,
      },
      children: [
        {
          id: "",
          componentName: "datePicker",
          componentType: "form",
          formItemAttrs: { field: "date1" },
          attrs: {
            placeholder: "Pick a date",
          },
          defaultValue: "",
        },
        {
          id: "",
          componentName: "timePicker",
          componentType: "form",
          formItemAttrs: { field: "date2" },
          attrs: {
            placeholder: "Pick a time",
          },
          defaultValue: "",
        },
      ],
    },
    {
      id: "5",
      componentName: "switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "Instant delivery" },
      attrs: {},
      defaultValue: true,
      disabled(params) {
        return params.formData.region === "shanghai";
      },
    },
    {
      id: "6",
      componentName: "segmented",
      componentType: "form",
      formItemAttrs: { field: "location", label: "Activity location" },
      attrs: {
        options: ["Home", "Company", "School"],
      },
      defaultValue: "School",
      disabled(params) {},
    },
    {
      id: "7",
      componentName: "checkboxGroup",
      componentType: "form",
      formItemAttrs: { field: "type", label: "Activity type" },
      attrs: {},

      slots: {
        default: {
          componentName: "checkbox",
          options: () =>
            new Promise((res) => {
              setTimeout(() => {
                res([
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
                ]);
                console.log("获得了结果66666");
              }, 2000);
            }),
        },
      },
      defaultValue: "",
      disabled(params) {},
    },
    {
      id: "8",
      componentName: "radioGroup",
      componentType: "form",
      formItemAttrs: { field: "resource", label: "Resources" },
      attrs: {},
      slots: {
        default: {
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
      },
      defaultValue: "",
      disabled(params) {},
    },
    {
      id: "9",
      componentName: "input",
      componentType: "form",
      formItemAttrs: { field: "desc", label: "Activity form" },
      attrs: {
        type: "textarea",
        placeholder: "Activity form",
      },
      defaultValue: "",
      disabled(params) {},
      readonly(params) {
        return params.formData.region === "shanghai";
      },
    },
  ],
});
const formData = ref({});
</script>

<template>
  <FormCookRender v-model="formData" v-model:formSchema="formeSchema" />
</template>
