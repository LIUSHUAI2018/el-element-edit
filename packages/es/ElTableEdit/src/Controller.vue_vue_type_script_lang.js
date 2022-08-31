import { defineComponent, ref } from "vue";
import { OnClickOutside } from "../../node_modules/.pnpm/registry.npmmirror.com_@vueuse_components@9.1.1_vue@3.2.38/node_modules/@vueuse/components/index.js";
import { controllerProps } from "./type/ControllerTypes.js";
import { dataForm, errorField, errorFieldValues, formRef } from "./hooks/TableDataHook.js";
import { Warning as warning_default } from "../../node_modules/.pnpm/registry.npmmirror.com_@element-plus_icons-vue@2.0.9_vue@3.2.38/node_modules/@element-plus/icons-vue/dist/index.js";
import { ElTooltip } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/tooltip/index.js";
import { ElMessage } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/message/index.js";
const _sfc_main = defineComponent({
  name: "Controller",
  props: controllerProps,
  emits: ["getFocus"],
  setup(props, { slots, emit }) {
    var _a, _b, _c;
    const updateOperate = ref(dataForm.tableData[props.row.$index][props.updateOperate]);
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
      formRef.value.validateField(prop, (isValid, invalidFields) => {
        if (isValid) {
          let index = updateOperate.value.findIndex((res) => res === property);
          updateOperate.value.splice(index, 1);
        } else {
          ElMessage({
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
      if (errorField.value.includes(prop)) {
        let error = "";
        for (const errors of errorFieldValues.value) {
          let find = errors.find((res) => res.field === prop);
          if (find) {
            error = find.message;
          }
        }
        return /* @__PURE__ */ React.createElement(ElTooltip, {
          content: error
        }, /* @__PURE__ */ React.createElement("div", {
          class: "edit-table-column-verify"
        }, /* @__PURE__ */ React.createElement("el-icon", {
          color: "#FF0000"
        }, /* @__PURE__ */ React.createElement(warning_default, null))));
      }
      return /* @__PURE__ */ React.createElement("div", null);
    };
    const attr = {
      onTrigger: (el) => cancel(el)
    };
    const render = () => {
      var _a2;
      if (updateOperate.value.includes(property)) {
        return /* @__PURE__ */ React.createElement(OnClickOutside, {
          ...attr
        }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      }
      return /* @__PURE__ */ React.createElement("div", {
        class: "edit-table-column",
        onClick: () => editField()
      }, /* @__PURE__ */ React.createElement("div", {
        class: "edit-table-column-value",
        style: { height: props.cellHeight }
      }, /* @__PURE__ */ React.createElement("span", null, props.modelValue)), verifyIcon());
    };
    return render;
  }
});
export {
  _sfc_main as default
};
