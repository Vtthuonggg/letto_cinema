<template>
  <div>
    <div
      v-for="screen in listScreen"
      :key="screen.id"
      @click="selectSeat(screen)"
    >
      <p>Giờ chiếu: {{ new Date(screen.time).toLocaleString() }}</p>
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
      } catch (e) {
        console.log(e);
        this.$toast.error("Lỗi có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
