<template>
  <div id="app">
    <!-- <demo></demo> -->
    <!-- <test></test> -->
     <router-view/>
  </div>
</template>

<script>
import Demo from './views/Demo.vue'
import test from './views/demo1.vue'
export default {
  name: 'app',
  components: {
    Demo,
    test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
