<template>
  <div class="hello">
    <h1>hello</h1>
    <slot name="slot1">默认值1</slot>
    <slot name="slot2">默认值2</slot>
    <slot name="slot3">默认值3</slot>
    <h1>world</h1>
  </div>
</template>

<script>
export default {
  name: 'MyHello',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
