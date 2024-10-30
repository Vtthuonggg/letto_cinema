<template>
<div></div>
</template>


<script >
export default {
  name:'SelectScreen',
  computed: {
    payload(){
      return this.$route.params;
    }
  },
  data(){

    return {
      screens: [],
    }
  },
}
</script>



<style scoped>

</style>