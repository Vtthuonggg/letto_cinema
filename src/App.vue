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
      return this.$route.path !== "/login" && this.$route.path !== "/register" && this.$route.path !== "/admin";
    },
    showFooter() {
      return this.$route.path !== "/admin";
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
