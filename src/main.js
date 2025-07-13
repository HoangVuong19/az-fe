import "./style.css";
import "./assets/css/_tailwind.css";
import "./assets/css/fonts.css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'vue3-toastify/dist/index.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from './plugins/i18n'
import router from "./router";
import Toastify from 'vue3-toastify'
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(Toastify, {
    autoClose: 3000,
    position: "top-right"
})

app.mount("#app");
