<template>
  <div id="app">
    <router-view />
    <Footer-com />
  </div>
</template>
<script>
  import Footer from "./views/Footer.vue"
  export default {
    name:"App",
    components:{
      "Footer-com":Footer
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  height: 100%;
}
</style>
