import { ExtractPropTypes, PropType } from "vue";
import { TableRow, Column, ComponentAttr } from "../../../../types/TableTypes";
export declare const componentProps: {
    row: {
        type: PropType<TableRow>;
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
        type: PropType<ComponentAttr>;
        required: boolean;
    };
    column: {
        type: PropType<Column>;
        required: boolean;
    };
    cellHeight: {
        type: StringConstructor;
        default: string;
    };
};
export declare type ComponentProps = ExtractPropTypes<typeof componentProps>;
