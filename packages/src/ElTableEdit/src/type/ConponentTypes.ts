import {ExtractPropTypes, PropType} from "vue";
import {TableRow,Column,ComponentAttr} from "../../../../types/TableTypes";
export const componentProps = {
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
        required: true
    },
    modelValue: {
        type: [String,Number,Array],
    },
    updateOperate:{
        type: String,
        required: true
    },
    componentAttr:{
        type: Object as PropType<ComponentAttr>,
        required: true,
    },
    column:{
        type: Object as PropType<Column>,
        required: true
    },
    cellHeight:{
        type: String,
        default: "32px"
    }
}

export type ComponentProps = ExtractPropTypes<typeof componentProps>;