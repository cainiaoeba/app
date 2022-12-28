import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import store from './store/index.js'
import './plugins/vant.js'

import './assets/flexible.js'
import './assets/reset.css'
import './assets/fonts/iconfont.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
