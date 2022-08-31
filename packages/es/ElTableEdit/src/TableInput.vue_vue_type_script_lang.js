import { defineComponent, getCurrentInstance, ref, watch, nextTick } from "vue";
import _sfc_main$1 from "./Controller.vue_vue_type_script_lang.js";
import { componentProps } from "./type/ConponentTypes.js";
import { setTableRowUpdate, dataForm } from "./hooks/TableDataHook.js";
import { ElInput } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/input/index.js";
const _sfc_main = defineComponent({
  name: "TableInput",
  props: componentProps,
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const value = ref(props.modelValue);
    const inputRef = ref();
    watch(
      () => value.value,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true, immediate: true }
    );
    const getFocus = () => {
      nextTick(() => {
        inputRef.value.focus();
      });
    };
    const onChange = (val) => {
      var _a, _b, _c, _d, _e;
      setTableRowUpdate((_a = props.row) == null ? void 0 : _a.$index);
      if ((_b = props.column) == null ? void 0 : _b.onChange) {
        (_e = props.column) == null ? void 0 : _e.onChange.call(proxy, val, (_c = props.row) == null ? void 0 : _c.$index, dataForm.tableData[(_d = props.row) == null ? void 0 : _d.$index]);
      }
    };
    return () => {
      return /* @__PURE__ */ React.createElement(_sfc_main$1, {
        onGetFocus: getFocus,
        cellHeight: props.cellHeight,
        "v-model": value.value,
        updateOperate: props.updateOperate,
        column: props.column,
        row: props.row
      }, /* @__PURE__ */ React.createElement(ElInput, {
        ref: inputRef,
        ...props.componentAttr,
        onChange: (val) => onChange(val),
        "v-model": value.value
      }));
    };
  }
});
export {
  _sfc_main as default
};