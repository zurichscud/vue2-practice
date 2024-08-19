<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <HelloWorld>我是需要自定义的内容</HelloWorld>
    <hr>
    <HelloWorld>
      <template #default >
        使用default
      </template>
    </HelloWorld>
    <hr>
    <MyHello>
      <template v-slot:slot1>
        我是插槽1
      </template>
      <template #slot2>
        我是插槽2
      </template>
    </MyHello>
    <hr>
    <MyTable :list="list">
      <template #default="obj">
        <button @click="handleDelete(obj)">删除</button>
      </template>
    </MyTable>
    <hr>
    <MyTable :list="list">
      <template #default="{row}">
        <button @click="change(row)">修改</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyHello from './components/MyHello.vue';
import MyTable from './components/MyTable.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHello,
    MyTable
  },
  data() {
    return {
      list:[
    {
      "id": 1,
      "name": "李华",
      "age": 18,
      "gender": "男",
      "grade": "高三"
    },
    {
      "id": 2,
      "name": "王丽",
      "age": 17,
      "gender": "女",
      "grade": "高二"
    },
    {
      "id": 3,
      "name": "张伟",
      "age": 18,
      "gender": "男",
      "grade": "高三"
    },
    {
      "id": 4,
      "name": "赵敏",
      "age": 17,
      "gender": "女",
      "grade": "高二"
    },
    {
      "id": 5,
      "name": "陈涛",
      "age": 18,
      "gender": "男",
      "grade": "高三"
    }
  ]
    }
  },
  methods:{
    handleDelete(obj){      
      console.log(obj.row.name);
    
    },
    change(row){
      console.log(row.name);
      
    },
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
