<template>
  <div id="app">
    <div v-loading="isLoading" class="box">
      数据展示区
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isLoading:true,

    }
  },
  directives:{
    loading:{
      inserted(el,data){
        data.value? el.classList.add('loading') :el.classList.remove('loading')
      },
      update(el,data){
        data.value? el.classList.add('loading') :el.classList.remove('loading')
      }

    }
  },
  created(){
    setTimeout(()=>{
      this.isLoading=false
    },3000)
  }

}
</script>

<style>
.loading::before{
  content: '加载中';
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  background-color: burlywood;
}
.box{
  position: relative;
  background-color: yellowgreen;
  width: 400px;
  height: 400px;
  margin: auto;
  line-height: 400px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
