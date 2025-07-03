import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiCircle, BiSquare, BiCircleHalf, BiCircleFill, BiSquareFill, BiHexagon, BiTriangle, FaArrowUp } from "oh-vue-icons/icons";

addIcons(BiCircle, BiSquare, BiCircleHalf, BiCircleFill, BiSquareFill, BiHexagon, BiTriangle, FaArrowUp)
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon)
app.mount('#app')
