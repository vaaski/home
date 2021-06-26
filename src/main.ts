import { createApp } from "vue"
import app from "@/App.vue"
import router from "@/router"

import "virtual:windi.css"
import "vite-plugin-svg-icons/register"

import "@/assets/theme.css"
import "@/assets/fonts.css"

createApp(app).use(router).mount("#app")
