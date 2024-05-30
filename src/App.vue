<template>
  <div id="app">
      <Navbar></Navbar>
      <router-view></router-view>
      <bottomInfo></bottomInfo>
  </div>
</template>

<script>
import Navbar from '@/components/navBar.vue';
import bottomInfo from '@/components/bottomInfo.vue';
export default {
  name: 'App',
  components: {
      Navbar,bottomInfo
  }
}
</script>

<style>
@font-face {
    font-family: cocaColaFont;
    src: url(/src/assets/fonts/Loki-Cola.TTF);
}
@font-face {
    font-family: Oswald;
    src: url(/src/assets/fonts/Oswald-Medium.ttf);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
