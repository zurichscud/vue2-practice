<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div v-color="'yellow'">changeColor</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      msg:'directives'
    }
  },
  methods:{
  },
  directives:{
    color:{
      inserted(el,data){
        el.style.backgroundColor=data.value;

      },
      update(el,binding){
        el.style.backgroundColor=binding.value;
      }
    }
  }

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
