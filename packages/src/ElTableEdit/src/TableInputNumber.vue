<script lang="tsx">
import {ElInputNumber} from "element-plus";
import {defineComponent, getCurrentInstance, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import {dataForm, setTableRowUpdate} from "./hooks/TableDataHook";

export default defineComponent({
  name: 'TableInputNumber',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const { proxy }  = getCurrentInstance() as any;
    //显示字段值
    const value = ref(props.modelValue)
    //选择对象的dom
    const inputRef = ref()
    watch(
        () => value.value,
        (newValue) => {
          emit("update:modelValue", newValue)
        },
        {deep: true, immediate: true}
    );
    /**
     * 当编辑事件触发时自动获取光标
     */
    const getFocus = () => {
      nextTick(()=>{
        inputRef.value.focus()
      })
    }
    /**
     * 值改变时的回调函数
     * @param val
     */
    const onChange = (val: number | any)=>{
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if(props.column?.onChange){
        //值改变的回调函数
        props.column?.onChange.call(proxy,val,props.row?.$index,dataForm.tableData[props.row?.$index])
      }
    }
    return () => {
      return <Controller onGetFocus={getFocus} v-model={value.value} updateOperate={props.updateOperate} column={props.column}
                         row={props.row}>
        <ElInputNumber ref={inputRef} {...props.componentAttr} onChange={(val: number | any)=> onChange(val)} v-model={value.value}></ElInputNumber>
      </Controller>
    }
  }
})
</script>

<style scoped>

</style>