"use strict";
const vue = require("vue");
const Controller_vue_vue_type_script_lang = require("./Controller.vue_vue_type_script_lang.js");
const ConponentTypes = require("./type/ConponentTypes.js");
const TableDataHook = require("./hooks/TableDataHook.js");
const index = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/select/index.js");
const _sfc_main = vue.defineComponent({
  name: "TableSelect",
  props: ConponentTypes.componentProps,
  setup(props, { emit }) {
    const { proxy } = vue.getCurrentInstance();
    const label = vue.ref("");
    const value = vue.ref(props.modelValue);
    const selectRef = vue.ref();
    vue.watch(
      () => value.value,
      (newValue) => {
        emit("update:modelValue", newValue);
      },
      { deep: true, immediate: true }
    );
    const getFocus = () => {
      vue.nextTick(() => {
        selectRef.value.$el.click();
      });
    };
    const onChange = (val) => {
      var _a, _b, _c, _d, _e;
      TableDataHook.setTableRowUpdate((_a = props.row) == null ? void 0 : _a.$index);
      if ((_b = props.column) == null ? void 0 : _b.onChange) {
        (_e = props.column) == null ? void 0 : _e.onChange.call(proxy, val, (_c = props.row) == null ? void 0 : _c.$index, TableDataHook.dataForm.tableData[(_d = props.row) == null ? void 0 : _d.$index]);
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
      return /* @__PURE__ */ React.createElement(Controller_vue_vue_type_script_lang, {
        onGetFocus: getFocus,
        "v-model": label.value,
        updateOperate: props.updateOperate,
        column: props.column,
        row: props.row
      }, /* @__PURE__ */ React.createElement(index.ElSelect, {
        ref: selectRef,
        ...props.componentAttr,
        onChange: (val) => onChange(val),
        "v-model": value.value
      }, options.map((res) => {
        return /* @__PURE__ */ React.createElement(index.ElOption, {
          key: res[structure.value],
          label: res[structure.label],
          value: res[structure.value] + ""
        });
      })));
    };
  }
});
module.exports = _sfc_main;
