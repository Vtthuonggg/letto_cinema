<template>
  <div class="container">
    <div class="screen-page">
      <div class="title">
        <v-row class="row-title-item">
          <h2>Danh sách suất chiếu</h2>
        </v-row>
      </div>
      <v-divider></v-divider>
      <v-container v-if="screenList.length > 0">
        <v-row>
          <v-col
            v-for="(screen, index) in screenList"
            :key="index"
            cols="12"
            sm="6"
            md="6"
            lg="6"
          >
            <v-card class="screen-card">
              <v-list-item>
                <v-col>
                  <div class="info-screen">
                    <div class="screen-room">
                      <span>{{ screen.idRoom }}</span>
                    </div>
                    <div class="screen-film">
                      <span>{{ screen.idMovie }}</span>
                    </div>
                    <div class="screen-date">
                      <span>{{ formatTime(screen.time) }}</span>
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
                      @click="popupEditScreen(screen)"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-pencil</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>Sửa</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      style="font-weight: bold"
                      @click="popupDeleteScreen(screen.id)"
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
      <div v-if="isShowEditScreen" class="popup">
        <div class="popup-content">
          <h3>Sửa suất chiếu</h3>
          <v-form ref="form">
            <v-text-field
              v-model="searchQuery"
              label="Tìm kiếm phim"
              @input="searchFilm"
              :rules="[(v) => !!v || 'Tên phim không được để trống']"
            ></v-text-field>

            <v-text-field
              v-model="formattedDate"
              label="Chọn ngày giờ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              :rules="[(v) => !!v || 'Bắt buộc chọn ngày giờ']"
            ></v-text-field>
            <v-btn
              @click="closeScreen"
              style="background-color: white; color: #dc0004"
              >Hủy</v-btn
            >
            <v-btn
              @click="submitScreen(1)"
              style="background-color: #dc0004; color: white"
              >Sửa</v-btn
            >
          </v-form>
        </div>
      </div>
      <div v-if="isShowDeleteScreen" class="popup">
        <div class="popup-content">
          <h3>Xác nhận xóa suất chiếu</h3>
          <div class="button-container">
            <v-btn
              class="gradient-button-cancel"
              style="color: #00bfff"
              @click="showDeleteScreen"
              >Hủy</v-btn
            >
            <v-btn
              class="gradient-button-confirm"
              style="color: white"
              @click="deleteScreen(selectedId)"
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
  listScreenAll,
  updateScreen,
  deleteScreen,
} from "@/components/api/screen_api.js";
export default {
  name: "ListScreenUpdatePage",
  data() {
    return {
      screenList: [],
      isShowEditScreen: false,
      isShowDeleteScreen: false,
      newScreen: {
        idMovie: "",
        idRoom: "",
        date: "",
      },
      selectedId: "",
      loading: false,
    };
  },
  created() {
    this.fetchScreenList();
  },
  computed: {
    payload() {
      return this.$route.params;
    },
  },
  methods: {
    formatTime(time) {
      const date = new Date(time);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${hours}:${minutes} ${day}/${month}/${year}`;
    },
    async fetchScreenList() {
      this.loading = true;
      try {
        var res = await listScreenAll();
        console.log(this.payload.idRoom);
        this.screenList = res.filter(
          (screen) => screen.idRoom == this.payload.idRoom
        );
      } catch (err) {
        this.$toast.error("Lỗi khi lấy danh sách suất chiếu");
      } finally {
        this.loading = false;
      }
    },
    async submitScreen(type) {
      var data = {
        idMovie: this.selectedId,
        idRoom: this.idRoom,
        date: this.selectedDateTime,
      };
      try {
        if (type == 1) {
          await updateScreen(this.selectedId, data);
          this.$toast.success("Sửa suất chiếu thành công");
        } else {
          this.$toast.success("Có lỗi xảy ra khi sửa suất chiếu");
        }
        this.fetchScreenList();
        this.closeScreen();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    async deleteScreen(id) {
      this.loading = true;
      try {
        await deleteScreen(id);
        this.$toast.success("Xóa suất chiếu thành công");
        this.fetchScreenList();
        this.closeScreen();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    popupEditScreen(screen) {
      this.selectedId = screen.id;
      this.isShowEditScreen = true;
    },
    popupDeleteScreen(id) {
      this.selectedId = id;
      this.isShowDeleteScreen = true;
    },
    closeScreen() {
      this.isShowEditScreen = false;
      this.isShowDeleteScreen = false;
      this.selectedId = null;
    },
    showDeleteScreen() {
      this.isShowDeleteScreen = false;
    },
    closePopup() {
      this.isShowEditScreen = false;
      this.isShowDeleteScreen = false;
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
  margin: 4px 5px;
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
  display: inline-block;
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
  justify-content: center;
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
</style>