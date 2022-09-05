/**
 * 存放Element plus自带组件
 */
const ElComponents = new Map()
export function installElement(element: any) {
    ElComponents.set("ElSelect",element.ElSelect);
    ElComponents.set("ElOption",element.ElOption);
    ElComponents.set("ElMessage",element.ElMessage);
    ElComponents.set("ElTooltip",element.ElTooltip)
    ElComponents.set("ElDatePicker",element.ElDatePicker)
}
export default ElComponents;