<template>
  <div id="app">
    <postsComponent msg="Welcome to Vue.js App"/>
  </div>
</template>

<script>
import postsComponent from './components/postsComponent.vue'

export default {
  name: 'app',
  components: {
    postsComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
