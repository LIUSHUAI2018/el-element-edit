import {ExtractPropTypes, PropType} from "vue";
import {TableRow,Column} from 'packages/types/global'
export const controllerProps = {
    //表格数据
    row: {
        type: Object as PropType<TableRow>,
        default: () =>{
            return {
                $index: -1,
                column: {
                    property: ''
                }
            }
        },
        required: true,
    },
    updateOperate:{
        type: String,
        required: true
    },
    column:{
        type: Object as PropType<Column>,
        required: true
    },
    modelValue: {
        type: [String,Number],
        required: true
    },
    cellHeight:{
        type: String,
        default: "32px"
    }
}

export type ControllerProps = ExtractPropTypes<typeof controllerProps>;
