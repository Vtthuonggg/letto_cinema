<template>
  <div class="container">
    <div class="title">
      <v-row class="row-title-item">
        <i class="fas fa-arrow-left back-icon" @click="goBack"></i>
        <h2>Danh sách phòng chiếu</h2>
        <v-btn
          class="gradient-button"
          @click="popupCreateRoom"
          style="color: white"
        >
          <v-icon style="color: white">mdi-plus</v-icon>
          <span style="color: white">Thêm phòng chiếu</span>
        </v-btn>
      </v-row>
    </div>
    <v-divider></v-divider>
    <v-container v-if="roomList.length > 0">
      <v-row>
        <v-col
          v-for="(room, index) in roomList"
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
                    <span>{{ room.name }}</span>
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
                    @click="popupCreateScreen(room.id)"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Thêm suất chiếu</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item
                    style="font-weight: bold"
                    @click="viewScreenings(room.id)"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-eye</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Xem suất chiếu</v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item
                    style="font-weight: bold"
                    @click="popupDeleteRoom(room.id)"
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
    <div v-if="isShowCreateRoom" class="popup">
      <div class="popup-content">
        <h3>Tạo phòng chiếu</h3>
        <v-form ref="form">
          <v-text-field
            v-model="newRoom.name"
            label="Tên phòng chiếu"
            :rules="[(v) => !!v || 'Tên phòng không được để trống']"
          ></v-text-field>
          <v-btn
            @click="closeRoom"
            style="background-color: white; color: #dc0004"
            >Hủy</v-btn
          >
          <v-btn
            @click="submitRoom(1)"
            style="background-color: #dc0004; color: white"
            >Thêm</v-btn
          >
        </v-form>
      </div>
    </div>
    <div v-if="isShowDeleteRoom" class="popup">
      <div class="popup-content">
        <h3>Xác nhận xóa phòng chiếu</h3>
        <div class="button-container">
          <v-btn
            class="gradient-button-cancel"
            style="color: #00bfff"
            @click="showDeleteRoom"
            >Hủy</v-btn
          >
          <v-btn
            class="gradient-button-confirm"
            style="color: white"
            @click="deleteRoom(selectedId)"
            >Xác nhận</v-btn
          >
        </div>
      </div>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <div v-if="this.openPopupScreen">
      <ListScreenPage :idRoom="selectedRoomId" @closeScreen="closeScreen">
      </ListScreenPage>
    </div>
  </div>
</template>

<script>
import ListScreenPage from "@/components/Admin/ListScreen.vue";
import { createRoom, deleteRoom, listRoom } from "@/components/api/room_api.js";
export default {
  name: "ListRoomPage",
  components: {
    ListScreenPage,
  },
  computed: {
    id() {
      return this.$route.params;
    },
  },
  data() {
    return {
      loading: false,
      isShowCreateRoom: false,
      isShowDeleteRoom: false,
      selectedRoomId: null,
      openPopupScreen: false,
      newRoom: {
        name: "",
      },
      selectedId: null,
      idBranch: null,
      roomList: [],
    };
  },

  created() {
    this.idBranch = this.id.id;
    this.fetchRoom();
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Quay lại màn hình trước đó
    },
    async fetchRoom() {
      this.loading = true;
      try {
        var res = await listRoom(this.idBranch);
        this.roomList = res;
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    async submitRoom(type) {
      var data = {
        name: this.newRoom.name,
        idBranch: this.idBranch,
      };
      this.loading = true;
      try {
        if (type == 1) {
          await createRoom(data);
          this.$toast.success("Thêm phòng chiếu thành công");
        } else {
          this.$toast.success("Hãy nhập tên phòng chiếu");
        }
        this.fetchRoom();
        this.closeRoom();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    async deleteRoom(id) {
      this.loading = true;
      try {
        await deleteRoom(id);
        this.$toast.success("Xóa phòng chiếu thành công");
        this.fetchRoom();
        this.closeRoom();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    popupCreateRoom() {
      this.isShowCreateRoom = true;
    },
    popupDeleteRoom(id) {
      this.isShowDeleteRoom = true;
      this.selectedId = id;
    },
    popupCreateScreen(id) {
      this.selectedRoomId = id;
      this.openPopupScreen = true;
    },
    viewScreenings(roomId) {
      this.$router.push({
        name: "ListScreenUpdatePage",
        params: { roomId },
      });
    },
    showDeleteRoom() {
      this.isShowDeleteRoom = false;
    },
    closeRoom() {
      this.isShowCreateRoom = false;
      this.isShowEditRoom = false;
      this.isShowDeleteRoom = false;
      this.newRoom = {
        name: "",
      };
    },
    closeScreen() {
      this.openPopupScreen = false;
    },
    closePopup() {
      this.isShowCreateRoom = false;
      this.isShowEditRoom = false;
      this.isShowDeleteRoom = false;
    },
    addRoom() {
      const newId = this.roomList.length + 1;
      this.roomList.push({ id: newId, name: `Phòng chiếu ${newId}` });
    },
    editRoom(id) {
      const room = this.rspList.find((room) => room.id === id);
      if (room) {
        room.name = prompt("Nhập tên phòng chiếu mới", room.name) || room.name;
      }
    },
    handleAction(action, type, id) {
      if (type === "room") {
        if (action === "add") {
          this.addRoom();
        } else if (action === "edit") {
          this.editRoom(id);
        } else if (action === "delete") {
          this.deleteRoom(id);
        }
      }
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