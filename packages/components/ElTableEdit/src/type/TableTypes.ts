import {ExtractPropTypes, PropType} from "vue";
import {Column} from 'packages/types/global'
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