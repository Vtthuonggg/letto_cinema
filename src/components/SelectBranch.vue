

<template>
  <div>
    <div v-for="(branch, index) in branches" :key="branch.id" class="branch-container">
      <img :src="getImage(index)" alt="Branch Image" class="branch-image" />
      <div class="branch-details">
        <h3>{{ branch.name }}</h3>
        <p>{{ branch.address }}</p>
      </div>
    </div>
  </div>
</template>
<script >
import {getListBranch} from "@/components/api/branch_api";

export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      branches: [],
      images: [
        require('@/assets/branch1.jpg'),
        require('@/assets/branch2.jpeg'),
        require('@/assets/branch3.jpg'),
        require('@/assets/branch.jpg')
      ]
    }
  },
  created() {
    this.getBranches()
  },
  methods:{
    async getBranches(){
      try {
        const response = await getListBranch();

        this.branches = response;
      } catch (error) {
        console.log(error);
        this.$toast.error('Có lỗi xảy ra')
      }
    },
    getImage(index) {
      return this.images[index % this.images.length];
    }
  }
}
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