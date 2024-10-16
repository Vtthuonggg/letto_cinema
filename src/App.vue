<template>
  <div id="app" :class="{ 'menu-open': isMenuOpen }" data-app>
    <Navbar v-if="showNavbar" @toggle-menu="toggleMenu"  />
    <Menu :isMenuOpen="isMenuOpen" @handle-logout="handleLogout" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
export default { 
  name: "App" , 
  components: {
    Navbar,
    Footer,
    Menu,

  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    showNavbar() {
      return this.$route.path !== '/login' && this.$route.path !== '/register';
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleLogout() {
      this.isMenuOpen = false;
      this.$router.push('/login');
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
  /* transition: margin-right 0.3s; */
}
.menu-open {
  margin-right: 20%; /* Đẩy phần tử chính sang trái khi menu mở */
}
</style>
