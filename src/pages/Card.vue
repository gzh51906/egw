<template>
    <div class="card">
        <header class="nav nav-t">
            <div class="nav-l" @click="previous">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="nav-title">
                <span>卡券兑换</span>
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
        <div class="main">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="age">
                    <el-input v-model="ruleForm.age" placeholder="请输入卡号"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入卡密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')">去兑换</el-button>
                </el-form-item>
            </el-form>
            <div class="info">
                <h6>温馨提示</h6>
                <p>1、卡券不能兑换现金，激活后将自动绑定持卡人依谷账户，请在有效期内使用；</p>
                <p>2、卡券密码及兑换二维码均为兑换有效凭证，且仅可使用一次，不挂失，请妥善保管；</p>
                <p>3、多选一礼品卡兑换后即生成配送订单，无法更换兑换内容，请谨慎选择；</p>
            </div>
            <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
        </div>
    </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("卡号不能为空"));
      }
      setTimeout(() => {
        if (value.length != 10) {
          callback(new Error("卡号为十位数"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
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
      ],
      ruleForm: {
        pass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    changdata() {
      return (this.check = !this.check);
    },
    previous() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //   alert("submit!");
          let { data } = await this.$axios.post("http://localhost:8888/card", {
            cardname: this.ruleForm.age,
            password: this.ruleForm.pass
          });
          this.open("兑换成功！");
        } else {
          this.open("兑换失败，请查看你的卡号和密码！");
          return false;
        }
      });
    },
    open(content) {
      this.$alert(content, {
        confirmButtonText: "确定"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
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
  .main {
    height: 600px;
    background: #f0f2f5;
    overflow: hidden;
    .el-form {
      width: 100%;
      padding: 0 20px;
      margin-top: 30px;

      .el-form-item {
        margin-bottom: 20px;
        width: 100%;
        .el-button {
          width: 100%;
          background: #f00;
        }
      }
    }
    .info {
      padding: 0 20px;
      h6 {
        color: #f00;
        font-size: 14px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
        color: #555;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
