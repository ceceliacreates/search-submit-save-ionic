import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tabs from "../views/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/search"
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/search"
      },
      {
        path: "search",
        component: () => import("@/views/Search.vue")
      },
      {
        path: "submit",
        component: () => import("@/views/Submit.vue")
      },
      {
        path: "save",
        component: () => import("@/views/Save.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
