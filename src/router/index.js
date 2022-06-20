import MyUpdatesViewVue from "@/views/MyUpdatesView.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        name: "my-updates",
        component: MyUpdatesViewVue,
      },
      {
        path: "/afg-updates",
        name: "afg-updates",
        component: () => import("@/views/AfgUpdatesView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
  // linkActiveClass: "active",
  // linkExactActiveClass, "active"
});

export default router;
