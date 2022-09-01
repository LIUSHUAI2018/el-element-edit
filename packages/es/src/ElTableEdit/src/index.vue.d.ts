import { Column } from "../../../types/TableTypes";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<any[]>;
        default: never[];
        required: boolean;
    };
    columns: {
        type: import("vue").PropType<Column[]>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<any[]>;
        default: never[];
        required: boolean;
    };
    columns: {
        type: import("vue").PropType<Column[]>;
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
}>>, {
    modelValue: any[];
    columns: Column[];
    editFlag: string;
    updateOperate: string;
    cellHeight: string;
}>;
export default _sfc_main;
