<script lang="tsx">
import {ElInput} from "element-plus";
import {defineComponent, getCurrentInstance, inject, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import {isEqual} from "lodash-es";


export default defineComponent({
  name: 'TableInput',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const {dataForm, setTableRowUpdate} = inject('tableVariable') as any
    const {proxy} = getCurrentInstance() as any;
    const value = ref()
    const inputRef = ref()
    watch(
        () => value.value,
        (newValue) => {
          if(isEqual(newValue,props.modelValue)){
            return;
          }
          emit("update:modelValue", newValue)
        }
    );
    watch(()=> props.modelValue,(newValue)=>{
      if(isEqual(newValue,value.value)){
        return;
      }
      if(newValue){
        value.value = newValue
      }else{
        value.value = ''
      }
    },{immediate: true})
    /**
     * 让文本框获取焦点
     */
    const getFocus = () => {
      nextTick(() => {
        inputRef.value.focus()
      })
    }
    /**
     * 值改变时的回调函数
     * @param val
     */
    const onChange = (val: string | number) => {
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if (props.column?.onChange) {
        //值改变的回调函数
        props.column?.onChange.call(proxy, val, props.row?.$index, dataForm.tableData[props.row?.$index])
      }
    }
    return () => {
      let modifier:string[] = []
      if(props.column!.modifier && props.column!.modifier.length > 0){
        modifier = props.column!.modifier
      }

      return <Controller onGetFocus={getFocus} cellHeight={props.cellHeight} v-model={value.value}
                         updateOperate={props.updateOperate}
                         column={props.column} row={props.row}>
        <ElInput style="width: 100%" ref={inputRef} {...props.componentAttr}
                 onChange={(val: number | string) => onChange(val)} v-model={[value.value,'modelValue',modifier]}></ElInput>
      </Controller>
    }
  }
})
</script>

<style scoped>

</style>