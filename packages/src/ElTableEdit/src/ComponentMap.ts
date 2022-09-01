import TableInput from './TableInput.vue'
import TableSelect from './TableSelect.vue'
import TableSwitch from './TableSwitch.vue'
import InputNumber from './TableInputNumber.vue'
import TableDate from './TableDate.vue'

const componentMap = new Map();
componentMap.set('Input',TableInput)
componentMap.set('Select',TableSelect)
componentMap.set("Switch",TableSwitch)
componentMap.set("InputNumber",InputNumber)
componentMap.set("Date",TableDate)

export default componentMap