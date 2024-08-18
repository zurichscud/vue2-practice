<template>
  <div id="app">
    <HelloWorld/>
    <button @click="changeGender(666,$event)">更改gender</button>
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
  provide(){
    return {
      stu:this.stu,
    };
  },
  methods:{
    changeGender(num,event){
      console.log(event.target);
      console.log(event.target.value);
      this.stu.gender='女'
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
