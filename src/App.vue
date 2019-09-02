<template>
  <div id="app">
    <!-- <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item :index="item.name" v-for="item in data" :key="item.name">
        {{item.text}}
      </el-menu-item>
    </el-menu> -->

    <footer class="foot" >
      <ul>
        <li v-for="item in data" :key="item.name"> {{item.text}}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
// 引入Element样式
import "../node_modules/element-ui/lib/theme-chalk/index.css";

export default {
  name: "app",
  components: {},
  data(){
    return{
      data:[
        {
          name:'home',
          text:'首页',
          path:'/home'
        },
        {
          name:'goods',
          text:'分类',
          path:'/goods'
        },
        {
          name:'Cart',
          text:'购物车',
          path:'/cart'
        },
        {
          name:'Mine',
          text:'用户',
          path:'/mine'
        },
        {
          name:'Reg',
          text:'登录',
          path:'/reg'
        },
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  padding: 0;
  margin: 0;
}
.el-menu-demo{
  position: fixed;
  bottom: 36px;
  left: 0;
}
.el-menu-demo .el-menu-item{
width: 1.706667rem;
height: 1.093333rem;
}
.foot{
  width: 8.533333rem;
  height: 1.093333rem;
  background: #9999;
  position: fixed;
  bottom: 0px;
  left: 0px;
}

</style>
