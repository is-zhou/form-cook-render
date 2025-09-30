import {
    ElInput,
    ElSwitch,
    ElRate,
    ElRadioGroup,
    ElRadio,
    ElRadioButton,
    ElSelect,
    ElInputNumber,
    ElInputTag,
    ElSlider,
    ElColorPicker,
    ElOption,
    ElSelectV2,
    ElDatePicker,
    ElFormItem,
    ElTimePicker,
    ElSegmented,
    ElCheckboxGroup,
    ElCheckbox,
    ElRow,
    ElCol,
} from 'element-plus'
import { Component } from 'vue'
import { ComponentName } from '../types/schema'


const component: Record<ComponentName, Component | string> = {
    input: ElInput,
    textarea: ElInput,
    inputNumber: ElInputNumber,
    inputTag: ElInputTag,
    rate: ElRate,
    radioGroup: ElRadioGroup,
    radioGroupButton: ElRadioGroup,
    radio: ElRadio,
    radioButton: ElRadioButton,
    select: ElSelect,
    switch: ElSwitch,
    slider: ElSlider,
    colorPicker: ElColorPicker,
    option: ElOption,
    selectV2: ElSelectV2,
    datePicker: ElDatePicker,
    timePicker: ElTimePicker,
    formItem: ElFormItem,
    segmented: ElSegmented,
    checkboxGroup: ElCheckboxGroup,
    checkbox: ElCheckbox,
    row: ElRow,
    col: ElCol,
    span: 'span'
}

export function defaultComponents() {
    return component
}