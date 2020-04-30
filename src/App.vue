<template>
  <div>
    <nav-bar></nav-bar>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    console.log(this.$route.name)
    var example = document.getElementById("body");
    example.style.backgroundImage = URL('./assets/pictures/mountain1.jpg');
    example.style.backgroundColor = "#FFFFFF";

  }
}
</script>

<style>

html, body {
  background-image: url('./assets/pictures/mountain1.jpg');
  /* filter: brightness(60%);   
  -webkit-filter: brightness(60%); */
}

</style>
