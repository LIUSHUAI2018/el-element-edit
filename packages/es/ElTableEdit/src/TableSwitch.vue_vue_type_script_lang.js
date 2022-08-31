import { defineComponent, ref, getCurrentInstance, watch } from "vue";
import { componentProps } from "./type/ConponentTypes.js";
import { setTableRowUpdate, dataForm } from "./hooks/TableDataHook.js";
import { ElSwitch } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/switch/index.js";
const _sfc_main = defineComponent({
  name: "TableSwitch",
  props: componentProps,
  setup(props, { emit }) {
    const value = ref(props.modelValue);
    const { proxy } = getCurrentInstance();
    watch(
      () => value.value,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true, immediate: true }
    );
    const onChange = (val) => {
      var _a, _b, _c, _d, _e;
      setTableRowUpdate((_a = props.row) == null ? void 0 : _a.$index);
      if ((_b = props.column) == null ? void 0 : _b.onChange) {
        (_e = props.column) == null ? void 0 : _e.onChange.call(proxy, val, (_c = props.row) == null ? void 0 : _c.$index, dataForm.tableData[(_d = props.row) == null ? void 0 : _d.$index]);
      }
    };
    return () => {
      if (!props.componentAttr.activeValue) {
        props.componentAttr.activeValue = 1;
      }
      if (!props.componentAttr.inactiveValue) {
        props.componentAttr.inactiveValue = 2;
      }
      if (!value.value) {
        value.value = props.componentAttr.activeValue;
      }
      return /* @__PURE__ */ React.createElement(ElSwitch, {
        ...props.componentAttr,
        onChange: (val) => onChange(val),
        "v-model": value.value
      });
    };
  }
});
export {
  _sfc_main as default
};
