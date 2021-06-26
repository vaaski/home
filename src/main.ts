import { createApp } from "vue"
import app from "@/app.vue"
import router from "@/router"
import "virtual:windi.css"

import "@/assets/theme.css"
import "@/assets/fonts.css"

createApp(app).use(router).mount("#app")
