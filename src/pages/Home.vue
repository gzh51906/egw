<template>
    <div class="home">
        <header class="header">
            <el-menu :default-active="active" class="el-menu-demo" router mode="horizontal">
                <el-menu-item :index="item.path" v-for="item in topType" :key="item.ty_id">
                    <p class="type">{{item.title}}</p>
                </el-menu-item>
            </el-menu>
        </header>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Router from "vue-router";

// 重复点击不会报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default {
  data() {
    return {
      active: "hot",
      topType: [
        { title: "依谷热卖", ty_id: 1, path: "home/hot" },
        { title: "新鲜水果", ty_id: 2, path: "home/fruit" },
        { title: "绿色菜篮", ty_id: 3, path: "home/green" },
        { title: "粮油调味", ty_id: 4, path: "home/oil" },
        { title: "干活特产", ty_id: 5, path: "home/ganhuo" },
        { title: "零食饮料", ty_id: 6, path: "home/snacks" },
        { title: "美酒茗茶", ty_id: 7, path: "home/mincha" },
        { title: "礼品礼券", ty_id: 8, path: "home/cardli" },
        { title: "家具厨卫", ty_id: 9, path: "home/chuwei" },
        { title: "创意家电", ty_id: 10, path: "home/jiadian" }
      ]
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    },
    goto() {
      this.$router.push({ path: "/home/hot" });
    }
  }
};
</script>
<style lang="scss">
.main {
  margin-top: 50px;
}
.home .header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  .el-menu-demo {
    height: 100%;
    display: flex;
    overflow: auto;
    .el-menu-item {
      height: 100%;
      .type {
        height: 100%;
        line-height: 38px;
        box-sizing: border-box;
      }
    }
    .is-active {
      border: none;
    }
    .is-active .type {
      border-bottom: 2px solid #f44;
    }
  }
}
</style>
