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
      <div class="title-container">
        <img
        :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
        :alt="film.title"
      />
      <div class="infor">
      <h2>{{ film.title }}</h2>
      <p style="padding-top: 10px;"><b>Ngày phát hành: </b>{{ film.release_date }}</p>
      <p style="padding-top: 10px;"><b>Đánh giá: </b>{{ film.vote_average }}</p>
      <p style="padding-top: 10px;"><b>Thời lượng: </b>{{ film.runtime }} phút</p>
      <p style="padding-top: 10px;"><b>Thể loại: </b>{{ film.genres && film.genres.map((genre) => genre.name).join(", ") }}</p>
      </div>
      </div>
      <div class="overview"><h2>Tóm tắt</h2><br><p>{{ film.overview }}</p></div>
    </div>
  </div>
</template>

<script>
import { getDetailMovie,getTrailerMovie } from "@/components/api/movie_api.js";
export default {
  name: "DetailFilm",
  data() {
    return {
      loading: false,
      film: {},
      videos:{},
     
    };
  },
  async created() {
    const id = this.$route.params.id;
    await this.fetchDetailFilm(id);
    await this.fetchTrailerFilm(id);
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
        this.videos = res.results[0];
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
.title-container {
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: 10% ;
  height: auto;
}
.title-container img {
  width: 20%;
  height: auto;
  margin-right: 20px;
}
.infor{
  text-align: left;
}
.overview{
  text-align: left;
  margin-left: 10%;
  margin-top: 20px;
  margin-right: 20px;
}
.trailer-video{
  width: 100%;
  height: 500px;
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
