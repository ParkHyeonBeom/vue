import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Splide from "@splidejs/splide";

const app = createApp(App)
app.use(router)
app.mount('#app')
// new Splide('.splide').mount();

window.$ = window.jQuery = require('jquery')