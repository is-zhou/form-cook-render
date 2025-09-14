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
} from 'element-plus'
import { Component } from 'vue'
import { ComponentName } from '../types/schema'


const component: Record<ComponentName, Component> = {
    input: ElInput,
    textarea: ElInput,
    inputNumber: ElInputNumber,
    inputTag: ElInputTag,
    rate: ElRate,
    radioGroup: ElRadioGroup,
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
}

export function defaultComponents() {
    return component
}