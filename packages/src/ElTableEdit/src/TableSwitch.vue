<script lang="tsx">
import {ElSwitch} from "element-plus";
import {defineComponent, getCurrentInstance, inject, ref, watch} from "vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";

export default defineComponent({
  name: 'TableSwitch',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const {dataForm, setTableRowUpdate} = inject('tableVariable') as any
    const value = ref(props.modelValue)
    const {proxy} = getCurrentInstance() as any;
    watch(
        () => value.value,
        (newValue) => {
          emit("update:modelValue", newValue)
        },
        {deep: true, immediate: true}
    );
    /**
     * 开关改变时的回调函数
     * @param val
     */
    const onChange = (val: string | number | boolean) => {
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if (props.column?.onChange) {
        //值改变的回调函数
        props.column?.onChange.call(proxy, val, props.row?.$index, dataForm.tableData[props.row?.$index])
      }
    }
    return () => {
      if (!props.componentAttr!.activeValue) {
        props.componentAttr!.activeValue = 1
      }
      if (!props.componentAttr!.inactiveValue) {
        props.componentAttr!.inactiveValue = 2
      }
      if (!value.value) {
        //如果没有设置默认值则默认开启
        value.value = props.componentAttr!.activeValue
      }
      let classObject = `table-switch table-switch-${props.column?.align}`
      return <div class={classObject} >
        <ElSwitch  {...props.componentAttr} onChange={(val: number | string | boolean) => onChange(val)}
                   v-model={value.value}></ElSwitch>
      </div>
    }
  }
})
</script>

<style scoped>
.table-switch{
  width: 100%;
  height: 100%;
  display: flex;
}
.table-switch-center{
  justify-content: center;
}
.table-switch-left{
  justify-content: flex-start;
}
.table-switch-right{
  justify-content: flex-end;
}
</style>