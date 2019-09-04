import Vue from 'vue'
import App from './App.vue'

import router from './routers'
// import homerouter from './routers/home.js'
import store from './store'

import axios from 'axios'
import "./rem" //引入外部JS文件，需要安装到依赖
import "./iconfont/font.css"

import VueRouter from '../node_modules/vue-router';

const url = "http://52.78.186.217:8888"

Vue.prototype.$url = url;

const url = "http://localhost:8888";
Vue.prototype.$url = url;

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  // homerouter,
  router,
  store,
  render: h => h(App),
}).$mount('#app')