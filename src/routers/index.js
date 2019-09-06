import Home from '../pages/Home.vue';
import Classify from '../pages/Classify.vue'
import Card from '../pages/Card.vue'
import Cart from '../pages/Cart.vue'
import User from '../pages/User.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import Goods from '../pages/Goods.vue'


import Hot from "../Home/Hot.vue"
import Fruit from "../Home/Fruit.vue"
import Green from "../Home/Green.vue"
import Oil from "../Home/Oil.vue"
import Ganhuo from "../Home/Ganhuo.vue"
import Snacks from "../Home/Snacks.vue"
import Mincha from "../Home/Mincha.vue"
import Cardli from "../Home/Cardli.vue"
import Chuwei from "../Home/Chuwei.vue"
import Jiadian from "../Home/Jiadian.vue"

// 引入Router
import VueRouter from "vue-router"

import Vue from "vue"
import { TabPane } from 'element-ui';

// 安装使用路由
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: "history",
    // 是routes
    routes: [{
        name: 'home',
        path: '/home',
        component: Home,
        children: [{
                name: "hot",
                path: "hot",
                component: Hot
            },
            {
                name: "fruit",
                path: "fruit",
                component: Fruit
            }, {
                name: "green",
                path: "green",
                component: Green
            }, {
                name: "oil",
                path: "oil",
                component: Oil
            }, {
                name: "ganhuo",
                path: "ganhuo",
                component: Ganhuo
            }, {
                name: "snacks",
                path: "snacks",
                component: Snacks
            }, {
                name: "mincha",
                path: "mincha",
                component: Mincha
            }, {
                name: "cardli",
                path: "cardli",
                component: Cardli
            }, {
                name: "chuwei",
                path: "chuwei",
                component: Chuwei
            }, {
                name: "jiadian",
                path: "jiadian",
                component: Jiadian
            }, {
                // 默认跳转到首页
                path: "/home",
                redirect: {
                    name: "hot",
                    component: Hot
                }
            }
        ]
    }, {
        name: 'classify',
        path: '/classify',
        component: Classify
    }, {
        name: 'card',
        path: '/card',
        component: Card
    }, {
        name: 'cart',
        path: '/cart',
        component: Cart,
        // 路由原信息：给路由定义一些额外的配置参数利用这个参数来确认这个路由需要什么样的权限
        // requiresAuth:true  true为需要登录权限才能访问
        meta:{requiresAuth:true}
    }, {
        name: "reg",
        path: "/reg",
        component: Reg
    }, {
        name: "login",
        path: "/login",
        component: Login
    }, {
        name: 'user',
        path: '/user',
        component: User
    }, {
        name: 'goods',
        path: '/goods',
        component: Goods
    }, {
        // 默认跳转到首页
        path: "/",
        redirect: {
            name: "hot",
            component: Hot
        }
    }]
})
// 路由拦截，需要路由跳转之前拦截
router.beforeEach(function(to,from,next){
    console.log('beforeEachaaaa',to,from);
    // 如果需要登录权限
    if(to.meta.requiresAuth){
        let authorization = localStorage.getItem('Authorization');
        // 如果有说明已登录  没有就跳到登录界面
        if(authorization){
            next()
        }else{
            next({
                path:'/login',
                query:{targetUrl:to.fullPath}
            })
        }
    }else{
    next();
}
})
export default router;