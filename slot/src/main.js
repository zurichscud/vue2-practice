import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive({
  white:{
    inserted(el){
      el.style.color='white'
    }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
