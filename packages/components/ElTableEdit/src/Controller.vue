<script lang="tsx">
import {defineComponent, ref,toRef} from "vue";
import {OnClickOutside} from "@vueuse/components"
import {ControllerProps, controllerProps} from "./type/ControllerTypes";
import {dataForm,formRef,errorField,errorFieldValues,editFlag} from "./hooks/TableDataHook";
import {ElMessage,ElTooltip} from "element-plus";
import { Warning } from "@element-plus/icons-vue";
import { FieldError } from "packages/types/global";

export default defineComponent({
  name: 'Controller',
  props: controllerProps,
  emits: ['getFocus'],
  setup(props: ControllerProps, {slots,emit}) {
    const updateOperate = ref(dataForm.tableData[props.row.$index][props.updateOperate!])
    const property = props.row?.column.property
    const clickClass = ["el-popper is-pure is-light el-picker__popper", "el-tree table-select-tree","el-scrollbar__view el-select-dropdown__list"];
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
      formRef.value.validateField(prop,(isValid: boolean, invalidFields?: any)=>{
        if(isValid){
          let index = updateOperate.value.findIndex((res: string) => res === property)
          updateOperate.value.splice(index,1)
        }else{
          ElMessage({
            message: invalidFields[prop][0].message,
            type: 'warning',
          })
        }

      })

    }
    /**
     * 设置编辑状态
     */
    const editField = () => {
      updateOperate.value.push(property)
      emit("getFocus")
    }
    /**
     * 验证icon
     */
    const verifyIcon = () => {
      if(errorField.value.includes(prop)){
        let error = ''
        for (const errors of errorFieldValues.value) {
           let find = errors.find((res: FieldError)=> res.field === prop);
           if(find){
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
      if (updateOperate.value.includes(property)) {
        return <OnClickOutside {...attr}>
          {slots.default?.()}
        </OnClickOutside>
      }
      return <div class="edit-table-column" onClick={() => editField()}>
         <div class="edit-table-column-value" style={{height: props.cellHeight}}>
           <span>{props.modelValue}</span>
         </div >
        {verifyIcon()}
      </div>
    }
    return render;
  }
})
</script>

<style scoped>
</style>