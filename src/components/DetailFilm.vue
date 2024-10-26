<template>
  <div>
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
    <div v-else>
      <!-- Nội dung chi tiết phim -->
      <div v-if="videos.key">
        <iframe
            :src="'https://www.youtube.com/embed/' + videos.key + '?autoplay=1'"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="trailer-video"
        ></iframe>
      </div>
      <div v-else>
        <img class="trailer-video"
             :src="'https://image.tmdb.org/t/p/original' + film.backdrop_path"
             :alt="film.title"
        />
      </div>
      <div class="title-container">
        <img
            :src="'https://image.tmdb.org/t/p/original' + film.poster_path"
            :alt="film.title"
        />
        <div class="infor">
          <h2>{{ film.title }}</h2>
          <p style="margin-top: 10px;"><b>Ngày phát hành: </b>{{ formatDate(film.release_date) }}</p>
          <div class="rate-movie">
            <p style="margin-top: 10px;"><b>Đánh giá: </b></p>
            <span style="margin-top: 10px;margin-left: 5px" v-for="star in fullStars" :key="star"
                  class="fa fa-star checked"></span>
            <span style="margin-top: 10px;margin-left: 5px" v-for="star in emptyStars" :key="star"
                  class="fa fa-star"></span>
          </div>
          <p style="margin-top: 10px;"><b>Thời lượng: </b>{{ film.runtime }} phút</p>
          <p style="margin-top: 10px;"><b>Thể
            loại: </b>{{ film.genres && film.genres.map((genre) => genre.name).join(", ") }}</p>
          <button class="book-ticket" @click="bookTicket"><span style="margin-right: 5px;"
                                                                class="fa-solid fa-ticket"></span>Đặt vé
          </button>
        </div>
      </div>
      <div v-if="film.overview" class="overview"><h2>Tóm tắt</h2><br>
        <p>{{ film.overview }}</p></div>
      <div v-else class="overview"><h2>Tóm tắt</h2><br>
        <p>Tạm thời chưa cập nhật</p></div>
    </div>
  </div>
</template>

<script>
import {getDetailMovie, getTrailerMovie} from "@/components/api/movie_api.js";

export default {
  name: "DetailFilm",
  data() {
    return {
      loading: false,
      film: {},
      videos: {},

    };
  },
  computed: {
    fullStars() {
      return Math.floor((this.film.vote_average / 10) * 5);
    },
    emptyStars() {
      return 5 - this.fullStars;
    },
  },
  async created() {
    const id = this.$route.params.id;
    await this.fetchDetailFilm(id);
    await this.fetchTrailerFilm(id);
    window.scrollTo(0, 0);
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
    async fetchTrailerFilm(id) {
      this.loading = true;
      try {
        const res = await getTrailerMovie(id);
        if (res.results.length > 0) {
          this.videos = res.results[0];
        } else {
          this.videos = {};
        }
      } catch (err) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    bookTicket() {
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

.title-container {
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 20px auto;
  height: auto;
  width: 80vw;
}

.title-container img {
  width: 20%;
  height: auto;
  margin-right: 20px;
}

.infor {
  text-align: left;
}

.overview {
  text-align: left;
  margin-left: 10%;
  margin-top: 20px;
  margin-right: 20px;
}

.trailer-video {
  width: 80vw;
  height: 35vw;
}

.rate-movie {
  display: flex;
  align-items: center;
}

.checked {
  color: orange;
}

.book-ticket {
  background-color: #dc0004;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
  min-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.book-ticket:hover {
  background-color: #ff3c3f;
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
