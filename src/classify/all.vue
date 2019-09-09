<template>
  <div class="all">
    <el-menu class="el-menu-demo" :default-active="active" router mode="horizontal">
      <el-menu-item :index="item.path" v-for="item in topype" :key="item.ty_id">
        <p class="type">
          {{item.name}}
        </p>
      </el-menu-item>
    </el-menu>
    <!-- 侧边栏 -->
    <el-tabs tab-position="left" style="width:100px">
      <ul class="left">
        <li v-for="(item,index) in topTpe" :key="item.ty_id" class="title">
          <p class="td" @click="goto(index,item.path)">{{item.name}}</p>
        </li>
      </ul>

    </el-tabs>
    <!-- 右边栏 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>

</template>

<script>
// import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  data() {
    return {
      active: "fruit",
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
      ],
      topTpe: [
        { name: "新鲜水果", ty_id: 2, path: "/classify/all/fruit" },
        { name: "绿色菜篮", ty_id: 3, path: "/classify/all/green" },
        { name: "粮油调味", ty_id: 4, path: "/classify/all/oil" },
        { name: "干活特产", ty_id: 5, path: "/classify/all/ganhuo" },
        { name: "零食饮料", ty_id: 6, path: "/classify/all/snacks" },
        { name: "美酒茗茶", ty_id: 7, path: "/classify/all/mincha" },
        { name: "礼品礼券", ty_id: 8, path: "/classify/all/cardli" },
        { name: "家具厨卫", ty_id: 9, path: "/classify/all/chuwei" },
        { name: "创意家电", ty_id: 10, path: "/classify/all/jiadian" }
      ]
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
    },
    goto(index, path) {
      // console.log(index);
      this.$router.push(path);
    }
  },
  created() {
    this.active = this.$route.path;
  }
  // methods: {
  //   changeActive(index, path) {
  //     // console.log(index, path);
  //     this.active = index;
  //     // console.log(222);
  //   }
  // },
  // created() {
  //   this.active = this.$route.path;
  //   axios.get("http://52.78.186.217:8888/group/list").then(({ data }) => {
  //     // console.log(data);
  //   });
  // }
};
</script>
<style scoped>
.all {
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;
}
.el-tabs {
  float: left;
}
.el-aside {
  float: left;
}
.el-main {
  padding: 0;
  margin-right: 0;
  overflow: auto;
  width: 270.33px;
  height: 600px;
}
.cent {
  display: flex;
  flex-direction: column;
}
.itmlist {
  width: 100%;
  height: 114px;
  border-bottom: 0.013333rem solid #f6f6f6;
}

.fl {
  float: left;
}

.fl img {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0.2rem;
}

.fr {
  float: left;
  margin-left: 0.4rem;
}

.nam {
  margin-top: 0.2rem;
  font-size: 0.4rem;
  color: #000;
}
.intro {
  font-size: 0.266667rem;
  color: #939393;
}

.supro {
  margin-top: 0.2rem;
}

.one {
  color: #f44;
  font-size: 0.266667rem;
  margin-right: 0.2rem;
}

.two {
  display: inline-block;
  font-size: 0.266667rem;
  line-height: 0.333333rem;
  color: #fff;
  background: #f44;
  border-radius: 0.133333rem;
  margin-right: 0.2rem;
}

.three {
  font-size: 0.266667rem;
  color: #af52ef;
}

.pic {
  float: left;
  font-size: 0.466667rem;
  color: #f44;
  padding-top: 0.2rem;
}

.cart {
  width: 0.666667rem;
  height: 0.666667rem;
  float: right;
  margin-top: 0.2rem;
  background: #f44;
  margin-left: 1.733333rem;
  border-radius: 50% 50%;
  text-align: center;
}

.cart i {
  line-height: 0.666667rem;
  font-size: 0.4rem;
  line-height: 0.666667rem;
  color: #fff;
}

.el-aside {
  height: 100%;
}

.text {
  width: 100%;
  height: 45px;
  font-size: 12px;
  color: #aeaeae;
  background: #fcfcfc;
  text-align: center;
  line-height: 45px;
  padding: 0;
}

.active {
  background: #fff;
}

.type {
  line-height: 0.666667rem;
  color: #000;
  font-size: 0.266667rem;
}

.el-menu-item {
  height: 100%;
  line-height: 0.75rem;
}

.el-menu-demo {
  width: 100%;
  height: 0.75rem;
  overflow: auto;
  display: flex;
  box-sizing: border-box;
  margin-top: 38px;
}
.left {
  width: 100%;
  height: 100%;
  border-right: 1px solid #aaa;
}
.left .title {
  width: 100%;
  height: 38px;
  text-align: center;
  color: #444;
  line-height: 38px;
}
</style>
