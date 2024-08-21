<template>
    <div>
        <h1>获取root上的state</h1>
        {{ rootId }}
        <h1>获取module中的state</h1>
        {{  user.name}}
        <button @click="send">弹出你好</button>

    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default{
    name:'HelloWorld',
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['rootId']),
        ...mapState(['user'])

    },
    mounted(){
        console.log(this.$store.getters['user/upper']);
        console.log(this.$store.commit('user/PLUS'));
        console.log(this.$store.state.user.age);
    },
    methods:{
        ...mapActions('user',['send'])
    }
}
</script>