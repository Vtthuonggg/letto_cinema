import Router from "vue-router";
import Vue from "vue";
// import Cookies from "js-cookie";
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
import ListCinemaPage from "@/components/Admin/ListCinema.vue";
import SelectBranch from "@/components/SelectBranch.vue";
import ListServicePage from "@/components/Admin/ListService.vue";
import SelectScreen from "@/components/SelectScreen.vue";
import ListRoomPage from "@/components/Admin/ListRoom.vue";
import Cookies from "js-cookie";
import SelectSeat from "@/components/SelectSeat.vue";
import ListScreenPage from "@/components/Admin/ListScreen.vue";
import ListScreenUpdatePage from "@/components/Admin/ListScreenUpdate.vue";
// import { component } from "vue/types/umd";


Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: () => {
      const haveUser = Cookies.get("accountId") != null;
      return haveUser ? "/film" : "/login";
    },
  },
  {
    path: "/list-cinema",
    name: "ListCinemaPage",
    meta: { title: "Quản lý rạp" },
    component: ListCinemaPage,
  },
  {
    path: "/list-screen",
    name: "ListScreenPage",
    meta: { title: "Quản lý suất chiếu" },
    component: ListScreenPage,
  },
  {
    path: "/list-screenupdate",
    name: "ListScreenUpdatePage",
    meta: { title: "Danh sách suất chiếu" },
    component: ListScreenUpdatePage,
  },
  {
    path: "/list-service",
    name: "ListServicePage",
    meta: { title: "Quản lý dịch vụ" },
    component: ListServicePage,
  },
  {
    path: "/list-room",
    name: "ListRoomPage",
    meta: { title: "Quản lý phòng chiếu" },
    component: ListRoomPage,
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
    path: "/infor-ticket",
    name: "InforTicket",
    meta: { title: "Chi tiết vé" },
    component: InforTicket,
  },
  {
    path: "/ticket",
    name: "Ticket",
    meta: { title: "Vé" },
    component: TicketPage,
  }, {
    path: "/select-branch",
    name: "Branch",
    meta: { title: "Chọn rạp" },
    component: SelectBranch,
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
    path: "/film/detail",
    name: "DetailFilm",
    meta: { title: "Chi tiết phim" },
    component: DetailFilm,
  },
  {
    path: "/film/:movieId/:branchId",
    name: "SelectScreen",
    meta: { title: "Chọn suất chiếu" },
    component: SelectScreen,
  },
  {
    path: "/film/select-seat",
    name: "SelectSeat",
    meta: { title: "Chọn ghế" },
    component: SelectSeat,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
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
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Letto Cinema ";
  const restrictedPaths = ["/list-cinema", "/list-service", "/list-room"];
  const idAccount = Cookies.get("accountId");

  if (restrictedPaths.includes(to.path) && idAccount != 2) {
    Vue.prototype.$toast.error("Bạn không có quyền truy cập trang này");
    next(false);
  } else {
    next();
  }
});


export default router;
