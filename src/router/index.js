import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/Counter.vue"),
  },
  {
    path: "/counter-state",
    name: "Counter with state",
    component: () => import("../views/CounterState.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
