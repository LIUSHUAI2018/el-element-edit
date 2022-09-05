

const ElComponents = new Map()
export function installElement(element: any) {
    ElComponents.set("ElSelect",element.ElSelect);
    ElComponents.set("ElOption",element.ElOption);
}
export default ElComponents;