import TableInput from './TableInput.vue'
import TableSelect from './TableSelect.vue'
import TableSwitch from './TableSwitch.vue'
import InputNumber from './TableInputNumber.vue'

const componentMap = new Map();
componentMap.set('Input',TableInput)
componentMap.set('Select',TableSelect)
componentMap.set("Switch",TableSwitch)
componentMap.set("InputNumber",InputNumber)

export default componentMap