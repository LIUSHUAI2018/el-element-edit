"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const TableTypes = require("../../../packages/types/TableTypes.js");
const isEqual = require("../../../node_modules/.pnpm/registry.npmmirror.com_lodash-es@4.17.21/node_modules/lodash-es/isEqual.js");
const cloneDeep = require("../../../node_modules/.pnpm/registry.npmmirror.com_lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js");
const dataForm = vue.reactive({
  tableData: []
});
const removeList = vue.ref([]);
const errorField = vue.ref([]);
const errorFieldValues = vue.ref([]);
const formRef = vue.ref();
const updateOperate = vue.ref("");
const editFlag = vue.ref("");
function initData(props, modelValue, isInit = true) {
  let dataList = [];
  updateOperate.value = props.updateOperate;
  editFlag.value = props.editFlag;
  modelValue.forEach((res) => {
    if (!res) {
      res = {};
    }
    if (!res[props.updateOperate]) {
      res[props.updateOperate] = [];
    }
    if (!res[props.editFlag] || isInit) {
      res[props.editFlag] = TableTypes.EditFlagEnum.ORIGINAL;
    }
    if (isInit) {
      removeList.value = [];
      errorField.value = [];
    }
    dataList.push(res);
  });
  dataForm.tableData = cloneDeep(dataList);
}
function dataInit(props, emit) {
  initData(props, props.modelValue);
  vue.watch(
    () => dataForm.tableData,
    (newValue) => {
      console.log(newValue[0].birthday, "\u751F\u65E5");
      console.log(newValue, "\u5177\u4F53\u5BF9\u8C61");
      if (isEqual(newValue, props.modelValue)) {
        return;
      }
      console.log(newValue, "\u8FDB\u5165");
      emit("update:modelValue", newValue);
    },
    {
      deep: true,
      immediate: true
    }
  );
}
function setTableField(index, prop, value) {
  if (!dataForm.tableData) {
    console.error("\u8868\u683C\u6570\u636E\u4E0D\u5B58\u5728");
    return;
  }
  if (index >= dataForm.tableData.length) {
    console.error("\u8BBE\u7F6E\u4E0B\u6807\u8FC7\u5927\u8BF7\u68C0\u67E5:", index);
    return;
  }
  if (!prop) {
    console.error("prop\u672A\u5B9A\u4E49", prop);
    return;
  }
  dataForm.tableData[index][prop] = value;
}
function add(row) {
  if (row instanceof Object && Object.getPrototypeOf(row) === Object.prototype) {
    row[updateOperate.value] = [];
    row[editFlag.value] = TableTypes.EditFlagEnum.ADD;
    dataForm.tableData.push(row);
  } else {
    console.error("add\u65B9\u6CD5\u53C2\u6570\u53EA\u80FD\u662F\u5BF9\u8C61");
  }
}
function addAll(rows) {
  if (rows instanceof Array) {
    rows.forEach((row) => {
      row[updateOperate.value] = [];
      row[editFlag.value] = TableTypes.EditFlagEnum.ADD;
    });
    dataForm.tableData.push(...rows);
  } else {
    console.error("addAll\u65B9\u6CD5\u53C2\u6570\u53EA\u80FD\u662F\u5BF9\u8C61\u6570\u7EC4");
  }
}
function remove(index) {
  if (index < 0 || index >= dataForm.tableData.length) {
    console.error("romove\u65B9\u6CD5\u6570\u7EC4\u4E0B\u6807\u8D8A\u754C");
    return;
  }
  let row = dataForm.tableData[index];
  row[editFlag.value] = TableTypes.EditFlagEnum.REMOVE;
  removeList.value.push(row);
  dataForm.tableData.splice(index, 1);
}
function setTableRowUpdate(index, isCoerce = false) {
  let flag = dataForm.tableData[index][editFlag.value];
  if (isCoerce || flag === TableTypes.EditFlagEnum.ORIGINAL) {
    dataForm.tableData[index][editFlag.value] = TableTypes.EditFlagEnum.UPDATE;
  }
}
exports.add = add;
exports.addAll = addAll;
exports.dataForm = dataForm;
exports.dataInit = dataInit;
exports.editFlag = editFlag;
exports.errorField = errorField;
exports.errorFieldValues = errorFieldValues;
exports.formRef = formRef;
exports.remove = remove;
exports.removeList = removeList;
exports.setTableField = setTableField;
exports.setTableRowUpdate = setTableRowUpdate;
exports.updateOperate = updateOperate;
