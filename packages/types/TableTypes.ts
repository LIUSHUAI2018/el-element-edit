import {ExtractPropTypes, PropType} from "vue";

export const tableProps = {
        //表格数据
        modelValue: {
            type: Array as PropType<any[]>,
            default: [],
            required: true
        },
        //表格字段数据
        columns: {
            type: Array as PropType<Column[]>,
            default: [],
            required: true
        },
        //数据状态字段名，判断当前数据是修改(update)、新增(add)等
        editFlag:{
            type: String,
            default: '$edit'
        },
        //存放编辑状态的字段名
        updateOperate:{
            type: String,
            default: '$updateOperate'
        },
        //表格参数
        tableAttr:{
            type: Object
        },
        cellHeight:{
            type: String,
            default: "32px"
        }
}

export type TableProps = ExtractPropTypes<typeof tableProps>;
export enum EditFlagEnum {
    ORIGINAL = 'original',
    ADD = 'add',
    UPDATE = 'update',
    REMOVE = 'remove'
}


import {FormItemRule} from "element-plus";

export type Column =  {
    label: string,
    prop: string,
    onChange?: Function,
    type?: 'selection' |'index'|'expand',
    index?: Function | number,
    columnKey?: string,
    minWidth?: number | string,
    fixed?: boolean | string,
    renderHeader?: Function,
    align?: 'center' | 'left ' | 'right',
    headerAlign?: 'center' | 'left ' | 'right',
    component?: 'Input' | 'Select' | 'Switch' | 'InputNumber',
    width?: string | number,
    componentAttr?: ComponentAttr,
    itemAttr?: ItemAttr,
    editFlag?: string,
    custom?: string,
    modifier?: 'number',
    instance?: Comment,
    isEdit?: boolean,
    rules?: FormItemRule[],
}
export interface ComponentAttr  {
    showOverflowTooltip?: boolean,
    data?: any,
    props?: Props,
    nodeKey?: string,
    multiple?: boolean,
    options: any,
    disabled?: boolean,
    activeValue?: string | number,
    inactiveValue?: string | number
}
export interface ItemAttr  {}
export interface TableRow {
    $index: number,
    column: TableRowColumn

}
export interface TableRowColumn {
    property: string
}
export interface Props  {
    label: string,
    children?: string,
    value: string
}
export interface FieldError{
    fieldValue: string,
    field: string,
    message: string
}