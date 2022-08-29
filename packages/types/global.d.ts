import {FormItemRule} from "element-plus";

export declare type Column = {
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
    component?: 'Input' | 'Select' | 'Switch',
    width?: string | number,
    componentAttr?: ComponentAttr,
    itemAttr?: ItemAttr,
    editFlag?: string,
    custom?: string,
    modifier?: 'number',
    instance?: Comment,
    isEdit?: boolean,
    rules?: FormItemRule[],
    align?: 'center' | 'left ' | 'right',
    headerAlign?: 'center' | 'left ' | 'right',
}
export declare type ComponentAttr = {
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
export declare type ItemAttr = {}
export declare type TableRow = {
    $index: number,
    column: TableRowColumn

}
export declare type TableRowColumn = {
    property: string
}
export declare type Props = {
    label: string,
    children?: string,
    value: string
}
export declare type FieldError = {
    fieldValue: string,
    field: string,
    message: string
}