<template>
  <div id="app" :class="{ 'menu-open': isMenuOpen }" data-app>
    <Navbar v-if="showNavbar" @toggle-menu="toggleMenu" />
    <Menu :isMenuOpen="isMenuOpen" @close-menu="toggleMenu" />
    <div class="main-content">
      <router-view />
    </div>
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
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
      const path = this.$route.path;
      return (
        path !== "/login" &&
        path !== "/register" &&
        path !== "/admin" &&
        path !== "/list-cinema" &&
        path !== "/list-service" &&
        !/^\/\d+\/list-room$/.test(path) &&
        path !== "/list-screen" &&
        !/^\/\d+\/list-screenupdate$/.test(path)
      );
    },
    showFooter() {
      const path = this.$route.path;
      return (
        path !== "/admin" &&
        path !== "/list-cinema" &&
        path !== "/list-service" &&
        !/^\/\d+\/list-room$/.test(path) &&
        path !== "/list-screen" &&
        !/^\/\d+\/list-screenupdate$/.test(path)
      );
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
  margin-right: 20%;
  /* Đẩy phần tử chính sang trái khi menu mở */
}
</style>
