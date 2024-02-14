import { createApp } from 'vue'
import './style.css'
import { pinia } from '@/store'
import App from './App.vue'
import customDirective from '@/directive/clickOutside.js'

const app = createApp(App)
app.use(pinia)
app.use(customDirective)
app.mount('#app')
