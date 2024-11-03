<template>
  <div class="popup">
    <div class="popup-container">
      <v-text-field
        v-model="searchQuery"
        label="Tìm kiếm phim"
        @input="searchFilm"
      ></v-text-field>
      <v-list>
        <v-list-item
          v-for="movie in movies"
          :key="movie.id"
          @click="selectMovie(movie)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ movie.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-menu
        ref="dateMenu"
        v-model="dateMenu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formattedDate"
            label="Chọn ngày giờ"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-card>
          <v-card-text>
            <input
              type="datetime-local"
              v-model="selectedDateTime"
              @change="updateFormattedDate"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateMenu = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="confirmSelection"
          :disabled="!isSelectionComplete"
          >Xác nhận</v-btn
        >
        <v-btn text color="secondary" @click="cancelSelection">Hủy</v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import { getNowShowingMoviesSearch } from "@/components/api/movie_api.js";
import { createScreen } from "@/components/api/screen_api.js";
import moment from "moment";
export default {
  data() {
    return {
      searchQuery: "",
      movies: [],
      selectedId: null,
      dateMenu: false,
      selectedDateTime: null,
      formattedDate: "",
    };
  },
  props: {
    idRoom: Number,
  },
  computed: {
    isSelectionComplete() {
      return this.selectedId && this.selectedDateTime;
    },
  },
  methods: {
    async searchFilm() {
      if (this.searchQuery.trim() === "") {
        this.movies = [];
        return;
      }
      try {
        const result = await getNowShowingMoviesSearch(this.searchQuery);
        this.movies = result;
      } catch (error) {
        console.error("Có lỗi xảy ra khi tìm kiếm phim", error);
      }
    },
    selectMovie(movie) {
      this.searchQuery = movie.title;
      this.movies = [];
      this.selectedId = movie.id;
    },
    updateFormattedDate() {
      if (this.selectedDateTime) {
        this.formattedDate = moment(this.selectedDateTime).format(
          "YYYY-MM-DD HH:mm:00"
        );
      }
    },
    cancelSelection() {
      this.$emit("closeScreen");
    },
    async confirmSelection() {
      if (!this.isSelectionComplete) {
        return;
      }
      var data = {
        idRoom: this.idRoom,
        idMovie: this.selectedId,
        time: this.formattedDate,
      };

      try {
        await createScreen(data);
        this.$toast.success("Tạo suất chiếu thành công");
        this.$emit("closeScreen");
      } catch (error) {
        this.$toast.error("Có lỗi xảy ra khi tạo suất chiếu");
      }
    },
  },
};
</script>

<style>
.popup {
  width: 100%;
  height: 100%;
  z-index: 500;
}
.popup-container {
  border: #000 1px solid;
  width: 50%;
  background-color: white;
  padding: 30px;
  max-height: 90vh;
  overflow: auto;
}
</style>