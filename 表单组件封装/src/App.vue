<template>
  <div id="app">
    <h1>{{ cityId }}</h1>
    <HelloWorld :cityId="cityId" @handle="cityId=$event"/>
    <h1>v-model简化</h1>
    <HelloWorld v-model="cityId"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      cityId:101,
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
