<template>
<!-- 分类 -->
    <div class="classify">
      <el-container>
        <!-- 头部搜索 -->
        <el-header style="height: 45px;">
          <el-button type="text" disabled>
            <div class="gotoback" @click="previous">
              <i class="el-icon-arrow-left"></i>
            </div>
            </el-button>
            <el-input placeholder="大闸蟹" prefix-icon="el-icon-search"></el-input>
            <el-button type="text" disabled>
                <i class="el-icon-more three_dian" size="medium" color="#444"></i>
            </el-button>
        </el-header>
        
        
      </el-container>
      <!-- 第二栏导航 -->
         <el-menu
           class="el-menu-demo" 
           :default-active="active" 
           router 
           mode="horizontal"
           @select="changeActive"
          >
              <el-menu-item :index="item.path" v-for="item in topype" :key="item.ty_id">
                <!-- <router-link :to="item.path" :active-class="active"> -->
                  <p class="type">
                    {{item.name}}
                  </p>
                <!-- </router-link> -->
              </el-menu-item>
          </el-menu>
          <el-container>
         <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//点击重复不会报错
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

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
      console.log(index, path);
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
  width: 100%;
  /* border-bottom: 0.013333rem solid #f0f0f0; */
  overflow: hidden;
  box-sizing: border-box;
}
.el-button {
  padding-left: 0.22rem;
  float: left;
}
.el-icon-arrow-left {
  font-size: 0.666667rem;
}
.el-input {
  width: 7.6rem;
  float: left;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  border-radius: 0.333333rem;
  height: 0.8rem;
  outline-color: invert;
  outline-style: none;
  outline-width: 0px;
  border: none;
  border-style: none;
  text-shadow: none;
  -webkit-appearance: none;
  outline-color: transparent;
  box-shadow: none;
}

.el-button {
  margin-left: 0.066667rem;
}

.el-menu-item.is-active {
  border: none;
}

.three_dian {
  width: 0.266667rem;
  margin-right: 8px;
  margin-top: 5px;
  color: #000;
}
.el-menu-demo {
  width: 100%;
  height: 0.75rem;
  display: flex;
  overflow: auto;
  box-sizing: border-box;
}
.type {
  line-height: 0.666667rem;
  color: #000;
  font-size: 0.266667rem;
}
.is-active .type {
  border-bottom: 2px solid #f44;
}

.el-menu-item {
  height: 100%;
  line-height: 0.75rem;
}

.active {
  color: #f44;
}
</style>