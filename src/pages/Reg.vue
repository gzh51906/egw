<template>
  <div class="user-login">
    <header class="nav nav-t">
      <div class="nav-l" @click="previous">
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
    <!-- <div class="content mlogin" ref="ruleFrom">
      <input type="text" placeholder="请输入手机号" class="reg-phone" v-model="regphone" />
      <div class="errmas">手机号不通过</div>
      <div class="yanzhen" @click="getPhone">点击验证</div>
    </div>-->
    <!-- rules：验证规则 -->
    <!-- ruleForm：表单数据最终会写在这里 -->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item class="btn2">
        <el-button type="primary" @click="checkUsername">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.regForm.validateField("checkPass");
        }
        callback();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        // 效验失败，需要往回调函数传入一个对象
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        // 验证通过
        callback();
      }
    };
    return {
      regphone: "",
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
      ],
      ruleForm: {
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    changdata() {
      return (this.check = !this.check);
      // console.log(this.check);
    },
    changdata2() {
      return (this.check = false);
    },
    previous() {
      this.$router.go(-1);
      // console.log(this.previousRouter);
    },
    gotoReg() {
      this.$refs["regForm"].validate(async valid => {
        if (valid) {
          let { username } = await this.$axios.post(
            "http://52.78.186.217:8888/user/reg",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            });
          this.$router.push("/login");
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    // 检测注册用户名是否已经存在
    async checkUsername(rule, value) {
      // 发送请求 检测
      let { data } = await this.$axios.get(
        "http://52.78.186.217:8888/user/check",
        {
          params: {
            // 用户输入的用户名
            username: this.ruleForm.username
          }
        }
      );
      // code==1 如果用户名存在
      if (data.code == 1) {
        console.log("用户名已经存在");
      } else {
        // 否则调用gotoreg 存入数据库 跳转到登录页面
        this.gotoReg();
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
.mlogin .reg-phone {
  width: 100%;
  background: #fff;
  padding: 10px;
  font-size: 14px;
  color: #666;
  margin-top: 10%;
}
/* .reg-pasw{
    margin-bottom: 400px;
} */
.yanzhen {
  width: 100%;
  height: 43.75px;
  margin-top: 5%;
  background-color: #ffac0a;
  border: 0.0625rem solid #ffac0a;
  text-align: center;
  line-height: 43.75px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 400px;
}
.errmas {
  /* display: none; */
  color: red;
  font-size: 12px;
  margin-top: 13px;
}
.btn2 {
  margin-bottom: 400px;
}
.demo-ruleForm {
  margin-top: 30px;
  margin-right: 10px;
}
</style>