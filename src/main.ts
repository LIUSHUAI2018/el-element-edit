import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import elementPlus from 'element-plus'
import ElementEdit from '../packages/index'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.use(ElementEdit)
app.use(elementPlus)
app.mount('#app')
