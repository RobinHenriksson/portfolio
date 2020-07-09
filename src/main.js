import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'
import '@/assets/css/tailwind.css'
import './js/autoload'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
