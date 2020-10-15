import Vue from "vue";
import VueRouter from "vue-router";
import USData from "../components/data/usData/USData";
import GlobalData from "../components/data/globalData/GlobalData";
import USMap from "../components/data/usData/USMap";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "USData",
    component: USData,
  },
  {
    path: "/usmap",
    name: "USMap",
    component: USMap,
  },
  {
    path: "/global",
    name: "GlobalData",
    component: GlobalData,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
