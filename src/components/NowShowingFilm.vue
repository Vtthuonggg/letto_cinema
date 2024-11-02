<template>
  <div>
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
    <div v-else class="film-grid">
      <div v-for="film in films" :key="film.id" class="film-card">
        <div class="film-poster-container">
          <img
            :src="film.posterPath ? 'https://image.tmdb.org/t/p/original' + film.posterPath : require('../assets/logo32.jpg')"
            :alt="film.title" class="film-poster" />

          <div class="overlay">
            <button class="overlay-button" @click="toDetailFilm(film)">
              Chi tiết
            </button>
            <button class="overlay-button" @click="bookTicket(film)">
              Đặt vé
            </button>
          </div>
        </div>
        <h3 class="film-title">{{ film.title }}</h3>
        <div class="film-details">
          <p class="film-date" v-if="film.releaseDate">
            <i class="fas fa-calendar-alt"></i>{{ formatDate(film.releaseDate) }}
          </p>
        </div>
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
    toDetailFilm(film) {
      this.$router.push({ name: "DetailFilm", params: { film } });
    },
    async fetchNowShowing() {
      this.loading = true;
      try {
        const res = await getNowShowingMovies();
        console.log();
        this.films = res;
      } catch (err) {
        this.$toast.error('Có lỗi xảy ra');
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date(dateString).toLocaleDateString("vi-VN", options);
    },
    bookTicket(film) {
      this.$router.push({ name: "Branch", params: film });
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
  position: relative;
}

.film-card:hover {
  transform: translateY(-10px);
  color: #dc0004;
}

.film-poster-container {
  position: relative;
}

.film-poster {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.film-poster-container:hover .overlay {
  opacity: 1;
}

.overlay-button {
  width: 60%;
  height: 13%;
  border: 2px solid #f5dc99;
  background-color: transparent;
  color: #f5dc99;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin: 15px 0;
}

.overlay-button:hover {
  color: #dc0004;
  border: 2px solid #dc0004;
}

.film-title {
  font-size: 1.2em;
  margin: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.film-date {
  font-size: 1em;
  margin: 10px auto;
}

.film-date i {
  margin-right: 10px;
}

.film-details {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>
