import {createApp} from 'vue'
import App from './App.vue'
import elementEdit from 'el-element-edit'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'el-element-edit/es/style.css'
const app = createApp(App)
app.use(elementEdit)
app.use(elementPlus)
app.mount('#app')
