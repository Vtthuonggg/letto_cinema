<template>
  <div>
    <div v-for="screen in listScreen" :key="screen.id" @click="selectSeat(screen.idRoom)">
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
  name: 'SelectScreen',
  computed: {
    payload() {
      console.log(this.$route.params);
      return this.$route.params;
    }
  },
  created() {
    this.fetchScreen();
  },
  data() {
    return {
      loading: false,
      listScreen: [],
    }
  },
  methods: {
    selectSeat(idRoom) {
      this.$router.push({
        name: 'SelectSeat',
        params: { movieId: this.payload.movieId, branchId: this.payload.branchId, roomId: idRoom }
      });
    },
    async fetchScreen() {
      this.loading = true;
      try {
        var screens = await listScreen(this.payload.movieId);
        var rooms = await listRoom(this.payload.branchId);
        const roomIds = rooms.map(room => room.id);
        this.listScreen = screens.filter(screen => roomIds.includes(screen.idRoom));
      } catch (e) {
        console.log(e);
        this.$toast.error('Lỗi có lỗi xảy ra');
      } finally {
        this.loading = false;
      }
    },

  }
}
</script>


<style scoped></style>