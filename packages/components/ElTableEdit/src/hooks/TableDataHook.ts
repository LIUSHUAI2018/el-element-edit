import { reactive, ref, watch} from "vue";
import {EditFlagEnum, TableProps} from "../type/TableTypes";
import {isEqual,cloneDeep} from "lodash-es";
import {FieldError} from 'packages/types/global'
//表格数据
export const dataForm = reactive({
    tableData: [] as any[]
})
//已删除的数据列表
export const removeList = ref<any[]>([])
//报错的数据列表
export const errorField = ref<string[]>([])
//存放校验错误验证数据
export const errorFieldValues = ref<FieldError[][]>([])
//formRef
export const  formRef = ref()
//正在编辑数组的key名
export const updateOperate = ref('')
//判断当条信息处于的状态
export const editFlag = ref('')

/**
 * 初始化用户传过来的数据对象
 * @param props
 * @param modelValue
 * @param isInit
 */
function initData(props: TableProps,modelValue: any[],isInit = true) {
    let dataList = [] as any[];
    updateOperate.value = props.updateOperate
    editFlag.value = props.editFlag
    modelValue.forEach(res => {
        if (!res) {
            res = {};
        }
        //存放正在编辑的字段名
        if (!res[props.updateOperate]) {
            res[props.updateOperate] = [];
        }
        //标志此贴数据增删改状态
        if (!res[props.editFlag] || isInit) {
            res[props.editFlag] = EditFlagEnum.ORIGINAL;
        }
        if (isInit) {
            removeList.value = [];
            errorField.value = [];
        }
        dataList.push(res);
    });
    dataForm.tableData = cloneDeep(dataList);
}

/**
 *
 * @param props
 * @param emit
 */
export function dataInit(props: TableProps,emit: Function) {
    initData(props,props.modelValue)
    watch(
        () => dataForm.tableData,
        (newValue) => {
            if(isEqual(newValue,props.modelValue)){
                return;
            }
            emit("update:modelValue",newValue)
        },{
            deep: true,
            immediate: true
        }
    );
}

/**
 * 设置表格中字段值
 * @param index
 * @param prop
 * @param value
 */
export function setTableField(index: number,prop: string,value: any){
  if(!dataForm.tableData){
      console.error("表格数据不存在");
      return;
  }
  if(index >= dataForm.tableData.length){
      console.error("设置下标过大请检查:",index)
      return;
  }
  if(!prop){
      console.error("prop未定义",prop)
      return;
  }
  dataForm.tableData[index][prop] = value;
}

/**
 * 添加一行表格数据
 */
export function  add(row: any){
    if(row instanceof Object && Object.getPrototypeOf(row) === Object.prototype){
        row[updateOperate.value] = []
        row[editFlag.value] = EditFlagEnum.ADD
        dataForm.tableData.push(row)
    }else{
        console.error("add方法参数只能是对象")
    }
}
/**
 * 添加多行表格数据
 */
export function  addAll(rows: any[]){
    if(rows instanceof Array){
        rows.forEach(row=>{
            row[updateOperate.value] = []
            row[editFlag.value] = EditFlagEnum.ADD
        })
        dataForm.tableData.push(...rows)
    }else{
        console.error("addAll方法参数只能是对象数组")
    }
}

/**
 * 根据下标删除数组一行
 * @param index
 */
export function remove(index: number) {
   if(index < 0 || index >= dataForm.tableData.length){
       console.error("romove方法数组下标越界")
       return;
   }
    let row = dataForm.tableData[index]
    row[editFlag.value] = EditFlagEnum.REMOVE
    removeList.value.push(row)
    dataForm.tableData.splice(index,1)
}
/**
 * 根据下标删除数组多行
 * @param indexs
 */
export function removeAll(indexs: number[]) {
    if(indexs instanceof Array){
        dataForm.tableData =  dataForm.tableData.filter((res,index)=> {
            if(indexs.includes(index)){
                res[editFlag.value] = EditFlagEnum.REMOVE
                removeList.value.push(res)
                return  false
            }
            return true
        } )
    }else{
        console.error("removeAll方法只能是Number数组")
    }

}

/**
 * 根据下标设置一行状态为修改
 * @param index
 * @param isCoerce
 */
export function setTableRowUpdate(index: number,isCoerce: boolean = false){
    let flag = dataForm.tableData[index][editFlag.value];
    if(isCoerce || flag === EditFlagEnum.ORIGINAL){
        dataForm.tableData[index][editFlag.value] = EditFlagEnum.UPDATE
    }
}