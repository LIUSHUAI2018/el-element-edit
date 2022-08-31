<script lang="tsx">
import {defineComponent} from 'vue'
import {ElForm, ElFormItem, ElTableColumn, ElTable, ElMessage} from "element-plus";
import componentMap from './ComponentMap'
import {tableProps, TableProps} from "../../../types/TableTypes";
import {
  dataInit,
  formRef,
  dataForm,
  errorField,
  errorFieldValues,
  setTableField,
  addAll,
  add, remove, setTableRowUpdate
} from './hooks/TableDataHook'
import { Column, TableRow } from "../../../types/TableTypes";

export default defineComponent({
  name: "ElTableEdit",
  props: tableProps,
  setup(props: TableProps, {expose, emit,slots}) {

    /**
     * 动态获取组件
     * @param scope
     * @param item
     */
    const getComponent = (scope: TableRow, item: Column) => {
      let dynamicComponents = componentMap.get(item.component);
      return <dynamicComponents cellHeight={props.cellHeight} updateOperate={props.updateOperate} column={item}
                                componentAttr={item.componentAttr ? item.componentAttr : {}} row={scope}
                                v-model={dataForm.tableData[scope.$index][item.prop]}>

      </dynamicComponents>
    }
    /**
     * 表单事项组件用于表单校验
     * @param scope
     * @param item
     */
    const formItem = (scope: TableRow, item: Column) => {
      let prop = `tableData.${scope.$index}.${scope.column.property}`
      return <ElFormItem label="" {...item.itemAttr} prop={prop} rules={item.rules}>
        {{
          default: () => {
            return getComponent(scope, item)
          }
        }}
      </ElFormItem>
    }
    const validate = () => {
      return new Promise((resolve) => {
        formRef.value.validate((isValid: boolean, invalidFields: any) => {
          if (isValid) {
            errorField.value = [];
            errorFieldValues.value = []
            resolve(200);
          } else {
            let errorKeys = Object.keys(invalidFields) as string[];
            let errorValues = Object.values(invalidFields) as any;
            errorField.value = errorKeys;
            errorFieldValues.value = errorValues
            ElMessage({
              message: errorValues[0][0].message,
              type: 'warning'
            });
          }
        });
      });
    }
    expose({validate,setTableField,addAll,add,remove,setTableRowUpdate})
    /**
     * 渲染组件
     */
    const render = () => {

      //数据初始化
      dataInit(props, emit)
      return (<ElForm class="el-edit-table" ref={formRef} showMessage={false} model={dataForm}>
        <ElTable {...props.tableAttr} data={dataForm.tableData}>
          {props.columns?.map((item: Column) => {
            let items = {
              type: item.type,
              index: item.index,
              columnKey: item.columnKey,
              minWidth: item.minWidth,
              fixed: item.fixed,
              renderHeader: item.renderHeader,
              align: item.align,
              headerAlign: item.renderHeader
            } as any
            return <ElTableColumn {...items}  prop={item.prop} label={item.label}>
              {{
                default: (scope: TableRow) => {
                  if(item.custom){
                    return slots[item.custom]?.(scope,item)
                  }
                  return formItem(scope, item)
                }
              }}
            </ElTableColumn>
          })}
        </ElTable>
      </ElForm>)
    }
    return render
  }
})
</script>

<style  lang="scss">
@import "../style/table";
</style>