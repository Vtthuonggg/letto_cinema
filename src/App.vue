<template>
  <div id="app" :class="{ 'menu-open': isMenuOpen }" data-app>
    <Navbar v-if="showNavbar" @toggle-menu="toggleMenu" />
    <Menu :isMenuOpen="isMenuOpen" @handle-logout="handleLogout" />
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
import Cookies from "js-cookie";
export default {
  name: "App",
  components: {
    Navbar,
    Menu,
    Footer,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    showNavbar() {
      return this.$route.path !== "/login" && this.$route.path !== "/register";
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleLogout() {
      this.isMenuOpen = false;
      this.$router.push("/login");
      Cookies.remove("accountId");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
.menu-open {
  margin-right: 20%; /* Đẩy phần tử chính sang trái khi menu mở */
}
</style>
