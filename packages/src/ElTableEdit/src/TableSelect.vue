<script lang="tsx">
import ElComponents from "../../../types/install";
import {defineComponent, getCurrentInstance, inject, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import {isEqual} from "lodash-es";


export default defineComponent({
  name: 'TableSelect',
  props: componentProps,
  setup(props: ComponentProps, {emit}) {
    const {dataForm, setTableRowUpdate} = inject('tableVariable') as any
    const {proxy} = getCurrentInstance() as any;

    //显示字段名
    const label = ref('')
    //显示字段值
    const value = ref()
    //选择对象的dom
    const selectRef = ref()
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
     * 当编辑事件触发时自动显示下拉菜单
     */
    const getFocus = () => {
      nextTick(() => {
        selectRef.value.$el.click()
      })
    }
    /**
     * 值改变时的回调函数
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
      const ElSelect = ElComponents.get("ElSelect")
      const ElOption = ElComponents.get("ElOption")
      let structure = {
        label: 'label',
        value: 'value'
      }
      if (props.componentAttr!.props) {
        structure = props.componentAttr!.props
      }
      let options = props.componentAttr?.options.value
      if (!options) {
        console.warn(`${props.column?.label}'options'不能为空`);
        return <div></div>
      }

      if (value.value) {
        let obj = options.find((res: any) => res[structure.value] == value.value)
        label.value = obj ? obj[structure.label] : ''
      }
      return <Controller onGetFocus={getFocus} v-model={label.value} updateOperate={props.updateOperate}
                         column={props.column}
                         row={props.row}>
        <ElSelect ref={selectRef} {...props.componentAttr} onChange={(val: number | string | boolean) => onChange(val)}
                  v-model={value.value}>
          {
            options.map((res: any) => {
              if(props.componentAttr!.toNumber){
                res[structure.value] = Number.parseInt(res[structure.value])
              }
              return <ElOption style="width: 100%" key={res[structure.value]} label={res[structure.label]}
                               value={res[structure.value]}>
              </ElOption>
            })
          }

        </ElSelect>
      </Controller>
    }
  }
})
</script>

<style lang="scss">

</style>