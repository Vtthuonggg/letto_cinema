<template>
  <div class="select-screen">
    <div
      v-for="screen in listScreen"
      :key="screen.id"
      @click="selectSeat(screen)"
      class="screen-item"
    >
      <p>Giờ chiếu: {{ formatTime(screen.time).toLocaleString() }}</p>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { listScreen } from "@/components/api/screen_api";
import { listRoom } from "@/components/api/room_api";

export default {
  name: "SelectScreen",
  computed: {
    payload() {
      return this.$route.params;
    },
  },
  created() {
    this.fetchScreen();
  },
  data() {
    return {
      loading: false,
      listScreen: [],
    };
  },
  methods: {
    selectSeat(screen) {
      console.log("Suất chiếu được chọn", screen);
      this.$router.push({
        name: "SelectSeat",
        params: {
          movie: this.payload.movie,
          branch: this.payload.branch,
          screen: screen,
        },
      });
    },
    async fetchScreen() {
      this.loading = true;
      try {
        var screens = await listScreen(this.payload.movie.id);
        var rooms = await listRoom(this.payload.branch.id);
        const roomIds = rooms.map((room) => room.id);
        this.listScreen = screens.filter((screen) =>
          roomIds.includes(screen.idRoom)
        );
        this.listScreen.sort((a, b) => new Date(a.time) - new Date(b.time));
      } catch (e) {
        console.log(e);
        this.$toast.error("Lỗi có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    formatTime(time) {
      const date = new Date(time);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
  },
};
</script>

<style scoped>
.select-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.screen-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.screen-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.screen-item p {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

.v-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
