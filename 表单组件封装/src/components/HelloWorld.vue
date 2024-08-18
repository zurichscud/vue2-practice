<template>
  <div class="hello" >
    <select :value="cityId" @change="handleCity">
      <option value="101">三明</option>
      <option value="102">永安</option>
      <option value="103">长汀</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["cityId"],
  methods:{
    handleCity(event){
      this.$emit('handle',event.target.value)
      // 触发第二个HelloWorld
      this.$emit('input',event.target.value)
      
    },
  }


}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
