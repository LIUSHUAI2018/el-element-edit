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
export {
  controllerProps
};
