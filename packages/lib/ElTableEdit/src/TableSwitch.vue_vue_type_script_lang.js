"use strict";
const vue = require("vue");
const ConponentTypes = require("./type/ConponentTypes.js");
const TableDataHook = require("./hooks/TableDataHook.js");
const index = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/switch/index.js");
const _sfc_main = vue.defineComponent({
  name: "TableSwitch",
  props: ConponentTypes.componentProps,
  setup(props, { emit }) {
    const value = vue.ref(props.modelValue);
    const { proxy } = vue.getCurrentInstance();
    vue.watch(
      () => value.value,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true, immediate: true }
    );
    const onChange = (val) => {
      var _a, _b, _c, _d, _e;
      TableDataHook.setTableRowUpdate((_a = props.row) == null ? void 0 : _a.$index);
      if ((_b = props.column) == null ? void 0 : _b.onChange) {
        (_e = props.column) == null ? void 0 : _e.onChange.call(proxy, val, (_c = props.row) == null ? void 0 : _c.$index, TableDataHook.dataForm.tableData[(_d = props.row) == null ? void 0 : _d.$index]);
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
      return /* @__PURE__ */ React.createElement(index.ElSwitch, {
        ...props.componentAttr,
        onChange: (val) => onChange(val),
        "v-model": value.value
      });
    };
  }
});
module.exports = _sfc_main;
