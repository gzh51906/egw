import Vue from 'vue'

import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Goods from '../components/Goods.vue'
import Login from '../components/Login.vue'
import Mine from '../components/Mine.vue'
import Reg from '../components/Reg.vue'

// 引入Router
import VueRouter from "vue-router"
// 安装使用路由
Vue.use(VueRouter)
var router = new VueRouter({
    routers: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'Cart',
            path: '/Cart',
            component: Cart
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'goods',
            path: '/goods',
            component: Goods
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            path: '/',
            redirect: { name: 'home' }
            // component:Home
        }

    ]
})
export default  router;