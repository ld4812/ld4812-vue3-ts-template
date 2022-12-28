import { createRouter, createWebHistory } from "vue-router";
import SideNavMain from "@/components/common/SideNavMain.vue";
import NavBarBlur from "@/components/common/NavBarBlur.vue";
import Main from "@/components/dashboard/Main.vue";
import List from "@/components/user/List.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Main,
      children: [
        {
          path: "/user",
          name: "user",
          component: List
        }
      ]
    },
  ],
});

export default router;
