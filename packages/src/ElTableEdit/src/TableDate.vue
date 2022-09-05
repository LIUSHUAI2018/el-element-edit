<script lang="tsx">
import {defineComponent, getCurrentInstance, inject, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import ElComponents from "/#/install";


export default defineComponent({
  name: 'TableDate',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const {dataForm, setTableRowUpdate} = inject('tableVariable') as any
    const {proxy} = getCurrentInstance() as any;
    //显示字段值
    const value = ref<number | string>(props.modelValue)
    //选择对象的dom
    const selectRef = ref()
    watch(
        () => value.value,
        (newValue) => {
          emit("update:modelValue", newValue)
        },
        {deep: true, immediate: true}
    );
    /**
     * 当编辑事件触发时自动显示下拉菜单
     */
    const getFocus = () => {
      nextTick(() => {
        selectRef.value.focus()
      })
    }
    /**
     * 值改变时的回调函数
     * @param val
     */
    const onChange = (val: any) => {
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if (props.column?.onChange) {
        //值改变的回调函数
        props.column?.onChange.call(proxy, val, props.row?.$index, dataForm.tableData[props.row?.$index])
      }
    }
    const defaultEvent = {
      onChange: (val: any) => onChange(val)
    }
    return () => {
      const ElDatePicker = ElComponents.get("ElDatePicker")
      let valueFormat = props.componentAttr!.type === 'datetime' ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
      if (props.componentAttr!.valueFormat) {
        valueFormat = props.componentAttr!.valueFormat
      }
      return <Controller onGetFocus={getFocus} v-model={value.value} updateOperate={props.updateOperate}
                         column={props.column}
                         row={props.row}>
        <ElDatePicker style="width: 100%" ref={selectRef}
                      valueFormat={valueFormat} {...props.componentAttr} {...defaultEvent} v-model={value.value}>
        </ElDatePicker>
      </Controller>
    }
  }
})
</script>

<style scoped>

</style>