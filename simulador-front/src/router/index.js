import Vue from "vue";
import VueRouter from "vue-router";
import HistoricoView from "../views/HistoricoView.vue";
import SimuladorView from "../views/SimuladorView.vue";
import LoginView from "../views/LoginView.vue";
import CriarContaView from "../views/CriarContaView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/historico",
    name: "historico",
    component: HistoricoView,
  },
  {
    path: "/",
    name: "simulador",
    component: SimuladorView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/criar-conta",
    name: "criar-conta",
    component: CriarContaView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
