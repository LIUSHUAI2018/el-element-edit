declare const _sfc_main: import("vue").DefineComponent<{
    row: {
        type: import("vue").PropType<import("../../../types/TableTypes").TableRow>;
        default: () => {
            $index: number;
            column: {
                property: string;
            };
        };
        required: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        required: boolean;
    };
    updateOperate: {
        type: StringConstructor;
        required: boolean;
    };
    componentAttr: {
        /**
         * 开关改变时的回调函数
         * @param val
         */
        type: import("vue").PropType<import("../../../types/TableTypes").ComponentAttr>;
        required: boolean;
    };
    column: {
        type: import("vue").PropType<import("../../../types/TableTypes").Column>;
        required: boolean;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    row: {
        type: import("vue").PropType<import("../../../types/TableTypes").TableRow>;
        default: () => {
            $index: number;
            column: {
                property: string;
            };
        };
        required: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        required: boolean;
    };
    updateOperate: {
        type: StringConstructor;
        required: boolean;
    };
    componentAttr: {
        /**
         * 开关改变时的回调函数
         * @param val
         */
        type: import("vue").PropType<import("../../../types/TableTypes").ComponentAttr>;
        required: boolean;
    };
    column: {
        type: import("vue").PropType<import("../../../types/TableTypes").Column>;
        required: boolean;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    modelValue: string | number;
    cellHeight: string;
    row: import("../../../types/TableTypes").TableRow;
}>;
export default _sfc_main;
