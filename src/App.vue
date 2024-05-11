<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view :key="$route.fullPath" />
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
@import url('./assets/css/styles.css');
@import url('./assets/css/layout.css');
@import url('./assets/css/a.css');
</style>
