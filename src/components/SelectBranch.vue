<template>
  <div>
    <i class="fas fa-arrow-left back-icon" @click="goBack"></i>
    <div
      @click="handleClick(branch)"
      v-for="(branch, index) in branches"
      :key="branch.id"
      class="branch-container"
    >
      <img :src="getImage(index)" alt="Branch Image" class="branch-image" />
      <div class="branch-details">
        <h3>{{ branch.name }}</h3>
        <p>{{ branch.address }}</p>
      </div>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import { getListBranch } from "@/components/api/branch_api";

export default {
  computed: {
    film() {
      return this.$route.params;
    },
  },
  data() {
    return {
      loading: false,
      branches: [],
      images: [
        require("@/assets/branch1.jpg"),
        require("@/assets/branch2.jpeg"),
        require("@/assets/branch3.jpg"),
        require("@/assets/branch.jpg"),
      ],
    };
  },
  created() {
    this.getBranches();
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Quay lại màn hình trước đó
    },
    handleClick(branch) {
      this.$router.push({
        name: "SelectScreen",
        params: { idMovie: this.film.idMovie, idBranch: branch.id },
      });
    },
    async getBranches() {
      this.loading = true;
      try {
        const response = await getListBranch();
        this.branches = response;
      } catch (error) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    getImage(index) {
      return this.images[index % this.images.length];
    },
  },
};
</script>
<style scoped>
.branch-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  margin-top: 20px;
}

.branch-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.branch-image {
  width: 15%;
  height: 15%;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.branch-details {
  flex: 1;
  cursor: pointer;
}

.branch-details h3 {
  margin: 0;
  font-size: 1.5em;
  color: #2c3e50;
}

.branch-details p {
  margin: 5px 0 0;
  color: #7f8c8d;
}
.fas {
  display: flex;
  justify-content: left;
  margin: 20px;
}
</style>
