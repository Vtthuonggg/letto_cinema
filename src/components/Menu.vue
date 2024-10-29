<template>
  <div class="menu" v-if="isMenuOpen">
    <img src="../assets/logomenu.png" alt="Logo" class="menu-logo" />
    <v-divider style="margin-bottom: 20px;"></v-divider>
    <ul>






      <li>
        <button class="icon-button" :class="{ 'active-link': isActive('/film') }"
          style=" justify-content: left; white-space: nowrap;" @click="handleEvent('film')"><span
            class="fa-solid fa-house"></span>Trang chủ
        </button>
      </li>


      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px; color: grey;">





      <li>
        <button class="icon-button" :class="{ 'active-link': isActive('/ticket') }"
          style=" justify-content: left; white-space: nowrap;" @click="handleEvent('ticket')"><span
            class="fa-solid fa-ticket"></span>Vé đã mua
        </button>
      </li>

      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px;">

      <li>
        <button class="icon-button" :class="{ 'active-link': isActive('/infor-ticket') }"
          style=" justify-content: left; white-space: nowrap;" @click="handleEvent('infor-ticket')"><span
            class="fa-solid fa-coins"></span>Thông tin giá vé
        </button>
      </li>


      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px;">
      <li class="nav-logout">
        <button class="icon-button" style="color: red; justify-content: left; white-space: nowrap;"
          @click="handleEvent('logout')"><span class="fa-solid fa-sign-out-alt"></span>Đăng xuất
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "MenuPage",
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleEvent(event) {
      this.$emit('close-menu');
      switch (event) {
        case "film":
          if (this.$route.path !== "/film") {
            this.$router.push("/film");
          }
          break;
        case "ticket":
          if (this.$route.path !== "/ticket") {
            this.$router.push("/ticket");
          }
          break;
        case "infor-ticket":
          if (this.$route.path !== "/infor-ticket") {
            this.$router.push("/infor-ticket");
          }
          break;
        case "logout":
          this.$router.push("/login");
          Cookies.remove("accountId");
          break;
        default:
          break;
      }

    },
    isActive(route) {
      return this.$route.path === route;
    }
  }
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  transform: translateX(100%);

  transition: transform 0.3s;

}

.menu ul {
  list-style-type: none;
  padding: 0;
  justify-content: left;
}

.menu-open .menu {
  transform: translateX(0);

}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.icon-button:hover {
  color: #1db4f0;

}


.menu-logo {
  width: 30%;
  height: auto;
  margin-bottom: 20px;
}

.active-link {
  color: rgb(0, 157, 255) !important;
}



.active-link i,
.exact-active-link i {
  color: #1db4f0 !important;
}




.menu ul li {
  text-decoration: none;
  text-align: left;
  font-size: 20px;
}

.menu ul li span {
  margin-right: 10px;
}
</style>