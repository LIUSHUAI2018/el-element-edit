"use strict";
const vue = require("vue");
const ComponentMap = require("./ComponentMap.js");
const TableTypes = require("../../packages/types/TableTypes.js");
const TableDataHook = require("./hooks/TableDataHook.js");
const index = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/message/index.js");
const index$1 = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/form/index.js");
const index$2 = require("../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.2.15_vue@3.2.38/node_modules/element-plus/es/components/table/index.js");
const _sfc_main = vue.defineComponent({
  name: "ElTableEdit",
  props: TableTypes.tableProps,
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const getComponent = (scope, item) => {
      let dynamicComponents = ComponentMap.get(item.component);
      return vue.createVNode(dynamicComponents, {
        "cellHeight": props.cellHeight,
        "updateOperate": props.updateOperate,
        "column": item,
        "componentAttr": item.componentAttr ? item.componentAttr : {},
        "row": scope,
        "modelValue": TableDataHook.dataForm.tableData[scope.$index][item.prop],
        "onUpdate:modelValue": ($event) => TableDataHook.dataForm.tableData[scope.$index][item.prop] = $event
      }, null);
    };
    const formItem = (scope, item) => {
      let prop = `tableData.${scope.$index}.${scope.column.property}`;
      return vue.createVNode(index$1.ElFormItem, vue.mergeProps({
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
        TableDataHook.formRef.value.validate((isValid, invalidFields) => {
          if (isValid) {
            TableDataHook.errorField.value = [];
            TableDataHook.errorFieldValues.value = [];
            resolve(200);
          } else {
            let errorKeys = Object.keys(invalidFields);
            let errorValues = Object.values(invalidFields);
            TableDataHook.errorField.value = errorKeys;
            TableDataHook.errorFieldValues.value = errorValues;
            index.ElMessage({
              message: errorValues[0][0].message,
              type: "warning"
            });
          }
        });
      });
    };
    expose({
      validate,
      setTableField: TableDataHook.setTableField,
      addAll: TableDataHook.addAll,
      add: TableDataHook.add,
      remove: TableDataHook.remove,
      setTableRowUpdate: TableDataHook.setTableRowUpdate
    });
    const render = () => {
      TableDataHook.dataInit(props, emit);
      return vue.createVNode(index$1.ElForm, {
        "class": "el-edit-table",
        "ref": TableDataHook.formRef,
        "showMessage": false,
        "model": TableDataHook.dataForm
      }, {
        default: () => [vue.createVNode(index$2.ElTable, vue.mergeProps(props.tableAttr, {
          "data": TableDataHook.dataForm.tableData
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
              return vue.createVNode(index$2.ElTableColumn, vue.mergeProps(items, {
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
module.exports = _sfc_main;
