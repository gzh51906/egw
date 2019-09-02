import Vue from 'vue'
import App from './App.vue'

import router from './routers'
// import homerouter from './routers/home.js'

import axios from 'axios'
import "./rem" //引入外部JS文件，需要安装到依赖
import "./iconfont/font.css"

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  // homerouter,
  router,
  render: h => h(App),
}).$mount('#app')