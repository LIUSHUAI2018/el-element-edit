"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const controllerProps = {
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
  updateOperate: {
    type: String,
    required: true
  },
  column: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  cellHeight: {
    type: String,
    default: "32px"
  }
};
exports.controllerProps = controllerProps;