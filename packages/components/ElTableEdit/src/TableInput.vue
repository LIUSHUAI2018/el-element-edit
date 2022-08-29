<script lang="tsx">
import {ElInput} from "element-plus";
import {defineComponent, getCurrentInstance, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import {dataForm, setTableRowUpdate} from "./hooks/TableDataHook";

export default defineComponent({
  name: 'TableInput',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const { proxy }  = getCurrentInstance() as any;
    const value = ref(props.modelValue)
    const inputRef = ref()
    watch(
        () => value.value,
        (newValue) => {
          emit("update:modelValue", newValue)
        },
        {deep: true, immediate: true}
    );
    /**
     * 让文本框获取焦点
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
    const onChange = (val: string | number)=>{
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if(props.column?.onChange){
        //值改变的回调函数
        props.column?.onChange.call(proxy,val,props.row?.$index,dataForm.tableData[props.row?.$index])
      }
    }
    return () => {
      return <Controller onGetFocus={getFocus} cellHeight={props.cellHeight} v-model={value.value} updateOperate={props.updateOperate}
                         column={props.column} row={props.row}>
        <ElInput ref={inputRef} {...props.componentAttr} onChange={(val: number | string )=> onChange(val)} v-model={value.value}></ElInput>
      </Controller>
    }
  }
})
</script>

<style scoped>

</style>