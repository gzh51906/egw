<template>
  <div class="goods-main">

    <div class="goodss">
      <div class="nav nav-t">
        <div class="nav-l" @click="previous">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="nav-title">
          <span>{{info.goodsName}}</span>
        </div>
        <div class="nav-r" @click="changdata">
          <i class="el-icon-more"></i>
        </div>
        <div class="menu van-popup2" v-show="check">
          <div v-for="item in menulist" :key="item.name">
            <i :class="item.icon"></i>
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="picture">
        <img :src="info.bigImg">
      </div>
      <div class="content">
        <div class="price">
          <span class="pri">￥
            <b>{{info.mallPrice}}</b>
          </span>
          <span class="sc">
            <i class="el-icon-collection-tag"></i>收藏</span>
        </div>
        <div class="info">
          <span class="info-in">自营</span>
          <span class="info-time">次日达</span>
          <span class="info-adre">深圳平湖仓</span>
        </div>
        <div class="title">{{info.goodsName}}{{info.slogan}}</div>
      </div>
      <div class="flx">
        <div class="column-name">时效</div>
        <div class="aging">
          <p>当日16：00前下单，预计次日送达！</p>
          <div style="font-weight: bold;">预售商品按预设时间配送，不便之处，敬请谅解！</div>
        </div>
      </div>
    </div>
    <footer class="bottom">
      <el-menu :default-active="active" class="el-menu-demo" router mode="horizontal" @select="changeActive" active-text-color="#f00">
        <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
          <i :class="item.font"></i>
          <p class="type">{{item.text}}</p>
        </el-menu-item>
      </el-menu>
      <div class="buttom-group">
        <button class="cart" @click="addcart(info.bigImg,info.goodsName,info.mallPrice,info.goodsStandard,info.id,info.goodsBrand,info.qty)">加入购物车</button>
        <button class="buy" @click="buy(info.bigImg,info.goodsName,info.mallPrice,info.goodsStandard,info.id,info.goodsBrand,info.qty)">立即购买</button>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check: false,
      info: {},
      active: "/home",
      menulist: [
        {
          name: "首页",
          icon: "el-icon-house"
        },
        {
          name: "分类",
          icon: "el-icon-menu"
        },
        {
          name: "宅配",
          icon: "el-icon-present"
        },
        {
          name: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "我的",
          icon: "el-icon-user"
        }
      ],
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          font: "van-icon van-icon-wap-home"
        },
        {
          name: "classify",
          text: "分类",
          path: "/classify",
          font: "van-icon van-icon-apps-o"
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
          font: "van-icon van-icon-shopping-cart-o"
        }
      ]
    };
  },
  methods: {
    changdata() {
      return (this.check = !this.check);
    },
    changeActive(index) {
      this.active = index;
    },
    previous() {
      this.$router.go(-1);
      this.$store.commit("clearlist");
    },
    addcart(bigImg, goodsName, mallPrice, goodsStandard, id, goodsBrand) {
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
          goodsImg: bigImg,
          goodsName,
          mallPrice,
          goodsStandard,
          id,
          goodsBrand,
          qty: 1
        });
      }
    },
    buy(bigImg, goodsName, mallPrice, goodsStandard, id, goodsBrand, qty) {
      this.addcart(
        bigImg,
        goodsName,
        mallPrice,
        goodsStandard,
        id,
        goodsBrand,
        qty
      );
      this.$router.push({ name: "cart" });
    }
  },
  created() {
    // let {
    //   bigImg,
    //   goodsName,
    //   mallPrice,
    //   goodsStandard,
    //   id,
    //   goodsBrand,
    //   slogan,
    //   qty
    // } = this.$route.params;
    this.active = this.$route.path;
    this.info = this.$store.state.itemlist[0];
    /*  this.info = {
      bigImg,
      goodsName,
      mallPrice,
      goodsStandard,
      id,
      goodsBrand,
      slogan,
      qty
    }; */
  }
};
</script>
<style lang="scss">
.goodss {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 4;
  .nav {
    width: 100%;
  }
  .picture {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .content {
    border-top: 0.6px solid #ccc;
    border-bottom: 0.6px solid #ccc;
    padding: 0 16px;
    .price {
      display: flex;
      justify-content: space-between;
      height: 31px;
      margin: 16px 0;
      line-height: 31px;
      .pri {
        font-size: 16px;
        color: #f00;
        font-weight: bold;
        b {
          font-size: 24px;
        }
      }
      .sc {
        color: #555;
        font-size: 13;
      }
    }
    .info {
      display: flex;
      line-height: 16px;
      font-size: 11px;
      margin-bottom: 10px;
      .info-in {
        color: #f00;
      }
      .info-time {
        background: #f00;
        color: #fff;
        padding: 0 6px;
        margin: 0 6px;
        border-radius: 18px;
      }
      .info-adre {
        color: #af52ef;
      }
    }
    .title {
      color: #444;
      font-size: 13.5px;
      font-weight: bold;
      line-height: 24px;
      margin: 6px 0;
    }
  }
  .flx {
    padding: 0 16px;
    display: flex;
    margin-top: 20px;
    .column-name {
      color: #666;
      font-size: 12px;
      margin-right: 10px;
    }
    .aging {
      color: #444;
      font-size: 12px;
      p {
        margin-bottom: 6px;
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: #fff;
  width: 100%;
  display: flex;
  .el-menu-demo {
    width: 100%;
    .el-menu-item {
      width: 33%;
      height: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      .van-icon {
        display: block;
        width: 20px;
        height: 20px;
        font-size: 16px;
      }
      .type {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
  .buttom-group {
    display: flex;
    width: 100%;
    button {
      flex: 1;
      border: none;
      color: #fff;
    }
    .cart {
      background: #ffac0a;
    }
    .buy {
      background: #f44;
    }
  }
}
</style>
