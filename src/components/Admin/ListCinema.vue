<template>
  <div>
    <h1>Quản lý rạp</h1>
    <div class="admin-page">
      <v-row class="row-title-item">
        <v-btn
          class="gradient-button"
          @click="popupCreate"
          style="color: white"
        >
          <v-icon style="color: red">mdi-plus</v-icon>
          <span style="color: red">Thêm rạp</span>
        </v-btn>
      </v-row>

      <!-- Pop-up cho Rạp -->
      <div v-if="isShowCreateCinema || isShowEditCinema" class="popup">
        <div class="popup-content">
          <h3>
            {{
              isShowEditCinema ? `Sửa rạp: ${newCinema.name}` : "Tạo rạp mới"
            }}
          </h3>
          <v-form ref="form">
            <v-text-field
              v-model="newCinema.name"
              label="Tên rạp"
              :rules="[(v) => !!v || 'Tên rạp không được để trống']"
            ></v-text-field>
            <v-text-field
              v-model="newCinema.address"
              label="Địa chỉ rạp"
              :rules="[(v) => !!v || 'Địa chỉ rạp không được để trống']"
              ><template v-slot:append> </template
            ></v-text-field>
            <v-btn
              @click="closeBranch"
              style="background-color: white; color: #dc0004"
              >Hủy</v-btn
            >
            <v-btn
              @click="submitBranch(isShowEditCinema ? 2 : 1)"
              style="background-color: #dc0004; color: white"
              >{{ isShowEditCinema ? `Sửa` : "Thêm" }}</v-btn
            >
          </v-form>
        </div>
      </div>
      <div class="cinema-list">
        <div v-for="cinema in rapList" :key="cinema.id" class="cinema-item">
          <span>{{ cinema.name }} - {{ cinema.address }}</span>
          <v-btn @click="popupEdit(cinema)">Sửa</v-btn>
          <v-btn @click="popupDelete(cinema.id)">Xóa</v-btn>
        </div>
      </div>
      <div v-if="isShowDelete" class="popup">
        <div class="popup-content">
          <h3>Xác nhận xóa rạp</h3>
          <div class="button-container">
            <v-btn
              class="gradient-button-cancel"
              style="color: #00bfff"
              @click="showDelete"
              >Hủy</v-btn
            >
            <v-btn
              class="gradient-button-confirm"
              style="color: red"
              @click="deleteRap(selectedId)"
              >Xác nhận</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getListBranch,
  deleteBranch,
  createBranch,
  updateBranch,
} from "@/components/api/branch_api.js";
export default {
  name: "ListCinemaPage",
  data() {
    return {
      popupType: null,
      popupService: false,
      isShowCreateCinema: false,
      isShowEditCinema: false,
      isShowDelete: false,
      selectedId: null,
      rapList: [],
      newCinema: {
        name: "",
        address: "",
      },
    };
  },
  components: {},
  created() {
    this.fetchBranch();
  },
  methods: {
    async fetchBranch() {
      try {
        var res = await getListBranch();
        this.rapList = res;
        console.log(res);
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    async submitBranch(type) {
      var data = {
        name: this.newCinema.name,
        address: this.newCinema.address,
      };
      try {
        if (type == 1) {
          console.log(data);
          await createBranch(data);
          this.$toast.success("Thêm rạp thành công");
        } else {
          await updateBranch(this.selectedId, data);
          this.$toast.success("Sửa rạp thành công");
        }
        this.fetchBranch();
        this.closeBranch();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    showDelete() {
      this.isShowDelete = false;
    },
    popupDelete(id) {
      this.isShowDelete = true;
      this.selectedId = id;
    },
    showPopup(type) {
      this.popupType = type;
    },
    popupCreate() {
      this.isShowCreateCinema = true;
    },
    popupEdit(branch) {
      this.selectedId = branch.id;
      this.newCinema = { ...branch };
      this.isShowEditCinema = true;
    },
    closeBranch() {
      this.isShowCreateCinema = false;
      this.isShowEditCinema = false;
      this.selectedId = null;
      this.newCinema = {
        name: "",
        address: "",
      };
    },
    closePopup() {
      this.popupType = null;
    },
    handleAction(action, type, id) {
      console.log(`Action: ${action}, Type: ${type}, ID: ${id}`);
      if (type === "rap") {
        if (action === "add") {
          this.addRap();
        } else if (action === "edit") {
          this.editRap(id);
        } else if (action === "delete") {
          this.deleteRap(id);
        }
      }
    },
    addRap() {
      const newId = this.rapList.length + 1;
      this.rapList.push({ id: newId, name: `Rạp ${newId}` });
    },
    editRap(id) {
      const rap = this.rspList.find((rap) => rap.id === id);
      if (rap) {
        rap.name = prompt("Nhập tên rạp mới", rap.name) || rap.name;
      }
    },
    async deleteRap(id) {
      console.log(`Delete rap with ID: ${id}`);
      try {
        await deleteBranch(id);
        this.$toast.success("Xóa rạp thành công");
        this.fetchBranch();
        this.showDelete();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    openService() {
      this.popupService = true;
    },
    closeService() {
      this.popupService = false;
    },
  },
};
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
  z-index: 500;
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
h1 {
  color: #dc0004;
}
.admin-page button:hover {
  color: #dc0004;
}
</style>