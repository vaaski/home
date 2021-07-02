import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/qt",
    // name: "home",
    // component: () => import("./views/Home.vue"),
  },
  {
    path: "/qt",
    name: "qt",
    component: () => import("./views/QuickToggles.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
]

const router = createRouter({
  // @ts-expect-error idk
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
