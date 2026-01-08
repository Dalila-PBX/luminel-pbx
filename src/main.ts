

import { createApp } from 'vue'
import './style.css'
/*Si hago un css global aqui lo referencio, el style css esta a la altura del main.ts*/
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App)
app.use(router)
.use(MotionPlugin)
app.mount('#app')
