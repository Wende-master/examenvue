import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App.vue'
import router from './Router';

createApp(App).use(router)

.mount('#app')
