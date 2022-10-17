<script lang="tsx">
import ElComponents from "../../../types/install";
import {defineComponent, getCurrentInstance, inject, nextTick, ref, watch} from "vue";
import Controller from "./Controller.vue";
import {componentProps, ComponentProps} from "./type/ConponentTypes";
import {isEqual} from "lodash-es";
import {Props, TableRow} from "/#/TableTypes";


export default defineComponent({
  name: 'TableSelectTree',
  props: componentProps,
  setup(props: ComponentProps, {emit, slots}) {
    const {dataForm, setTableRowUpdate} = inject('tableVariable') as any
    const {proxy} = getCurrentInstance() as any;

    //显示字段名
    const label = ref('')
    //显示字段值
    const value = ref()
    //选择对象的dom
    const selectRef = ref()
    //key值列表
    const keys = ref<string[] | number[] | boolean[] | unknown[]>([])
    watch(
        () => value.value,
        (newValue) => {
          if (isEqual(newValue, props.modelValue)) {
            return;
          }
          emit("update:modelValue", newValue)
        }
    );
    watch(() => props.modelValue, (newValue) => {
      if (isEqual(newValue, value.value)) {
        return;
      }
      if (newValue) {
        value.value = newValue
      } else {
        value.value = ''
      }
    }, {immediate: true})
    /**
     * 当编辑事件触发时自动显示下拉菜单
     */
    const getFocus = () => {
      nextTick(() => {
        selectRef.value.$el.click()
        if (props.modelValue && props.modelValue instanceof Array) {
          keys.value = props.modelValue
        } else {
          keys.value = [props.modelValue]
        }
      })
    }
    /**
     * 值改变时的回调函数
     * @param val
     */
    const onChange = (val: string | number | boolean, structure: Props) => {
      //设置label显示
      // let obj = getTreeLabel(props.componentAttr?.options.value, val, structure)
      // label.value = obj
      //设置状态为修改
      setTableRowUpdate(props.row?.$index)
      if (props.column?.onChange) {
        //值改变的回调函数
        props.column?.onChange.call(proxy, val, props.row?.$index, dataForm.tableData[props.row?.$index])
      }
    }
    const getTreeLabel = (options: any, value: string | number | boolean, structure: Props): string => {
      if (options && options.length > 0) {
        for (const option of options) {
          if (option[structure.value] == value) {
            return option[structure.label]
          } else if (option[structure.children!]) {
            let res = getTreeLabel(option[structure.children!], value, structure)
            if (res) {
              return res
            }
          }
        }
      }
      return ''
    }
    return () => {
      const ElTreeSelect = ElComponents.get("ElTreeSelect")
      let structure = {
        label: 'label',
        value: 'value',
        children: 'children'
      }
      if (props.componentAttr!.props) {
        structure = {
          ...structure,
          ...props.componentAttr!.props
        }
      }
      let options = props.componentAttr?.options.value
      if (!options) {
        console.warn(`${props.column?.label}'options'不能为空`);
        return <div></div>
      }

      if (value.value) {
        let obj = getTreeLabel(options, value.value, structure)
        label.value = obj
      }
      return <Controller onGetFocus={getFocus}  v-model={label.value} updateOperate={props.updateOperate}
                         column={props.column}
                         row={props.row}>
        <ElTreeSelect  ref={selectRef} {...props.componentAttr} node-key={structure.value} default-expanded-keys={keys.value} data={props.componentAttr?.options.value}
                      onChange={(val: number | string | boolean) => onChange(val, structure)}
                      v-model={value.value}>
          {{
            default: ({node, data}: any) => {
              if (props.column!.treeCustom) {
                return slots[props.column!.treeCustom]?.({node, data})
              }
              return <span>{node.label}</span>
            }
          }}
        </ElTreeSelect>
      </Controller>
    }
  }
})
</script>

<style lang="scss">

</style>