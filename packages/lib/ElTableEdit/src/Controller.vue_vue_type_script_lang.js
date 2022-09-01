"use strict";
const vue = require("vue");
const index = require("../../node_modules/.pnpm/registry.npmmirror.com_@vueuse_components@9.1.1_vue@3.2.38/node_modules/@vueuse/components/index.js");
const ControllerTypes = require("./type/ControllerTypes.js");
const TableDataHook = require("./hooks/TableDataHook.js");
const index$2 = require("../../node_modules/.pnpm/registry.npmmirror.com_@element-plus_icons-vue@2.0.9_vue@3.2.38/node_modules/@element-plus/icons-vue/dist/index.js");
const index$1 = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/tooltip/index.js");
const index$3 = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/message/index.js");
const _sfc_main = vue.defineComponent({
  name: "Controller",
  props: ControllerTypes.controllerProps,
  emits: ["getFocus"],
  setup(props, {
    slots,
    emit
  }) {
    var _a, _b, _c;
    const updateOperate = vue.ref(TableDataHook.dataForm.tableData[props.row.$index][props.updateOperate]);
    const property = (_a = props.row) == null ? void 0 : _a.column.property;
    const clickClass = ["el-popper is-pure is-light el-picker__popper", "el-tree table-select-tree", "el-scrollbar__view el-select-dropdown__list"];
    const prop = `tableData.${(_b = props.row) == null ? void 0 : _b.$index}.${(_c = props.row) == null ? void 0 : _c.column.property}`;
    const cancel = (el) => {
      let classList = el.path.map((res) => {
        return res.className;
      });
      for (let item of classList) {
        if (clickClass.includes(item)) {
          return;
        }
      }
      TableDataHook.formRef.value.validateField(prop, (isValid, invalidFields) => {
        if (isValid) {
          let index2 = updateOperate.value.findIndex((res) => res === property);
          updateOperate.value.splice(index2, 1);
        } else {
          index$3.ElMessage({
            message: invalidFields[prop][0].message,
            type: "warning"
          });
        }
      });
    };
    const editField = () => {
      updateOperate.value.push(property);
      emit("getFocus");
    };
    const verifyIcon = () => {
      if (TableDataHook.errorField.value.includes(prop)) {
        let error = "";
        for (const errors of TableDataHook.errorFieldValues.value) {
          let find = errors.find((res) => res.field === prop);
          if (find) {
            error = find.message;
          }
        }
        return vue.createVNode(index$1.ElTooltip, {
          "content": error
        }, {
          default: () => [vue.createVNode("div", {
            "class": "edit-table-column-verify"
          }, [vue.createVNode(vue.resolveComponent("el-icon"), {
            "color": "#FF0000"
          }, {
            default: () => [vue.createVNode(index$2.Warning, null, null)]
          })])]
        });
      }
      return vue.createVNode("div", null, null);
    };
    const attr = {
      onTrigger: (el) => cancel(el)
    };
    const render = () => {
      if (updateOperate.value.includes(property)) {
        return vue.createVNode(index.OnClickOutside, attr, {
          default: () => {
            var _a2;
            return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
          }
        });
      }
      return vue.createVNode("div", {
        "class": "edit-table-column",
        "onClick": () => editField()
      }, [vue.createVNode("div", {
        "class": "edit-table-column-value",
        "style": {
          height: props.cellHeight
        }
      }, [vue.createVNode("span", null, [props.modelValue])]), verifyIcon()]);
    };
    return render;
  }
});
module.exports = _sfc_main;
