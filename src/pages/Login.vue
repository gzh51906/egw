<template>
  <div class="user-login">
    <header class="nav nav-t">
      <div class="nav-l" @click="previous">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="nav-title">
        <span>用户登录</span>
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
    <div class="content mlogin" ref="loginForm">
      <input type="text" placeholder="请输入用户名/手机号/邮箱" v-model="ruleFrom.username" />
      <input type="text" placeholder="请输入6位以上的密码" v-model="ruleFrom.userPassword" />
      <div class="hint">请输入登录密码，长度大于等于6位</div>
      <button class="van-button" @click="gotoReg">立即登录</button>
      <div class="log-reg">
        <div class="log-reg-left" @click="goto('reg')">手机快速注册</div>
        <div class="log-reg-right">忘记密码</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleFrom: {
        username: "",
        userPassword: ""
      },
      check: false,
      previousRouter: "",
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
    },
    changdata2() {
      return (this.check = false);
    },
    goto(path) {
      this.$router.push(path);
    },
    previous() {
      this.$router.go(-1);
    },
    // 检查账号密码是否正确
    async gotoReg() {
      let { data } = await this.$axios.post(
        "http://52.78.186.217:8888/user/login",
        {
          username: this.ruleFrom.username,
          password: this.ruleFrom.userPassword
        }
      );
      if (data.code === 1) {
        // 如果登录成功
        let user = this.ruleFrom.username
      // 将用户名保存在vuex
        this.$store.commit("adduser", {user})
        // console.log(this.$store);
        
        // 如果targetUrl有就跳到this.$route.query.targetUrl如果没有的话就跳到/user
        let targetUrl = this.$route.query.targetUrl || '/user'
        this.$router.push(targetUrl);

        // 保存token到本地
        localStorage.setItem('Authorization',data.data.authorization);
      } else {
        // console.log(this.ruleFrom.username, this.ruleFrom.userPassword);
        alert("用户名或密码错误");
      }
    }
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
.van-button {
  width: 100%;
  height: 43.75px;
  margin-top: 10%;
  background-color: #ffac0a;
  border: 0.0625rem solid #ffac0a;
  text-align: center;
  line-height: 43.75px;
  font-size: 14px;
  color: #fff;
}
.log-reg {
  margin-top: 40px;
  margin-bottom: 400px;
  display: flex;
}
.log-reg div {
  flex: 1;
  color: #666;
}
.log-reg .log-reg-right {
  text-align: right;
  color: #fd7400;
}
.mlogin .hint {
  color: red;
  font-size: 12px;
  margin-top: 13px;
}
</style>