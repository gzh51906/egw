<template>
  <div class="user-login" >
    <header class="nav nav-t">
      <div class="nav-l">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="nav-title">
        <span>用户登录</span>
      </div>
      <div class="nav-r"  @click="changdata">
        <i class="el-icon-more"></i>
      </div>
      <div class="menu van-popup2" v-show="check">
        <div v-for="item in menulist" :key="item.name">
          <i :class="item.icon"></i>
          {{item.name}}
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
    data(){
        return{
            check:false,
            menulist:[
                {
                    name:'首页',
                    icon:'el-icon-house'
                },{
                    name:'分类',
                    icon:'el-icon-menu'
                },{
                    name:'宅配',
                    icon:'el-icon-present'
                },{
                    name:'购物车',
                    icon:'el-icon-shopping-cart-2'
                },{
                    name:'我的',
                    icon:'el-icon-user'
                },
            ]
        }
    },
    methods:{
        changdata(){
            
            return this.check = !this.check
            
            console.log(this.check);
            
        },
        changdata2(){
            return this.check = false
        }
    }
};
</script>

<style scoped>
.user-login {
  width: 100%;
  height: 100%;
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
  height: 33px;
  box-shadow: 0 1px 2px #ccc;
}
.nav-title {
  color: #444;
  font-size: 14px;
  flex: 1;
  text-align: center;
  line-height: 33px;
}
.nav-l,
.nav-r {
  position: relative;
  width: 33px;
  height: 33px;
  text-align: center;
  line-height: 33px;
  font-size: 14px;
}
.user-login .nav-l,
.nav-r {
    z-index:200;
}
.user-login .nav-l,
.nav-r i {
  font-size: 18px;
  line-height: 33px;
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

.menu i{
    padding-left: 10px;
}
</style>