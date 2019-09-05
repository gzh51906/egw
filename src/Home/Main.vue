<template>
  <div class="content">
    <img :src="bg" class="bg">
    <ul class="goods">
      <li class="list" v-for="item in goods" :key="item.id">
        <img :src="item.bigImg" class="picture">
        <p class="title">{{item.goodsName}}</p>
        <p class="slogan">{{item.slogan}}</p>
        <div class="info">
          <span class="info-in">自营</span>
          <span class="info-time">次日达</span>
          <span class="info-adre">深圳平湖仓</span>
        </div>
        <div class="price">
          <span class="pri">￥{{item.mallPrice}}</span>
          <i class="cart"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bg: "",
      goods: []
    };
  },
  props: ["msg"],
  async created() {
    let { data: { data } } = await this.$axios.get(
      "http://52.78.186.217:8888/home/goodsbgt",
      {
        params: {
          id: this.msg.bgurl
        }
      }
    );
    this.bg = data.bgImg2;

    let type = await this.$axios.get(
      "http://52.78.186.217:8888/home/goodstype",
      {
        params: {
          id: this.msg.bgurl
        }
      }
    );
    this.goods = type.data.data.list;
  }
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  background: #f5f5f5;
  height: 1450px;
  .bg {
    width: 100%;
    display: block;
  }
  .goods {
    position: absolute;
    top: 80px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list {
      width: 177px;
      height: 259px;
      padding: 6px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 4px;
      margin-bottom: 12px;
      .picture {
        width: 100%;
      }
      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #444;
      }
      .slogan {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        color: #aaa;
        line-height: 20px;
      }
      .info {
        display: flex;
        line-height: 16px;
        font-size: 11px;
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
      .price {
        margin-top: 4px;
        display: flex;
        justify-content: space-between;
        .pri {
          color: #f00;
          font-size: 16px;
          line-height: 24px;
        }
        .cart {
          display: inline-block;
          width: 24px;
          height: 24px;
          background: #f00;
          border-radius: 50%;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
