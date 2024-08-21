export default {
    namespaced:true,
    state:{
        age:12,
        name:'lai'
    },
    mutations:{
        PLUS(state){
            state.age++
        }
    },
    actions:{
        send(context,value){
            setTimeout(()=>{
                console.log('你好');
            },2000)
        }
    },
    getters:{
        upper(state){
            return state.name.toUpperCase()
        }
    }
}