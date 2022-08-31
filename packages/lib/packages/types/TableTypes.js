"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const tableProps = {
  modelValue: {
    type: Array,
    default: [],
    required: true
  },
  columns: {
    type: Array,
    default: [],
    required: true
  },
  editFlag: {
    type: String,
    default: "$edit"
  },
  updateOperate: {
    type: String,
    default: "$updateOperate"
  },
  tableAttr: {
    type: Object
  },
  cellHeight: {
    type: String,
    default: "32px"
  }
};
var EditFlagEnum = /* @__PURE__ */ ((EditFlagEnum2) => {
  EditFlagEnum2["ORIGINAL"] = "original";
  EditFlagEnum2["ADD"] = "add";
  EditFlagEnum2["UPDATE"] = "update";
  EditFlagEnum2["REMOVE"] = "remove";
  return EditFlagEnum2;
})(EditFlagEnum || {});
exports.EditFlagEnum = EditFlagEnum;
exports.tableProps = tableProps;
