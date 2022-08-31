"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const componentProps = {
  row: {
    type: Object,
    default: () => {
      return {
        $index: -1,
        column: {
          property: ""
        }
      };
    },
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: "",
    required: true
  },
  updateOperate: {
    type: String,
    required: true
  },
  componentAttr: {
    type: Object,
    required: true
  },
  column: {
    type: Object,
    required: true
  },
  cellHeight: {
    type: String,
    default: "32px"
  }
};
exports.componentProps = componentProps;
