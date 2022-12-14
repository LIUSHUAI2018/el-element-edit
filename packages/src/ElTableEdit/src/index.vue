<script lang="tsx">
import {defineComponent, onMounted, provide, ref, watch, withModifiers} from 'vue'
import {ElForm, ElFormItem, ElTableColumn} from "element-plus";
import componentMap from './ComponentMap'
import {tableProps, TableProps} from "../../../types/TableTypes";
import useTableHooks from './hooks/TableDataHook'
import {Column, TableRow} from "../../../types/TableTypes";
import ElComponents from "/#/install";

export default defineComponent({
  name: "ElTableEdit",
  props: tableProps,
  setup(props: TableProps, {expose, emit, slots}) {
    const tableVariable = useTableHooks()
    provide('tableVariable', tableVariable)

    /**
     * 动态获取组件
     * @param scope
     * @param item
     */
    const getComponent = (scope: TableRow, item: Column) => {
      if (!item.prop) {
        console.warn('prop不能为空');
        return <div></div>
      }
      let dynamicComponents = componentMap.get(item.component);

      return <dynamicComponents  cellHeight={props.cellHeight} updateOperate={props.updateOperate} column={item}
                                componentAttr={item.componentAttr ? item.componentAttr : {}} row={scope}
                                v-model={tableVariable.dataForm.tableData[scope.$index][item.prop]}
      >

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
        tableVariable.formRef.value.validate((isValid: boolean, invalidFields: any) => {
          if (isValid) {
            tableVariable.errorField.value = [];
            tableVariable.errorFieldValues.value = []
            resolve(200);
          } else {
            let errorKeys = Object.keys(invalidFields) as string[];
            let errorValues = Object.values(invalidFields) as any;
            tableVariable.errorField.value = errorKeys;
            tableVariable.errorFieldValues.value = errorValues
            const ElMessage = ElComponents.get("ElMessage")
            ElMessage({
              message: errorValues[0][0].message,
              type: 'warning'
            });
          }
        });
      });
    }

    tableVariable.dataInit(props, emit)
    expose({
      validate,
      setTableField: tableVariable.setTableField,
      addAll: tableVariable.addAll,
      add: tableVariable.add,
      remove: tableVariable.remove,
      removeAll: tableVariable.remove,
      setTableRowUpdate: tableVariable.setTableRowUpdate
    })
    /**
     * 渲染组件
     */
    const render = () => {
      const ElTable = ElComponents.get("ElTable")
      return (
          <ElForm class="el-edit-table" ref={tableVariable.formRef} showMessage={false} model={tableVariable.dataForm}>
            <ElTable {...props.tableAttr} data={tableVariable.dataForm.tableData}>
              {props.columns?.map((item: Column) => {
                if (item.type) {
                  let items = {
                    minWidth: item.minWidth,
                    align: item.align,
                    width: item.width,
                    fixed: item.fixed,
                    headerAlign: item.renderHeader
                  } as any
                  return <ElTableColumn  {...items} type={item.type} label={item.label}>
                  </ElTableColumn>
                }
                let items = {
                  type: item.type,
                  columnKey: item.columnKey,
                  minWidth: item.minWidth,
                  fixed: item.fixed,
                  renderHeader: item.renderHeader,
                  align: item.align,
                  width: item.width,
                  headerAlign: item.renderHeader
                } as any
                return <ElTableColumn {...items} prop={item.prop} label={item.label}>
                  {{
                    default: (scope: TableRow) => {
                      if (item.custom) {
                        return slots[item.custom]?.(scope, item)
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

<style lang="scss">
@import "../style/table";
</style>