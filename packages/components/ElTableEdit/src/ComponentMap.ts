import TableInput from './TableInput.vue'
import TableSelect from './TableSelect.vue'
import TableSwitch from './TableSwitch.vue'

const componentMap = new Map();
componentMap.set('Input',TableInput)
componentMap.set('Select',TableSelect)
componentMap.set("Switch",TableSwitch)

export default componentMap