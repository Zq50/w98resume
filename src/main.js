import '98.css'

import { createApp } from 'vue'
import App from './App.vue'
import window from './components/window.vue'
import user_window_body from './components/user_window_body.vue'
import list from './components/list.vue'
import plain_text_window from './components/plain_text_window.vue'


const app = createApp(App)
app.component('window', window)
app.component('user-body', user_window_body)
app.component('list', list)
app.component('plain-text', plain_text_window)
app.mount('#app') 

