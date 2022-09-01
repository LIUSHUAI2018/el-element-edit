import { defineComponent, createVNode, mergeProps } from "vue";
import componentMap from "./ComponentMap.js";
import { tableProps } from "../../packages/types/TableTypes.js";
import { setTableField, addAll, add, remove, setTableRowUpdate, formRef, errorField, errorFieldValues, dataInit, dataForm } from "./hooks/TableDataHook.js";
import { ElMessage } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/message/index.js";
import { ElForm, ElFormItem } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/form/index.js";
import { ElTable, ElTableColumn } from "../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/table/index.js";
const _sfc_main = defineComponent({
  name: "ElTableEdit",
  props: tableProps,
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const getComponent = (scope, item) => {
      let dynamicComponents = componentMap.get(item.component);
      return createVNode(dynamicComponents, {
        "cellHeight": props.cellHeight,
        "updateOperate": props.updateOperate,
        "column": item,
        "componentAttr": item.componentAttr ? item.componentAttr : {},
        "row": scope,
        "modelValue": dataForm.tableData[scope.$index][item.prop],
        "onUpdate:modelValue": ($event) => dataForm.tableData[scope.$index][item.prop] = $event
      }, null);
    };
    const formItem = (scope, item) => {
      let prop = `tableData.${scope.$index}.${scope.column.property}`;
      return createVNode(ElFormItem, mergeProps({
        "label": ""
      }, item.itemAttr, {
        "prop": prop,
        "rules": item.rules
      }), {
        default: () => {
          return getComponent(scope, item);
        }
      });
    };
    const validate = () => {
      return new Promise((resolve) => {
        formRef.value.validate((isValid, invalidFields) => {
          if (isValid) {
            errorField.value = [];
            errorFieldValues.value = [];
            resolve(200);
          } else {
            let errorKeys = Object.keys(invalidFields);
            let errorValues = Object.values(invalidFields);
            errorField.value = errorKeys;
            errorFieldValues.value = errorValues;
            ElMessage({
              message: errorValues[0][0].message,
              type: "warning"
            });
          }
        });
      });
    };
    expose({
      validate,
      setTableField,
      addAll,
      add,
      remove,
      setTableRowUpdate
    });
    const render = () => {
      dataInit(props, emit);
      return createVNode(ElForm, {
        "class": "el-edit-table",
        "ref": formRef,
        "showMessage": false,
        "model": dataForm
      }, {
        default: () => [createVNode(ElTable, mergeProps(props.tableAttr, {
          "data": dataForm.tableData
        }), {
          default: () => {
            var _a;
            return [(_a = props.columns) == null ? void 0 : _a.map((item) => {
              let items = {
                type: item.type,
                index: item.index,
                columnKey: item.columnKey,
                minWidth: item.minWidth,
                fixed: item.fixed,
                renderHeader: item.renderHeader,
                align: item.align,
                width: item.width,
                headerAlign: item.renderHeader
              };
              return createVNode(ElTableColumn, mergeProps(items, {
                "prop": item.prop,
                "label": item.label
              }), {
                default: (scope) => {
                  var _a2;
                  if (item.custom) {
                    return (_a2 = slots[item.custom]) == null ? void 0 : _a2.call(slots, scope, item);
                  }
                  return formItem(scope, item);
                }
              });
            })];
          }
        })]
      });
    };
    return render;
  }
});
export {
  _sfc_main as default
};
