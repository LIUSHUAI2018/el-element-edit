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
    updateOperate: {
        type: StringConstructor;
        required: boolean;
    };
    column: {
        type: import("vue").PropType<import("../../../types/TableTypes").Column>;
        required: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: boolean;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "getFocus"[], "getFocus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    updateOperate: {
        type: StringConstructor;
        required: boolean;
    };
    column: {
        type: import("vue").PropType<import("../../../types/TableTypes").Column>;
        required: boolean;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: boolean;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onGetFocus?: ((...args: any[]) => any) | undefined;
}, {
    cellHeight: string;
    row: import("../../../types/TableTypes").TableRow;
}>;
export default _sfc_main;
