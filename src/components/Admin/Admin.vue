<template>
    <div>
    <h1>Admin</h1>
    <div class="admin-page">
    <button @click="showPopup('rap')">Rạp</button>
    <button @click="openService">Dịch vụ</button>
    <button @click="showPopup('phim')">Phim</button>
    <!-- Pop-up cho Rạp -->
    <div v-if="popupType === 'rap'" class="popup">
      <div class="popup-content">
        <v-row>
        <h3>Quản lý Rạp</h3>
        <v-spacer></v-spacer>
        <span class="close" @click="closePopup">&times;</span>
        </v-row>
        <button @click="handleAction('add', 'rap')">Thêm</button>
        <button @click="handleAction('edit', 'rap')">Sửa</button>
        <button @click="handleAction('delete', 'rap')">Xóa</button>
      </div>
    </div>

    <!-- Pop-up cho Dịch vụ -->
    

    <!-- Pop-up cho Phim -->
    <div v-if="popupType === 'phim'" class="popup">
      <div class="popup-content">
        <v-row>
        <h3>Quản lý Phim</h3>
        <v-spacer></v-spacer>
        <span class="close" @click="closePopup">&times;</span>
        </v-row>
        <button @click="handleAction('add', 'phim')">Thêm</button>
        <button @click="handleAction('edit', 'phim')">Sửa</button>
        <button @click="handleAction('delete', 'phim')">Xóa</button>
      </div>
       <div v-if="popupService">
        <EditService :isShowAddSv="popupService">

        </EditService>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
import EditService from "@/components/Admin/Edit_service.vue"
export default {
    name: 'AdminPage',
    data() {
    return {
      popupType: null,
      popupService : false,
    };
  },
  components:{
        EditService,
    },
  methods: {
    showPopup(type) {
      this.popupType = type;
    },
    closePopup() {
      this.popupType = null;
    },
    handleAction(action, type) {
      console.log(`Action: ${action}, Type: ${type}`);
      // Thực hiện các hành động thêm, sửa, xóa ở đây
    },
    openService(){
        this.popupService=true;

    },
    closeService(){
        this.popupService=false;
    }
  },
}
</script>

<style>
.admin-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
.popup-content button {
  margin: 5px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
h1{
    color: #dc0004;
}
.admin-page button:hover{
    color: #dc0004;
}
</style>