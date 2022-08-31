import { defineComponent, getCurrentInstance, ref, watch, nextTick } from "vue";
import _sfc_main$1 from "./Controller.vue_vue_type_script_lang.js";
import { componentProps } from "./type/ConponentTypes.js";
import { setTableRowUpdate, dataForm } from "./hooks/TableDataHook.js";
import { ElSelect, ElOption } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/select/index.js";
const _sfc_main = defineComponent({
  name: "TableSelect",
  props: componentProps,
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const label = ref("");
    const value = ref(props.modelValue);
    const selectRef = ref();
    watch(
      () => value.value,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true, immediate: true }
    );
    const getFocus = () => {
      nextTick(() => {
        selectRef.value.$el.click();
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
      var _a, _b;
      let structure = {
        label: "label",
        value: "value"
      };
      if (props.componentAttr.props) {
        structure = props.componentAttr.props;
      }
      let options = (_a = props.componentAttr) == null ? void 0 : _a.options.value;
      if (!options) {
        console.warn(`${(_b = props.column) == null ? void 0 : _b.label}'options'\u4E0D\u80FD\u4E3A\u7A7A`);
        return /* @__PURE__ */ React.createElement("div", null);
      }
      if (value.value) {
        let obj = options.find((res) => res[structure.value] == value.value);
        label.value = obj ? obj[structure.label] : "";
      }
      return /* @__PURE__ */ React.createElement(_sfc_main$1, {
        onGetFocus: getFocus,
        "v-model": label.value,
        updateOperate: props.updateOperate,
        column: props.column,
        row: props.row
      }, /* @__PURE__ */ React.createElement(ElSelect, {
        ref: selectRef,
        ...props.componentAttr,
        onChange: (val) => onChange(val),
        "v-model": value.value
      }, options.map((res) => {
        return /* @__PURE__ */ React.createElement(ElOption, {
          key: res[structure.value],
          label: res[structure.label],
          value: res[structure.value] + ""
        });
      })));
    };
  }
});
export {
  _sfc_main as default
};
