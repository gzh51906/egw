<template>
  <!-- 分类 -->
  <div class="classify">
    <header class="header">
      <div class="gotoback" @click="previous">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="serch">
        <el-button round icon="el-icon-search">大闸蟹</el-button>
      </div>
      <span class="el-icon-more three_dian" size="medium" color="#444"></span>
    </header>
    <!-- 第二栏导航 -->
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  data() {
    return {
      active: "all",
      topype: [
        { name: "全部", ty_id: 1, path: "/classify/all" },
        { name: "奇异果/车厘子", ty_id: 2, path: "/classify/kiwi" },
        { name: "苹果/梨子/瓜类", ty_id: 3, path: "/classify/apple" },
        { name: "提子/葡萄/莓类", ty_id: 4, path: "/classify/grape" },
        { name: "橙桔柑柚", ty_id: 5, path: "/classify/orange" },
        { name: "桃李杏枣", ty_id: 6, path: "/classify/peach" },
        { name: "热带水果", ty_id: 7, path: "/classify/hotfruit" },
        { name: "其他水果", ty_id: 8, path: "/classify/olther" },
        { name: "水果礼盒", ty_id: 9, path: "/classify/gift" }
      ]
    };
  },
  methods: {
    changeActive(index, path) {
      // console.log(index, path);
      this.active = index;
    },
    previous() {
      //跳转上一页
      this.$router.go(-1);
    }
  },
  created() {
    this.active = this.$route.path;
  }
};
</script>

<style scoped>
.classify {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
}
.header {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  background: #fff;
}
.gotoback {
  float: left;
  padding: 10px;
}

.serch {
  margin-top: 0;
  background: #fff;
  width: 85%;
  height: 38.5px;
  padding: 4px 10px;
  box-sizing: border-box;
  float: left;
}

.el-button {
  width: 100%;
  padding: 0;
  height: 100%;
  border: none;
  background: #eee;
  text-align: left;
  text-indent: 6px;
  font-size: 12px;
  color: #999;
  float: left;
}

.three_dian {
  width: 0.266667rem;
  margin-right: 8px;
  margin-top: 14px;
  color: #000;
  display: block;
  float: left;
}
.active {
  color: #f44;
}
</style>