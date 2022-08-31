import { ExtractPropTypes, PropType } from "vue";
import { TableRow, Column } from "../../../../types/TableTypes";
export declare const controllerProps: {
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
    updateOperate: {
        type: StringConstructor;
        required: boolean;
    };
    column: {
        type: PropType<Column>;
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
};
export declare type ControllerProps = ExtractPropTypes<typeof controllerProps>;
