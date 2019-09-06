<template>
  <div class="user">
    <div v-if="btnFlag" class="go-top el-icon-arrow-up" @click="backTop"></div>
    <!-- TopNav -->
    <header class="user-head">
      <div class="user-head-l">
        <img :src="topNav.srcUrl" />
      </div>
      <div class="user-head-c">
        <span>{{topNav.title}}</span>
      </div>
      <div class="user-head-r">
        <i :class="topNav.icon"></i>
      </div>
    </header>
    <!-- 登录注册 -->
    <div class="user-wrap">
      <!-- 背景图片 -->
      <img class="wrap-img" src="../assets/user_bg.png" alt />
      <div class="user-ht">
        <img :src="topNav.srcUrl" alt />
        <div class="user-t" @click="goto('login')">
          <div class="user-t-top">下午好</div>
          <div class="user-t-botm">{{logReg}}</div>
        </div>
      </div>
    </div>
    <ul class="card-view" v-for="item in cardlist" :key="item.title">
      <li v-for="type in item" :key="type.srcImg">
        <img :src="type.srcImg" alt />
        <div class="item-name">{{type.title}}</div>
      </li>
    </ul>
    <div class="guess-you-like">
      <img src="../assets/guess_you_like.jpg" alt />
      <!-- 列表 -->
      <div class="gul-list">
        <div v-for="item in dataitem" :key="item.id">
          <img :src="item.bigImg" alt />
          <div class="goods-name ellipsis">{{item.goodsName}}</div>
          <div class="price-cart">
            <i class="goods-price">{{item.mallPrice}}</i>
            <i class="icon icon-add-cart el-icon-shopping-cart-1" @click="addcart(item.goodsImg,item.goodsName,item.mallPrice,item.goodsStandard,item.id,item.goodsBrand,item.qty)"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 数据滚动 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      logReg:'点击登录/注册用户',
      btnFlag:0,
      qty: 1,
      topNav: {
        icon: "el-icon-setting",
        srcUrl: require("../assets/not_user.jpg"),
        title: "我的"
      },
      cardlist: [
        [
          {
            title: "待收货",
            srcImg: require("../assets/user_order_01.png")
          },
          {
            title: "代付款",
            srcImg: require("../assets/user_order_05.png")
          },
          {
            title: "已完成",
            srcImg: require("../assets/user_order_03.png")
          },
          {
            title: "已取消",
            srcImg: require("../assets/user_order_04.png")
          },
          {
            title: "全部订单",
            srcImg: require("../assets/user_two_05.png")
          }
        ],
        [
          {
            title: "我的卡劵",
            srcImg: require("../assets/user_two_01.png")
          },
          {
            title: "我的宅配",
            srcImg: require("../assets/user_two_02.png")
          },
          {
            title: "我的收藏",
            srcImg: require("../assets/user_two_03.png")
          },
          {
            title: "我的余额",
            srcImg: require("../assets/user_two_04.png")
          },
          {
            title: "优惠券",
            srcImg: require("../assets/user_two_05.png")
          }
        ],
        [
          {
            title: "收货地址",
            srcImg: require("../assets/user_third_02.png")
          },
          {
            title: "绑定手机",
            srcImg: require("../assets/user_third_03.png")
          },
          {
            title: "修改密码",
            srcImg: require("../assets/user_third_04.png")
          },
          {
            title: "修改邮箱",
            srcImg: require("../assets/user_third_05.png")
          },
          {
            title: "在线客服",
            srcImg: require("../assets/service.png")
          }
        ]
      ],
      data: {},
      count: 0,
      dataitem: [],
      addcartdata: [],
      adddata: {}
    };
  },
  methods: {
    goto(path) {
      this.$router.push({ path });
    },
    load() {
      this.count += 1;
    },
    addcart(
      goodsImg,
      goodsName,
      mallPrice,
      goodsStandard,
      id,
      goodsBrand,
      qty
    ) {
      // 判断商品是否已经存在购物车
      // 存在改变数量
      // 不存在改变id
      let { cartlist } = this.$store.state;
      var hasItem = cartlist.filter(function(item) {
        // 得到一个空数组或者数组
        return item.id == id;
      })[0];
      if (hasItem) {
        this.$store.commit("changeQty", { id: id, qty: hasItem.qty + 1 });
        // console.log(hasItem.qty);
      } else {
        this.$store.commit("addItem", {
          goodsImg,
          goodsName,
          mallPrice,
          goodsStandard,
          id,
          goodsBrand,
          qty: 1
        });
      }
    },
    // 回到顶部
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 300) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  async created() {
    // let {data} = await this.$axios.get('http://52.78.186.217:8888/user/list', {});
    // this.dataitem = data[0].list
    // console.log(this.dataitem );
    let data2 = await this.$axios.get(
      "http://52.78.186.217:8888/home/goodstypeo",
      {}
    );
    data2.data.map(item => {
      item.list.map(self => {
        this.dataitem.push(self);
      });
    });
    // 如果user有信息 那么就把它绑定上去
    if(this.$store.state.user.length != 0){
      this.logReg = this.$store.state.user[0].user;
      this.topNav.srcUrl = require('../assets/panhu.png');
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  background-color: #f0f2f5;
}
.user {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}
.user .user-head {
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 0.9rem;
  /* background: #6e6565; */
  /* border-bottom: 1px solid #000; */
  box-shadow: 0 1px 2px #ccc;
  display: flex;
  background: #fff;
}
.user-head-c span {
  font-size: 14px;
}
.user .user-head .user-head-l {
  position: relative;
  /* width: 1.026667rem; */
  width: 38.5px;
  height: 100%;
  text-align: center;
  font-size: 0.9rem;
}
.user .user-head .user-head-l img {
  position: absolute;
  top: 0.133333rem;
  left: 0.133333rem;
  width: 0.615733rem;
  border-radius: 50%;
}
.user .user-head .user-head-c {
  color: #444;
  flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  width: 298px;
  height: 100%;
  /* line-height: 33px; */
  text-align: center;
  font-size: 16px;
}
.user .user-head .user-head-c i {
  line-height: 100%;
  font-size: 16px;
}
.user .user-head .user-head-r {
  width: 38.5px;
  height: 100%;
  font-size: 20px;
  text-align: center;
}
/* user 登录 /注册 */
.user-wrap {
  position: relative;
  width: 100%;
  min-height: 3.565867rem;
}
.user-wrap .wrap-img {
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
}
.user-wrap .user-ht {
  width: 100%;
  height: 1.673333rem;
  position: absolute;
  display: flex;
  top: calc(55% - 0.836665rem);
  left: 0;
  /* padding-left: 0.655175rem; */
  padding-left: 17px;
}
.user-wrap .user-ht img {
  width: 62.73px;
  height: 62.73px;
  border-radius: 50%;
}
.user-wrap .user-t {
  color: #fff;
  font-size: 14px;
  line-height: 15px;
  /* padding: 0 0.58rem; */
  padding: 0 14px;
  -webkit-flex: 1;
  font-size: 12px;
}
.user-t .user-t-top {
  padding-top: 18px;
}
.card-view {
  display: flex;
  margin: 3.206%;
  width: 93.588%;
  background-color: #fafafa;
  /* background: #999; */
  /* border-radius: 0.0625rem; */
  border-radius: 1px;
  box-shadow: 0 2px 2px rgba(207, 207, 207, 0.3);
}
.card-view li {
  width: 20%;
  height: 75.5px;
  /* height: 4.690625rem; */
  text-align: center;
  padding: 10px 0;
}
.card-view > li > img {
  width: 39.58px;
  height: 39.58px;
  vertical-align: middle;
}
.card-view .item-name {
  color: #282828;
  font-size: 12px;
  line-height: 21px;
}
/* 猜你喜欢 */
.guess-you-like {
  width: 100%;
  max-width: 100%;
  background-color: #fefbfb;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
/* 猜你喜欢 */
.guess-you-like > img {
}
.gul-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 100px;
}
.gul-list > div {
  width: calc(50% - 13px);
  margin-left: 8.8px;
  margin-top: 7.8px;
  background-color: #fff;
  float: left;
}

.goods-name {
  height: 25.2px;
  line-height: 28.8px;
  font-size: 14.4px;
  padding: 0 9.5px;
  color: #373737;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
.price-cart {
  display: flex;
  padding: 6.4px 0 5.4px 5.5px;
}
.goods-price {
  color: red;
  font-size: 14px;
  flex: 1;
}
i {
  font: inherit;
}
.goods-price::before {
  content: "\FFE5";
}
.icon-add-cart {
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: red;
  margin-right: 10px;
  line-height: 21px;
  color: #fff;
  text-align: center;
}
/* .icon-add-cart:before {
    content: "el-icon-shopping-cart-2";
} */
.go-top {
  color: rgb(173, 168, 168);
  font-size: 30px;
  z-index: 100;
  position: fixed;
  bottom: 60px;
  right: 10px;
  background: #fff;
  border: 1px solid rgb(173, 168, 168);
  border-radius: 50%;
  opacity: 0.8;
}
.user-t-botm{
  font-size: 14px;
  color:yellowgreen;
}
</style>
