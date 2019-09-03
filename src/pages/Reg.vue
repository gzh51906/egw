<template>
  <div class="user-login">
    <header class="nav nav-t">
      <div class="nav-l">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="nav-title">
        <span>依谷注册</span>
      </div>
      <div class="nav-r" @click="changdata">
        <i class="el-icon-more"></i>
      </div>
      <div class="menu van-popup2" v-show="check">
        <div v-for="item in menulist" :key="item.name">
          <i :class="item.icon"></i>
          {{item.name}}
        </div>
      </div>
    </header>
    <div class="content mlogin">
      <input type="text" placeholder="请输入手机号" />
      <input class="reg-pasw" type="text" placeholder="请输入6位以上的密码" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
      menulist: [
        {
          name: "首页",
          icon: "el-icon-house"
        },
        {
          name: "分类",
          icon: "el-icon-menu"
        },
        {
          name: "宅配",
          icon: "el-icon-present"
        },
        {
          name: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "我的",
          icon: "el-icon-user"
        }
      ]
    };
  },
  methods: {
    changdata() {
      return (this.check = !this.check);
      console.log(this.check);
    },
    changdata2() {
      return (this.check = false);
    }
  },
  beforeRouteUpdate(to,from,next){
      console.log("111",from);
      next();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
}
.user-login {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}
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
.user-login .nav-l,
.nav-r {
  z-index: 200;
}
.user-login .nav-l,
.nav-r i {
  font-size: 22px;
  line-height: 38.5px;
}
.user-login .nav-t .van-popup2 {
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
.mlogin {
  padding-left: 6%;
  padding-right: 6%;
}
.content {
  /* padding-top: 25px; */
  width: 100%;
}
.mlogin input {
  width: 100%;
  background: #fff;
  padding: 10px;
  font-size: 14px;
  color: #666;
  margin-top: 10%;
}
.reg-pasw{
    margin-bottom: 400px;
}
</style>