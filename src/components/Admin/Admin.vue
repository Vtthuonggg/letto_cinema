<template>
  <div>
    <div>
      <h1>Admin</h1>
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
            >
              <h2>Quản lý rạp</h2>
            </router-link>
            <router-link
              to="/list-service"
              active-class="active-link"
              exact-active-class="exact-active-link"
              style="text-decoration: none"
            >
              <h2>Quản lý dịch vụ</h2>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
};
</script>

<style>
manage-cinema {
  text-decoration: none;
}
h2 {
  color: inherit;
}
h2:visited {
  color: inherit;
}
</style>