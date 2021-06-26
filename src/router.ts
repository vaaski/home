import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/plugs",
    // name: "home",
    // component: () => import("./views/Home.vue"),
  },
  {
    path: "/plugs",
    name: "plugs",
    component: () => import("./views/Plugs.vue"),
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