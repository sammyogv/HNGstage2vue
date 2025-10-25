import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // ✅ your Tailwind CSS file

const app = createApp(App)
app.use(router)
app.mount('#app')
