<template>
  <div>
    <h2>Chi tiết phim</h2>
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
    <div v-else>
      <!-- Nội dung chi tiết phim -->
      <h3>{{ film.title }}</h3>
      <img
        :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
        :alt="film.title"
      />
      <p>{{ film.overview }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <p>Rating: {{ film.vote_average }}</p>
    </div>
  </div>
</template>

<script>
import { getDetailMovie } from "@/components/api/movie_api.js";
export default {
  name: "DetailFilm",
  data() {
    return {
      loading: false,
      film: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.fetchDetailFilm(id);
  },
  methods: {
    async fetchDetailFilm(id) {
      this.loading = true;
      try {
        const res = await getDetailMovie(id);
        this.film = res;
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #dc0004;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
