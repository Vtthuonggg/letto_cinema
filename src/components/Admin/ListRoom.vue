<template>
  <div class="container">
    <div class="title">
      <v-row class="row-title-item">
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
  </div>
</template>

<script>
import { createRoom, deleteRoom, listRoom } from "@/components/api/room_api.js";
export default {
  name: "ListRoomPage",
  data() {
    return {
      isShowCreateRoom: false,
      isShowDeleteRoom: false,
      newRoom: {
        name: "",
      },
      selectedId: null,
      roomList: [],
    };
  },
  comments: {},
  created() {
    this.fetchRoom();
  },
  methods: {
    async fetchRoom() {
      try {
        var res = await listRoom();
        this.roomList = res;
        console.log(res);
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    async submitRoom(type) {
      var data = {
        name: this.newRoom.name,
      };
      try {
        if (type == 1) {
          console.log(data);
          await createRoom(data);
          this.$toast.success("Thêm phòng chiếu thành công");
        } else {
          this.$toast.success("Hãy nhập tên phòng chiếu");
        }
        this.fetchRoom();
        this.closeRoom();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    async deleteRoom(id) {
      try {
        await deleteRoom(id);
        this.$toast.success("Xóa phòng chiếu thành công");
        this.fetchRoom();
        this.closeRoom();
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      }
    },
    popupCreateRoom() {
      this.isShowCreateRoom = true;
    },
    popupDeleteRoom(id) {
      this.isShowDeleteRoom = true;
      this.selectedId = id;
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
      console.log(`Action: ${action}, Type: ${type}, ID: ${id}`);
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
</style>