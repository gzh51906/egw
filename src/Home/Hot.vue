<template>
    <div class="hot">
        <div class="block">
            <el-carousel height="152px">
                <el-carousel-item v-for="item in bannerData" :key="item.id">
                    <img :src="item.img">
                </el-carousel-item>
            </el-carousel>
        </div>
        <ul class="icon-one">
            <li class="icon" v-for="item in icon1" :key="item.id"><img :src="item.img">
                <p class="title">{{item.name}}</p>
            </li>
        </ul>
        <ul class="icon-two">
            <li class="icon" v-for="item in icon2" :key="item.tid"><img :src="item.timage">
                <p class="title">{{item.tname}}</p>
            </li>
            <router-link tag="li" to="/genre/list" class="icon">
                <div class="classify-img">
                    <img src="http://oss.egu365.com/upload/mobile-all-categories.jpg" />
                </div>
                <p class="classify-txt title">全部分类</p>
            </router-link>
        </ul>
        <div class="search">
            <div class="port">
                <span>依谷</span>
                <span>头条</span>
            </div>
            <el-carousel height="20px" direction="vertical" :autoplay="true" indicator-position="none">
                <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      bannerData: [],
      icon1: [],
      icon2: []
    };
  },
  created() {
    // console.log(this.$axios);
    /* 轮播图 */
    this.$axios.get("http://localhost:8888/home/01", {}).then(({ data }) => {
      this.bannerData = data[0].list;
    });
    /* 第一行icon */
    this.$axios.get("http://localhost:8888/home/icon1", {}).then(({ data }) => {
      this.icon1 = data[0].list;
    });
    /* 第二行icon */
    this.$axios.get("http://localhost:8888/home/icon2", {}).then(({ data }) => {
      this.icon2 = data[0].list;
    });
  }
};
</script>
<style lang="scss" scoped>
.el-carousel__item {
  background: #58bc58;
}
.hot {
  .block {
    width: 100%;
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .icon-one {
    height: 100px;
    // background: #58bc58;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    .icon {
      display: flex;
      flex-direction: column;
      color: #555;
      font-size: 12px;
      img {
        width: 48.27px;
        height: 48.27px;
        margin-bottom: 6px;
      }
    }
  }
  .icon-two {
    height: 150px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .icon {
      width: 20%;
      color: #555;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 51.18px;
        height: 51.18px;
        display: block;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
