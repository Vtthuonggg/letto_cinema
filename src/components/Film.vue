<template>
  <div>
    <carousel
      :autoplay="true"
      :autoplay-timeout="2000"
      :per-page="1"
      :loop="true"
      class="custom-carousel"
    >
      <slide>
        <img src="../assets/slide1.png" alt="Banner 1" class="carousel-image" />
      </slide>
      <slide>
        <img src="../assets/slide2.jpg" alt="Banner 2" class="carousel-image" />
      </slide>
      <slide>
        <img src="../assets/slide3.jpg" alt="Banner 3" class="carousel-image" />
      </slide>
    </carousel>
    <div class="button-group">
      <router-link
        to="/film/now-showing"
        class="button"
        exact-active-class="active-button"
        >Phim đang chiếu</router-link
      >
      <router-link
        to="/film/upcoming"
        class="button"
        exact-active-class="active-button"
        >Phim sắp chiếu</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "FilmPage",
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    if (this.$route.path === "/film") {
      this.$router.push("/film/now-showing");
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
.custom-carousel {
  width: 100%;
  height: auto;

}

.carousel-image {
  width: 100%; 
  height: 100%;
}
.button-group {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.button {
  margin: 0 5px;
  padding: 10px 20px;
  background-color: white;
  color: #dc0004;
  text-decoration: none;
  border: 2px solid #f5dc99;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}
.button:hover {
  background-color: #dc0004;
  color: white;
}
.active-button {
  background-color: #dc0004;
  color: white;
}
</style>
