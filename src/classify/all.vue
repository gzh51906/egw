<template>
    <div class="all">
        <!-- 侧边栏 -->
          <el-aside
            width="105px"
            class="el-menu-demo"
          >
            <div class="CGE"
              :default-active="active" 
              router 
              mode="horizontal"
              @select="changeActive"
            >
              <div :index='item.path' v-for="item in topTpe" :key="item.ty_id" class="text item">
                {{item.name }}
              </div>
            </div>
          </el-aside>
          <!-- 右边栏 -->
          <el-main>
            <div class="itmlist">
              <div class="fl">
              <img src="../assets/logo.png" alt="">
              </div>
              <div class="fr">
                <div class="nam">台湾...</div>
                <div class="intro">来自...</div>
                <div class="supro">
                  <span class="one">自营</span>
                  <span class="two">次日达</span>
                  <span class="three">仓库</span>
                </div>
                <div class="pic">￥58.8</div>
                <div class="cart">
                  <i class="el-icon-goods"></i>
                </div>
              </div>
            </div> 
            <div class="itmlist">
              <div class="fl">
              <img src="../assets/logo.png" alt="">
              </div>
              <div class="fr">
                <div class="nam">台湾...</div>
                <div class="intro">来自...</div>
                <div class="supro">
                  <span class="one">自营</span>
                  <span class="two">次日达</span>
                  <span class="three">仓库</span>
                </div>
                <div class="pic">￥58.8</div>
                <div class="cart">
                  <i class="el-icon-goods"></i>
                </div>
              </div>
            </div> 
            <div class="itmlist">
              <div class="fl">
              <img src="../assets/logo.png" alt="">
              </div>
              <div class="fr">
                <div class="nam">台湾...</div>
                <div class="intro">来自...</div>
                <div class="supro">
                  <span class="one">自营</span>
                  <span class="two">次日达</span>
                  <span class="three">仓库</span>
                </div>
                <div class="pic">￥58.8</div>
                <div class="cart">
                  <i class="el-icon-goods"></i>
                </div>
              </div>
            </div> 
            <div class="itmlist">
              <div class="fl">
              <img src="../assets/logo.png" alt="">
              </div>
              <div class="fr">
                <div class="nam">台湾...</div>
                <div class="intro">来自...</div>
                <div class="supro">
                  <span class="one">自营</span>
                  <span class="two">次日达</span>
                  <span class="three">仓库</span>
                </div>
                <div class="pic">￥58.8</div>
                <div class="cart">
                  <i class="el-icon-goods"></i>
                </div>
              </div>
            </div> 
            <div class="itmlist">
              <div class="fl">
              <img src="../assets/logo.png" alt="">
              </div>
              <div class="fr">
                <div class="nam">台湾...</div>
                <div class="intro">来自...</div>
                <div class="supro">
                  <span class="one">自营</span>
                  <span class="two">次日达</span>
                  <span class="three">仓库</span>
                </div>
                <div class="pic">￥58.8</div>
                <div class="cart">
                  <i class="el-icon-goods"></i>
                </div>
              </div>
            </div> 
          </el-main>
    </div>
     
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  data() {
    return {
      active: "hot",
      topTpe: [
        { name: "依谷热卖", ty_id: 1, path: "/home/hot" },
        { name: "新鲜水果", ty_id: 2, path: "/home/fruit" },
        { name: "绿色菜篮", ty_id: 3, path: "/home/green" },
        { name: "粮油调味", ty_id: 4, path: "/home/oil" },
        { name: "干活特产", ty_id: 5, path: "/home/ganhuo" },
        { name: "零食饮料", ty_id: 6, path: "/home/snacks" },
        { name: "美酒茗茶", ty_id: 7, path: "/home/mincha" },
        { name: "礼品礼券", ty_id: 8, path: "/home/cardli" },
        { name: "家具厨卫", ty_id: 9, path: "/home/chuwei" },
        { name: "创意家电", ty_id: 10, path: "/home/jiadian" }
      ]
    };
  },
  methods: {
    changeActive(index, path) {
      console.log(index, path);
      this.active = index;
      console.log(222);
    }
  },
  created() {
    this.active = this.$route.path;
    axios.get('http://52.78.186.217:8888/group/list').then(({data})=>{
      // console.log(data);
    })
  }
};
</script>
<style scoped>
.all {
  height: 100%;
  box-sizing: border-box;
  width: 100%;
}

.el-aside {
  float: left;
}
.el-main {
  padding: 0;
  margin-right: 0;
  overflow: auto;
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
</style>
