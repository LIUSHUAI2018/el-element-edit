import { ExtractPropTypes, PropType } from "vue";
export declare const tableProps: {
    modelValue: {
        type: PropType<any[]>;
        default: never[];
        required: boolean;
    };
    columns: {
        type: PropType<Column[]>;
        default: never[];
        required: boolean;
    };
    editFlag: {
        type: StringConstructor;
        default: string;
    };
    updateOperate: {
        type: StringConstructor;
        default: string;
    };
    tableAttr: {
        type: ObjectConstructor;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
};
export declare type TableProps = ExtractPropTypes<typeof tableProps>;
export declare enum EditFlagEnum {
    ORIGINAL = "original",
    ADD = "add",
    UPDATE = "update",
    REMOVE = "remove"
}
import { FormItemRule } from "element-plus";
export declare type Column = {
    label: string;
    prop: string;
    onChange?: Function;
    type?: 'selection' | 'index' | 'expand';
    index?: Function | number;
    columnKey?: string;
    minWidth?: number | string;
    fixed?: boolean | string;
    renderHeader?: Function;
    align?: 'center' | 'left ' | 'right';
    headerAlign?: 'center' | 'left ' | 'right';
    component?: 'Input' | 'Select' | 'Switch';
    width?: string | number;
    componentAttr?: ComponentAttr;
    itemAttr?: ItemAttr;
    editFlag?: string;
    custom?: string;
    modifier?: 'number';
    instance?: Comment;
    isEdit?: boolean;
    rules?: FormItemRule[];
};
export interface ComponentAttr {
    showOverflowTooltip?: boolean;
    data?: any;
    props?: Props;
    nodeKey?: string;
    multiple?: boolean;
    options: any;
    disabled?: boolean;
    activeValue?: string | number;
    inactiveValue?: string | number;
}
export interface ItemAttr {
}
export interface TableRow {
    $index: number;
    column: TableRowColumn;
}
export interface TableRowColumn {
    property: string;
}
export interface Props {
    label: string;
    children?: string;
    value: string;
}
export interface FieldError {
    fieldValue: string;
    field: string;
    message: string;
}
