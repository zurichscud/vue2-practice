<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" :info="stu" />
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
      stu: {
        "id": 12345,
        "name": "张三",
        "age": 20,
        "gender": "男",
        "major": "计算机科学",
      }
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
