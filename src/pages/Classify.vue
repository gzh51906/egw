<template>
<!-- 分类 -->
    <div class="classify">
      <el-container>
        <!-- 头部搜索 -->
        <el-header>
          <el-button type="text" disabled @click="goback">
                <i class="el-icon-arrow-left"></i>
            </el-button>
            <el-input v-model="input" placeholder="大闸蟹" prefix-icon="el-icon-search"></el-input>
            <el-button type="text" disabled>
                <i class="el-icon-more three_dian" size="medium" color="#444"></i>
            </el-button>
        </el-header>
        <!-- 第二栏导航 -->
         <el-menu :default-active="active" class="el-menu-demo" router mode="horizontal">
              <el-menu-item :index="item.path" v-for="item in topType" :key="item.ty_id">
                  <p class="type">{{item.title}}</p>
              </el-menu-item>
          </el-menu>
        <el-container>
          <!-- 侧边栏 -->
          <el-aside width="105px">
            <el-card class="box-card">
              <div :index='item.path' v-for="item in topType" :key="item.ty_id" class="text item">
              {{item.tittle }}
          </div>
        </el-card>
          </el-aside>
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
            
          </el-main>
        </el-container>
      </el-container>
        
        

    </div>
</template>

<script>
import router from "vue-router";
export default {
  data() {
    return {
      active: "all",
      topType: [
        { title: "全部", ty_id: 1, path: "../classify/all" },
        { title: "奇异果/车厘子", ty_id: 2, path: "../classify/kiwi" },
        { title: "苹果/梨子/瓜类", ty_id: 3, path: "../classify/apple" },
        { title: "提子/葡萄/莓类", ty_id: 4, path: "../classify/grape" },
        { title: "橙桔柑柚", ty_id: 5, path: "../classify/orange" },
        { title: "桃李杏枣", ty_id: 6, path: "../classify/peach" },
        { title: "热带水果", ty_id: 7, path: "../classify/hotfruit" },
        { title: "其他水果", ty_id: 8, path: "../classify/olther" },
        { title: "水果礼盒", ty_id: 9, path: "../classify/gift" }
      ]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    changeActive(index) {
      this.active = index;
    },
    goto() {
      this.$router.push({ path: "../classify/all" });
    }
  },
  components: {
    router
  },
  async created() {
    let ilist = await this.$axios("http://52.78.186.217:8888/group/list");
    this.ilist = ilist.list[0].sort;
    console.log(list.list[0].sort);
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

.three_dian {
  width: 0.266667rem;
  margin-right: 8px;
  margin-top: 5px;
  color: #666666;
}
.el-menu-demo {
  width: 100%;
  height: 0.666667rem;
  display: flex;
  overflow: auto;
  box-sizing: border-box;
}
.type {
  line-height: 0.666667rem;
  color: #7c7c7c;
  font-size: 0.266667rem;
}
.is-active .type {
  border-bottom: 2px solid #f44;
}

.el-menu-item {
  height: 0.333333rem;
  line-height: 0.32rem;
}

.el-main{
  padding: 0;
}

.itmlist{
  width: 100%;
  height: 114px;
  border-bottom: .013333rem solid #f6f6f6;
}

.fl{
  float: left;
}

.fl img{
  width: 2.4rem;
  height: 2.4rem;
  margin: .2rem;
}

.fr{
  float: left;
  margin-left: .4rem;
}

.nam{
  margin-top: .2rem;
  font-size: .4rem;
  color: #000;
}
.intro{
  font-size: .266667rem;
  color: #939393;
}

.supro{
  margin-top: .2rem;
}

.one{
  color: #f44;
  font-size: .266667rem;
  margin-right: .2rem;
}

.two{
  display: inline-block;
  font-size: .266667rem;
  line-height: .333333rem;
  color: #fff;
  background: #f44;
  border-radius: .133333rem;
  margin-right: .2rem;
}

.three{
  font-size: .266667rem;
  color: #af52ef;
}

.pic{
  float: left;
  font-size: .466667rem;
  color: #f44;
  padding-top: .2rem;
}

.cart{
  width: .666667rem;
  height: .666667rem;
  float: right;
  margin-top: .2rem;
  background: #f44;
  margin-left: 1.733333rem;
  border-radius: 50% 50%;
  text-align: center;
}

.cart i{
  line-height: .666667rem;
  font-size: .4rem;
  line-height: .666667rem;
  color: #fff;
}
</style>