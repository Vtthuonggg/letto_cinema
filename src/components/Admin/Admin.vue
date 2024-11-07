<template>
  <div>
    <div class="image-admin">
      <img src="../../assets/logomenu.png" alt="admin" />
    </div>
    <div>
      <h1>Chào mừng đến trang quản trị</h1>
    </div>
    <div>
      <ul class="admin-list">
        <li class="admin-block">
          <div class="manage-cinema">
            <router-link
              to="/list-cinema"
              active-class="active-link"
              exact-active-class="exact-active-link"
              style="text-decoration: none"
              class="router-link"
            >
              <h2>Quản lý rạp</h2>
            </router-link>
          </div>
        </li>
        <li class="admin-block">
          <div class="manage-service">
            <router-link
              to="/list-service"
              active-class="active-link"
              exact-active-class="exact-active-link"
              style="text-decoration: none"
              class="router-link"
            >
              <h2>Quản lý dịch vụ</h2>
            </router-link>
          </div>
        </li>
      </ul>
      <div class="log-out">
        <button @click="handleEvent('logout')">
          <h2>Đăng xuất</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "AdminPage",
  methods: {
    handleEvent() {
      this.$router.push("/login");
      Cookies.remove("accountId");
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.admin-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.admin-block {
  margin: 10px;
}

.manage-cinema,
.manage-service {
  background: linear-gradient(135deg, #ff0044, #ff7070);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;
}

.manage-cinema:hover,
.manage-service:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #ff7070, #ff0044);
}

.manage-cinema h2,
.manage-service h2 {
  color: white;
  margin: 0;
  text-align: center;
}

.router-link {
  text-decoration: none;
}

.active-link {
  font-weight: bold;
}
.image-admin img {
  width: 15%;
  margin: 20px 0;
}
.log-out {
  background: linear-gradient(135deg, #ff0044, #ff7070);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;
  width: 20%;
  margin: 20px auto;
}
.log-out:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #ff7070, #ff0044);
}
.log-out h2 {
  color: white;
  margin: 0;
  text-align: center;
}
</style>