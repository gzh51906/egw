<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件 -->
    </router-view>

    <footer class="footer">
      <el-menu :default-active="active" class="el-menu-demo" router mode="horizontal" @select="changeActive" active-text-color="#f00">
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
  created() {
    // console.log(this.$route.path);

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
    width: 100%;
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
// .user-login {
//   width: 100%;
//   height: 100%;
//   background-color: #f0f2f5;
// }

.nav {
  width: 100%;
  display: flex;
  z-index: 100;
}
.nav-t {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 38.5px;
  box-shadow: 0 1px 2px #ccc;
  background: #fff;
}
.nav-title {
  color: #444;
  font-size: 16px;
  flex: 1;
  text-align: center;
  line-height: 38.5px;
}
.nav-l,
.nav-r {
  position: relative;
  width: 33px;
  height: 100%;
  text-align: center;
  line-height: 38.5px;
  font-size: 14px;
}
.nav-l,
.nav-r {
  z-index: 200;
}
.nav-l,
.nav-r i {
  font-size: 22px;
  line-height: 38.5px;
}
.nav-t .van-popup2 {
  position: relative;
  position: absolute;
  border: 1px solid #999;
  background-color: #fff;
  transition: 0.3s ease-out;
  color: #666;
  width: 84px;
  font-size: 12px;
  text-align: left;
  line-height: 41.6px;
  right: 5px;
  top: 36px;
  border-radius: 4.8px;
  overflow-y: visible;
}
.menu:before {
  content: " ";
  position: absolute;
  top: -13px;
  width: 0;
  height: 0;
  right: 4.6px;
  border: 8px solid red;
  border-color: transparent transparent blue;
}
.menu > div:nth-child(-n + 5) {
  border-bottom: 1.1px solid #eee;
  height: 33.81px;
}

.menu i {
  padding-left: 10px;
}
</style>
