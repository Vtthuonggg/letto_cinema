<template>
  <div class="container">
    <div class="cinema-page">
      <div class="title">
        <v-row class="row-title-item">
          <h2>Danh sách rạp</h2>
          <v-btn
            class="gradient-button"
            @click="popupCreate"
            style="color: white"
          >
            <v-icon style="color: white">mdi-plus</v-icon>
            <span style="color: white">Thêm rạp</span>
          </v-btn>
        </v-row>
      </div>
      <v-divider></v-divider>
      <v-container v-if="rapList.length > 0">
        <v-row>
          <v-col
            v-for="(cinema, index) in rapList"
            :key="index"
            cols="12"
            sm="6"
            md="6"
            lg="6"
          >
            <v-card class="cinema-card">
              <v-list-item>
                <v-col>
                  <div class="info-cinema">
                    <div class="cinema-info">
                      <v-btn
                        class="cinema-name"
                        @click="popToListRoom(cinema.id)"
                        active-class="active-link"
                        exact-active-class="exact-active-link"
                        text
                        style="text-decoration: none; color: black"
                      >
                        <span
                          ><b>{{ cinema.name }}</b></span
                        >
                      </v-btn>
                    </div>
                    <div class="cinema-address">
                      <span>{{ cinema.address }}</span>
                    </div>
                  </div>
                  <v-divider></v-divider>
                </v-col>
                <v-menu offset-y bottom right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      style="font-weight: bold"
                      @click="popupEdit(cinema)"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-pencil</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Sửa</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      style="font-weight: bold"
                      @click="popupDelete(cinema.id)"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-delete</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Xóa</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
              class="cancel-button"
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
              style="color: white"
              @click="deleteRap(selectedId)"
              >Xác nhận</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
  computed: {
    id() {
      return this.$route.params;
    },
  },
  data() {
    return {
      loading: false,
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
      this.loading = true;
      try {
        var res = await getListBranch();
        this.rapList = res;
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    async submitBranch(type) {
      var data = {
        name: this.newCinema.name,
        address: this.newCinema.address,
      };
      this.loading = true;
      try {
        if (type == 1) {
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
      } finally {
        this.loading = false;
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
      const rap = this.rapList.find((rap) => rap.id === id);
      if (rap) {
        rap.name = prompt("Nhập tên rạp mới", rap.name) || rap.name;
      }
    },
    async deleteRap(id) {
      this.loading = true;
      try {
        await deleteBranch(id);
        this.$toast.success("Xóa rạp thành công");
        this.fetchBranch();
        this.showDelete();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    openService() {
      this.popupService = true;
    },
    closeService() {
      this.popupService = false;
    },
    popToListRoom(id) {
      this.$router.push({ name: "ListRoomPage", params: { id: id } });
    },
  },
};
</script>

<style>
.info-cinema {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
}

.cinema-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}

.delete-icon {
  position: absolute !important;
  top: 8px;
  right: 8px;
  font-size: 24px;
  cursor: pointer;
  background: white;
  border-radius: 50%;
}

.gradient-button-cancel {
  flex: 1;
  border: none;
  color: #ff0044;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 4px 5x;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.3s ease;
}

.gradient-button-confirm {
  flex: 1;
  background: linear-gradient(45deg, #ff0044, #ff7070);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 4px 5px;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.3s ease;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.container {
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.gradient-button {
  background: linear-gradient(45deg, #ff0044, #ff7070);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.3s ease;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
}

.row-title-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.cancel-button {
  margin-right: 50px;
}
.cinema-info {
  margin-bottom: 10px;
}
.cinema-name {
  text-decoration: none;
  color: black;
  transition: background-color 0.3s, color 0.3s;
}
.cinema-name:hover {
  color: white;
  background: linear-gradient(45deg, #ff0044, #ff7070);
}
.cinema-name:hover span {
  color: white;
}
.popup-content h3 {
  margin-bottom: 20px;
}
.cinema-address {
  margin-bottom: 15px;
}
</style>