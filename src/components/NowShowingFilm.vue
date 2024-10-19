<template>
  <div>
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
    <div v-else class="film-grid">
      <div v-for="film in films" :key="film.id" class="film-card">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
          :alt="film.title"
          class="film-poster"
        />
        <h3 class="film-title">{{ film.title }}</h3>
        <p class="film-vote-average">Rating: {{ film.vote_average }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getNowShowingMovies } from "@/components/api/movie_api.js";
export default {
  name: "NowShowingFilm",

  data() {
    return {
      loading: false,

      films: [],
    };
  },
  created() {
    this.fetchNowShowing();
  },
  methods: {
    async fetchNowShowing() {
      this.loading = true;

      try {
        var res = await getNowShowingMovies();
        this.films = res;
      } catch (err) {
        this.$toast.eror(err);
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
  height: 100vh; /* Chiều cao toàn màn hình */
}

.loading-spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #dc0004; /* Blue */
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
.film-grid {
  margin: 0 auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.film-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.film-card:hover {
  transform: translateY(-10px);
}

.film-poster {
  width: 100%;
  height: auto;
}

.film-title {
  font-size: 1.2em;
  margin: 10px;
}

.film-overview {
  font-size: 0.9em;
  margin: 10px;
}

.film-release-date,
.film-vote-average {
  font-size: 0.8em;
  margin: 10px;
  color: #555;
}
</style>
