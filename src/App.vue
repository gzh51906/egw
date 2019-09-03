<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer">
      <el-menu :default-active="active" class="el-menu-demo" 
      router mode="horizontal" @select="changeActive" active-text-color="#f00">
        <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
          <i :class="item.font"></i>
          <p class="type">{{item.text}}</p>
        </el-menu-item>
      </el-menu>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css";
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll)
export default {
  name: "app",
  data() {
    return {
      active: "/home",
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          font: "van-icon van-icon-wap-home"
        },
        {
          name: "classify",
          text: "分类",
          path: "/classify",
          font: "van-icon van-icon-apps-o"
        },
        {
          name: "card",
          text: "卡兑换",
          path: "/card",
          font: "van-icon van-icon-idcard"
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
          font: "van-icon van-icon-shopping-cart-o"
        },
        {
          name: "user",
          text: "用户",
          path: "/user",
          font: "van-icon van-icon-contact"
        }
      ]
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    }
  },
  created(){
    console.log(this.$route.path);
    
    this.active = this.$route.path;
  }
};
</script>
<style lang="scss">
#app {
  height: 100%;
  display: flex;
  .footer {
    height: 48px;
    position: fixed;
    bottom: 0;
    width: 375px;
    .el-menu {
      height: 48px;
      width: 100%;
    }
    .el-menu-item {
      width: 20%;
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      .van-icon {
        display: block;
        width: 20px;
        height: 20px;
        font-size: 16px;
      }
      .type {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
}
</style>
