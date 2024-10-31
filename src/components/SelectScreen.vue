<template>
  <div></div>
</template>


<script>
import {listScreen} from "@/components/api/screen_api";
import {listRoom} from "@/components/api/room_api";

export default {
  name: 'SelectScreen',
  computed: {
    payload() {
      console.log(this.$route.params);
      return this.$route.params;
    }
  },
  created() {
    this.fetchScreen();
    this.getBranchInfo();
  },
  data() {
    return {
      screens: [],
      screenBranch: [],
    }
  },
  methods: {
    async fetchScreen() {
      console.log(`paljkasdjajsd ${this.payload.movieId}`);
      try {
        this.screens = await listScreen(this.payload.movieId);
      } catch (e) {
        console.log(e);
        this.$toast.error('Lỗi có lỗi xảy ra');
      }
    },
    async getBranchInfo() {
      const res = await listRoom(this.payload.branchId);
      console.log(res);
    },
  }
}
</script>


<style scoped>

</style>