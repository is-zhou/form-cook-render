export const testSchema = {
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
      id: "",
      field: "name",
      componentName: "input",
      componentType: "form",
      formItemAttrs: { label: "Activity name" },
      attrs: {
        placeholder: "Activity name",
      },
      defaultValue: "",
    },
    {
      id: "",
      field: "region",
      componentName: "select",
      componentType: "form",
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
      defaultValue: "shanghai",
    },
    {
      id: "",
      field: "count",
      componentName: "selectV2",
      componentType: "form",
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
      defaultValue: "2",
    },
    {
      id: "",
      componentName: "formItem",
      componentType: "layout",
      attrs: {
        label: "Activity time",
        required: true,
      },
      children: [
        {
          id: "",
          field: "date1",
          componentName: "datePicker",
          componentType: "form",
          formItemAttrs: {},
          attrs: {
            placeholder: "Pick a date",
          },
          defaultValue: "",
        },
        {
          id: "",
          field: "date2",
          componentName: "timePicker",
          componentType: "form",
          formItemAttrs: {},
          attrs: {
            placeholder: "Pick a time",
          },
          defaultValue: "",
        },
      ],
    },
    {
      id: "",
      field: "delivery",
      componentName: "switch",
      componentType: "form",
      formItemAttrs: { label: "Instant delivery" },
      attrs: {},
      defaultValue: true,
    },
    {
      id: "",
      field: "location",
      componentName: "segmented",
      componentType: "form",
      formItemAttrs: { label: "Activity location" },
      attrs: {
        options: ["Home", "Company", "School"],
      },
      defaultValue: "School",
    },
    {
      id: "",
      field: "type",
      componentName: "checkboxGroup",
      componentType: "form",
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
      defaultValue: "",
    },
    {
      id: "",
      field: "resource",
      componentName: "radioGroup",
      componentType: "form",
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
      defaultValue: "",
    },
    {
      id: "",
      field: "desc",
      componentName: "input",
      componentType: "form",
      formItemAttrs: { label: "Activity form" },
      attrs: {
        type: "textarea",
        placeholder: "Activity form",
      },
      defaultValue: "",
    },
  ],
};
