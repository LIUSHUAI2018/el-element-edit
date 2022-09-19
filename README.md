# el-element-edit

这是一个对element plus的扩展库

## 扩展组件

- ElTableEdit(可编辑表格)

## 可编辑表格

目前只有`Input` `Select` `Switch` `InputNumber` `Date`

## 安装

`npm install el-element-edit`

## 快速使用
因为基于element plus扩展,所以必须安装element plus


    import {createApp} from 'vue'
    import App from './App.vue'
    import elementEdit from 'el-element-edit'
    import elementPlus from 'element-plus'
    import {ElSelect,ElOption,ElDatePicker,ElTooltip,ElMessage,ElTable} from 'element-plus'
    import 'element-plus/dist/index.css'
    import 'element-plus/theme-chalk/dark/css-vars.css'
    import 'el-element-edit/es/style.css'
    const app = createApp(App)
    app.use(elementEdit,{ElSelect,ElOption,ElDatePicker,ElTooltip,ElMessage,ElTable})
    app.use(elementPlus)
    app.mount('#app')
## 在线文档
https://www.yuque.com/docs/share/861bc572-2c60-402d-88b9-3bf0866eade0



`




