<template>
  <div id="app">
    <!-- <demo></demo> -->
    <test></test>
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import test from './components/test.vue'
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
</style>
