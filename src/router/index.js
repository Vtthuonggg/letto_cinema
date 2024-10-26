import Router from "vue-router";
import Vue from "vue";
import Cookies from "js-cookie";
import LoginPage from "@/components/Login.vue";
import RegisterPage from "@/components/Register.vue";
import InforTicket from "@/components/Infor_ticket.vue";
import TicketPage from "@/components/Ticket.vue";
import FilmPage from "@/components/Film.vue";
import CinemaPage from "@/components/Cinema.vue";
import NowShowing from "@/components/NowShowingFilm.vue";
import UpcomingFilm from "@/components/UpcomingFilm.vue";
import DetailFilm from "@/components/DetailFilm.vue";
import AdminPage from "@/components/Admin/Admin.vue";


Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },

  {
    path: "/login",
    name: "Login",
    meta: { title: "Đăng nhập" },
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    meta: { title: "Đăng ký" },
    component: RegisterPage,
  },
  {
    path: "/admin",
    name: "Admin",
    meta: { title: "Admin" },
    component: AdminPage,
  },
  {
    path: "/infor-tiket",
    name: "InforTicket",
    meta: { title: "Chi tiết vé" },
    component: InforTicket,
  },
  {
    path: "/ticket",
    name: "Ticket",
    meta: { title: "Vé" },
    component: TicketPage,
  },
  {
    path: "/film",
    name: "Film",
    component: FilmPage,
    children: [
      {
        path: "now-showing",
        name: "NowShowing",
        meta: { title: "Phim đang chiếu" },
        component: NowShowing,
      },
      {
        path: "upcoming",
        name: "UpcomingFilm",
        meta: { title: "Phim sắp chiếu" },
        component: UpcomingFilm,
      },
    ],
  },
  {
    path: "/cinema",
    name: "Cinema",
    meta: { title: "Rạp" },
    component: CinemaPage,
  },
  {
    path: "/film/:id",
    name: "DetailFilm",
    meta: { title: "Chi tiết phim" },
    component: DetailFilm,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Letto Cinema ";
  next();
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = Cookies.get("accountId");
  if (!isLoggedIn && to.path !== "/login" && to.path !== "/register") {
    Vue.prototype.$toast.error("Vui lòng đăng nhập");
    next("/login");
  } else {
    next();
  }
});
export default router;
