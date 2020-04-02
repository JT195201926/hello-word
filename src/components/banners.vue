<template>
  <div class="banner">
  <van-swipe :autoplay="3000" style="height: 160px;">
    <van-swipe-item v-for="(image, index) in banners" :key="index">
      <img v-lazy="image.url"/>
    </van-swipe-item>
  </van-swipe>
    <div class="search">
      <van-search v-model="value" shape="round"
                  background="#4fc08d" placeholder="请输入搜索关键词" />
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
  name: "HelloWorld",
  computed:{
       ...Vuex.mapState({
      banners:state=>state.home.banners
    })
  },
    data(){
    return{
      value:''
    }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import "../styles/home.scss";
</style>
