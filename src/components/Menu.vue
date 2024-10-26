<template>
  <div class="menu" v-if="isMenuOpen">
    <img src="../assets/logomenu.png" alt="Logo" class="menu-logo"/>
    <v-divider style="margin-bottom: 20px;"></v-divider>
    <ul>
      <li>
        <router-link to="/film" active-class="active-link" exact-active-class="exact-active-link">
          <span class="fa-solid fa-house"></span>Trang chủ
        </router-link>
      </li>
      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px; color: grey;">
      <li>
        <router-link to="/ticket" active-class="active-link" exact-active-class="exact-active-link">
          <span class="fa-solid fa-ticket"></span>Vé đã mua
        </router-link>
      </li>
      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px;">
      <li>
        <router-link to="/infor-tiket" active-class="active-link" exact-active-class="exact-active-link">
          <span class="fa-solid fa-coins"></span>Thông tin giá vé
        </router-link>
      </li>
      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px;">
      <li>
        <router-link to="/admin" active-class="active-link" exact-active-class="exact-active-link">
          <span class="fa-solid fa-wrench"></span>Admin
        </router-link>
      </li>
      <hr class="dash-lined" style="margin-top: 20px; margin-bottom: 20px;">
      <li class="nav-logout">
        <button class="icon-button" style="color: red; justify-content: left; white-space: nowrap;"
                @click="$emit('handle-logout')"><span class="fa-solid fa-sign-out-alt"></span>Đăng xuất
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuPage",
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
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

.menu-logo {
  width: 30%;
  height: auto;
  margin-bottom: 20px;
}

.active-link {
  color: rgb(0, 157, 255) !important;
}

.exact-active-link {
  color: #1db4f0 !important;
}

.active-link i,
.exact-active-link i {
  color: #1db4f0 !important;
}

.menu ul li a {
  text-decoration: none;
  color: black;
}

.menu ul li a:hover {
  color: #1db4f0;
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