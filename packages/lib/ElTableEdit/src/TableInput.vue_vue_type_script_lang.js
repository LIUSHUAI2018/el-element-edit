"use strict";
const vue = require("vue");
const Controller_vue_vue_type_script_lang = require("./Controller.vue_vue_type_script_lang.js");
const ConponentTypes = require("./type/ConponentTypes.js");
const TableDataHook = require("./hooks/TableDataHook.js");
const index = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/input/index.js");
const _sfc_main = vue.defineComponent({
  name: "TableInput",
  props: ConponentTypes.componentProps,
  setup(props, {
    emit
  }) {
    const {
      proxy
    } = vue.getCurrentInstance();
    const value = vue.ref(props.modelValue);
    const inputRef = vue.ref();
    vue.watch(() => value.value, (newValue) => {
      emit("update:modelValue", newValue);
    }, {
      deep: true,
      immediate: true
    });
    const getFocus = () => {
      vue.nextTick(() => {
        inputRef.value.focus();
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
      return vue.createVNode(Controller_vue_vue_type_script_lang, {
        "onGetFocus": getFocus,
        "cellHeight": props.cellHeight,
        "modelValue": value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        "updateOperate": props.updateOperate,
        "column": props.column,
        "row": props.row
      }, {
        default: () => [vue.createVNode(index.ElInput, vue.mergeProps({
          "style": "width: 100%",
          "ref": inputRef
        }, props.componentAttr, {
          "onChange": (val) => onChange(val),
          "modelValue": value.value,
          "onUpdate:modelValue": ($event) => value.value = $event
        }), null)]
      });
    };
  }
});
module.exports = _sfc_main;
