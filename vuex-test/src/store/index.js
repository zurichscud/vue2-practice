import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from '@/store/module/user'

export default new Vuex.Store({
  state: {
    rootId:'001'
  },
  getters: {
  },
  mutations: {
    SETTER(state,value){
      state.rootId+=value
    }
  },
  actions: {
  },
  modules: {
    user,
  }
})
