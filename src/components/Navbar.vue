<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="nav-image">
        <router-link to="/home-page"
          ><img src="../assets/logo.png" alt="Letto logo" class="logo"
        /></router-link>
      </li>

      <li class="nav-block">
        <div class="nav-film">
          <router-link
            to="/film"
            active-class="active-link"
            exact-active-class="exact-active-link"
          >
            <span class="fa-solid fa-film"></span>Phim
          </router-link>
        </div>

        <div class="nav-cine">
          <router-link
            to="/cinema"
            active-class="active-link"
            exact-active-class="exact-active-link"
          >
            <span class="fa-solid fa-video"></span>Rạp
          </router-link>
        </div>
      </li>

      <li class="nav-toggle">
        <button class="icon-button" @click="$emit('toggle-menu')">
          <i class="fa-solid fa-bars"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style>
.navbar {
  background-color: white;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.navbar-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  margin-left: 10px;
  width: 150px;
  height: auto;
  padding-right: 20px;
}
.nav-toggle {
  margin-right: 20px;
}
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s, transform 0.1s;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.icon-button i {
  color: #2c3e50;
}
.icon-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}
.icon-button:active::after {
  width: 40px;
  height: 40px;
}
.nav-film {
  margin-right: 30px;
}
.navbar ul li a {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.navbar ul li span {
  margin-right: 5px;
}
.nav-block .active-link {
  color: #dc0004;
  font-weight: bold;
  border-bottom: 2px solid #dc0004;
  padding-bottom: 5px;
}

.nav-block .exact-active-link {
  font-weight: bold;
}
.nav-block .active-link span,
.nav-block .exact-active-link span {
  font-weight: bold;
}
.nav-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar ul li a:hover {
  color: #dc0004;
}
</style>
