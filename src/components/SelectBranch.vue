<template>
  <div>
    <div
      v-for="(branch, index) in branches"
      :key="branch.id"
      class="branch-container"
    >
      <img :src="getImage(index)" alt="Branch Image" class="branch-image" />
      <div class="branch-details" @click="handleClick(branch)">
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
    handleClick(branch) {
      console.log(this.film.id);
      this.$router.push({
        name: "SelectScreen",
        params: { movie: this.film, branch: branch },
      });
    },
    async getBranches() {
      console.log(this.film);
      this.loading = true;
      try {
        const response = await getListBranch();
        this.branches = response;
      } catch (error) {
        console.log(error);
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
}

.branch-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.branch-details {
  display: flex;
  flex-direction: column;
}
</style>
