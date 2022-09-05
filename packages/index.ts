import ElTableEdit from "./src/ElTableEdit";
import {installElement} from "/#/install";
// 组件列表
const components = [
    ElTableEdit
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (app: any,elementPlus: any) => {
    installElement(elementPlus)
    console.log(elementPlus,"elementPlus")
    components.forEach(component =>{
        app.component(component.name,component)
    } )
}


export default {
    install
}