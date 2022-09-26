<script lang="tsx">
import {defineComponent, inject, ref, toRef} from "vue";
import {OnClickOutside} from "@vueuse/components"
import {ControllerProps, controllerProps} from "./type/ControllerTypes";

import {Warning} from "@element-plus/icons-vue";
import {FieldError} from "../../../types/TableTypes";
import ElComponents from "/#/install";


export default defineComponent({
  name: 'Controller',
  props: controllerProps,
  emits: ['getFocus'],
  setup(props: ControllerProps, {slots, emit}) {
    const {dataForm, formRef, errorField, errorFieldValues} = inject('tableVariable') as any
    const property = props.row?.column.property
    const updateOperate = ref<string[]>([])
    const clickClass = ["el-popper is-pure is-light el-picker__popper", "el-tree table-select-tree", "el-scrollbar__view el-select-dropdown__list"];
    const prop = `tableData.${props.row?.$index}.${props.row?.column.property}`
    /**
     * 取消编辑状态
     */
    const cancel = (el: any) => {
      let classList = el.path.map((res: any) => {
        return res.className;
      });
      for (let item of classList) {
        if (clickClass.includes(item)) {
          return;
        }
      }
      //let prop = `tableData.${props.row?.$index}.${props.row?.column.property}`
      formRef.value.validateField(prop, (isValid: boolean, invalidFields?: any) => {
        if (isValid) {
          let index = updateOperate.value.findIndex((res: string) => res === property)
          updateOperate.value.splice(index, 1)
        } else {
          const ElMessage = ElComponents.get("ElMessage")
          ElMessage.warning(invalidFields[prop][0].message)
        }

      })

    }
    /**
     * 设置编辑状态
     */
    const editField = () => {
      if(props.column?.readonly){
        return;
      }
      updateOperate.value.push(property)
      emit("getFocus")
    }
    /**
     * 验证icon
     */
    const verifyIcon = () => {
      const ElTooltip = ElComponents.get("ElTooltip")
      if (errorField.value.includes(prop)) {
        let error = ''
        for (const errors of errorFieldValues.value) {
          let find = errors.find((res: FieldError) => res.field === prop);
          if (find) {
            error = find.message
          }
        }
        return <ElTooltip content={error}>
          <div class="edit-table-column-verify">
            <el-icon color="#FF0000"><Warning/></el-icon>
          </div>
        </ElTooltip>
      }
      return <div></div>
    }
    /**
     * 引用组件参数
     */
    const attr = {
      onTrigger: (el: any) => cancel(el)
    }
    const render = () => {
      if (dataForm.tableData && dataForm.tableData.length > props.row.$index + 1) {
        updateOperate.value = dataForm.tableData[props.row.$index][props.updateOperate!]
      }
      if (updateOperate.value.includes(property)) {
        return <OnClickOutside {...attr}>
          {slots.default?.()}
        </OnClickOutside>
      }
      return <div class="edit-table-column" onClick={() => editField()}>
        <div class="edit-table-column-value" style={{height: props.cellHeight}}>
          <span>{props.modelValue}</span>
        </div>
        {verifyIcon()}
      </div>
    }
    return render;
  }
})
</script>

<style scoped>
</style>