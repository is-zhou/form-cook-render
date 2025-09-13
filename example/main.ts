import { createApp } from 'vue'
import App from './App.vue'
import FormRender from '../src/index'
const app = createApp(App)
app.use(FormRender)
app.mount('#app')
