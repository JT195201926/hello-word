<template>
  <div class="home">
    <Banners/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banners from "../components/banners.vue"
import Vuex from "vuex"
export default {
  name: "Home",
  components: {
    Banners
  },
  created(){
    this.handleHomeData();
  },
  methods:{
    ...Vuex.mapActions({
      handleHomeData:"home/handleHomeData"
    })
  }
};
</script>
<style scoped>
  .home{
    height: 100%;
    background: #f1f1f1;
  }
</style>
