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
      <div class="content">
        <div class="port">
          <span>依谷</span>
          <span>头条</span>
        </div>
        <el-carousel height="20px" direction="vertical" :autoplay="true" indicator-position="none">
          <el-carousel-item v-for="item in info" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="slider">
      <el-carousel direction="horizontal" :autoplay="true" indicator-position="none" height="75px">
        <el-carousel-item v-for="item in smallbanner" :key="item.id">
          <img :src="item.img">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="early">
      <img src="../assets/guess_you_like.jpg">
      <div class="early-wrap">
        <img :src="newlist.bgImg1">
        <div class="early-goods-wrap">
          <img src="../assets/new.png" class="new">
          <img src="../assets/strawberry.png" class="stra">
          <div class="early-goods-head">
            <div class="early-head-title">
              {{newlist.name}}
            </div>
            <div class="early-head-desc">{{newlist.state}}</div>
            <ul class="early-goods-list">
              <li class="list" v-for="item in newlist.bcPublishedGoodsEos" :key="item.goodsId"><img :src="item.bseGoodsEo.goodsImg">
                <p class="tit">{{item.goodsName}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="sell-well">
      <img :src="hotlist.bgImg1" class="bg">
      <div class="early-goods-wrap">
        <img src="../assets/top_sale.png" class="top">
        <div class="early-goods-head">
          <div class="early-head-title">
            {{hotlist.name}}
          </div>
          <div class="early-head-desc">{{hotlist.state}}</div>
          <ul class="early-goods-list">
            <li class="list" v-for="item in hotlist.bcPublishedGoodsEos" :key="item.goodsId"><img :src="item.bseGoodsEo.goodsImg">
              <p class="tit">{{item.goodsName}}</p>
              <p class="price">￥{{item.mallPrice}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="goods">
      <img src="../assets/today.jpg" class="today">
      <div class="list" v-for="(item,index) in goodsbg" :key="index">
        <img :src="item.bgImg1" class="list_bg">
        <div class="list_content" v-if="goodslist[index]&&goodslist[index].list">
          <p class="list_more">查看更多>></p>
          <ul class="list_ul">
            <li class="list_li" v-for="it in goodslist[index].list" :key="it.goodsId">
              <img :src="it.bseGoodsEo.goodsImg" class="list_op">
              <p class="cont">{{it.goodsName}} </p>
              <div class="price">￥{{it.mallPrice}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerData: [],
      icon1: [],
      icon2: [],
      info: [
        "1、你好，欢迎来到依谷！！！！",
        "2、你想要的这里都有！！！！",
        "3、欢度中秋，全场五折大酬宾"
      ],
      smallbanner: [],
      newlist: {},
      hotlist: {},
      goodsbg: [],
      goodslist: []
    };
  },
  created() {
    // console.log(this.$axios);
    /* 轮播图 */
    this.$axios.get(`${this.$url}/home/01`, {}).then(({ data }) => {
      this.bannerData = data[0].list;
    });
    /* 第一行icon */
    this.$axios.get(`${this.$url}/home/icon1`, {}).then(({ data }) => {
      this.icon1 = data[0].list;
    });
    /* 第二行icon */
    this.$axios.get(`${this.$url}/home/icon2`, {}).then(({ data }) => {
      this.icon2 = data[0].list;
    });
    /* smallbanner */
    this.$axios.get(`http://localhost:8888/home/small`, {}).then(({ data }) => {
      this.smallbanner = data[0].list;
    });
    /* 时令热销 */
    this.$axios
      .get(`http://localhost:8888/home/hotlist`, {})
      .then(({ data }) => {
        this.newlist = data[0].obj;
        this.hotlist = data[0].obj1;
      });
    /* 商品楼层背景&标题 */
    this.$axios
      .get(`http://localhost:8888/home/goodsbg`, {})
      .then(({ data }) => {
        this.goodsbg = data;
      });
    /* 商品楼层内容 */
    this.$axios
      .get(`http://localhost:8888/home/goodsli`, {})
      .then(({ data }) => {
        this.goodslist = data;
        // console.log(this.goodslist[0].list);
      });
  }
};
</script>
<style lang="scss" scoped>
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
  .search {
    height: 42px;
    box-sizing: border-box;
    padding: 10px 14px;
    line-height: 22px;
    font-size: 12px;
    color: #666;
    .content {
      border: 0.6px solid #ddd;
      border-radius: 3px;
      padding-left: 6px;
      box-sizing: border-box;
      .port {
        float: left;
        margin-right: 10px;
        span:nth-child(1) {
          font-weight: bold;
          color: #58bc58;
        }
      }
    }
  }
  .slider {
    width: 100%;
    height: 87px;
    padding: 6px 12px;
    box-sizing: border-box;
    .el-carousel {
      width: 100%;
      height: 100%;
      .el-carousel__item {
        width: 100%;
        height: 75px;
        img {
          height: 100%;
        }
      }
    }
  }
  .early {
    width: 100%;
    height: 300px;
    position: relative;
    img {
      width: 100%;
    }
    .early-wrap {
      position: absolute;
      top: 0;
      .early-goods-wrap {
        position: absolute;
        bottom: 10px;
        width: 365px;
        height: 173px;
        background: #fff;
        margin: 0 5px;
        border-radius: 4px;
        .new {
          width: 44px;
        }
        .stra {
          position: absolute;
          width: 32px;
          top: -10px;
          right: -4px;
        }
        .early-goods-head {
          height: 50px;
          position: absolute;
          top: 0;
          width: 100%;
          text-align: center;
          .early-head-title {
            color: #42e32f;
            font-size: 16px;
            line-height: 30px;
          }
          .early-head-desc {
            color: #555;
            font-size: 12px;
          }
          .early-goods-list {
            margin-top: 20px;
            display: flex;
            .list {
              flex: 1;
              padding: 0 6px;
              .tit {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 70px;
                font-size: 12px;
                color: #555;
              }
            }
          }
        }
      }
    }
  }
  .sell-well {
    width: 100%;
    height: 200px;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
    }
    .early-goods-wrap {
      position: absolute;
      bottom: 10px;
      width: 365px;
      height: 173px;
      background: #fff;
      margin: 0 5px;
      border-radius: 4px;
      .top {
        width: 44px;
      }
      .early-goods-head {
        height: 50px;
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        .early-head-title {
          color: #f00;
          font-size: 16px;
          line-height: 30px;
        }
        .early-goods-list {
          margin-top: 6px;
          display: flex;
          .list {
            width: 29%;
            padding: 0 6px;
            .tit {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 100%;
              font-size: 12px;
              color: #555;
            }
            .price {
              font-size: 13px;
              color: #f00;
            }
            img {
              width: 76%;
            }
          }
        }
      }
    }
  }
  .goods {
    .today {
      width: 100%;
      display: block;
    }
    .list {
      position: relative;
      .list_bg {
        width: 100%;
        display: block;
      }
      .list_content {
        position: absolute;
        top: 50px;
        // background: #42e32f;
        width: 100%;
        .list_more {
          font-size: 10px;
          color: #fff;
          text-align: center;
          width: 100%;
        }
        .list_ul {
          width: 100%;
          display: flex;
          margin-top: 10px;
          overflow: auto;
          .list_li {
            width: 117px;
            background: #fff;
            margin-left: 6px;
            padding: 6px 6px;
            border-radius: 4px;
            box-sizing: border-box;
            .list_op {
              width: 110px;
            }
            .cont {
              color: #555;
              font-size: 12px;
              line-height: 24px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 110px;
            }
            .price {
              color: #f00;
              font-size: 14px;
              text-align: center;
              line-height: 26px;
            }
          }
        }
      }
    }
  }
}
</style>
