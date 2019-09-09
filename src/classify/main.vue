<template>
  <div class="cent">
    <div class="itmlist" v-for="item in goods" :key="item.id" @click="goto(item.bigImg,item.goodsName,item.mallPrice,item.goodsStandard,item.id,item.goodsBrand,item.slogan,1)">
      <div class="fl">
        <img :src="item.bigImg" alt="">
      </div>
      <div class="fr">
        <div class="nam">{{item.goodsName}}</div>
        <div class="intro">{{item.slogan}}...</div>
        <div class="supro">
          <span class="one">自营</span>
          <span class="two">次日达</span>
          <span class="three">仓库</span>
        </div>
        <div class="pic">￥{{item.mallPrice}}</div>
        <div class="cart">
          <i class="el-icon-goods"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  props: ["msg"],
  async created() {
    let type = await this.$axios.get(`${this.$url}/home/goodstypes`, {
      params: {
        id: this.msg.goodid
      }
    });
    this.goods = type.data;
  },
  methods: {
    goto(
      bigImg,
      goodsName,
      mallPrice,
      goodsStandard,
      id,
      goodsBrand,
      slogan,
      qty
    ) {
      this.$router.push({
        name: "goods",
        params: {
          bigImg,
          goodsName,
          mallPrice,
          goodsStandard,
          id,
          goodsBrand,
          slogan,
          qty
        }
      });
      this.$store.commit("addlist", {
        bigImg,
        goodsName,
        mallPrice,
        goodsStandard,
        id,
        goodsBrand,
        slogan,
        qty
      });
    }
  }
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
  display: flex;
  background: #fff;
  margin-bottom: 6px;
}

.fl {
  /* float: left; */
}

.fl img {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0.2rem;
}

.fr {
  /* float: left; */
  margin-left: 6px;
  width: 150px;
}

.nam {
  width: 100%;
  margin-top: 0.2rem;
  font-size: 0.4rem;
  color: #444;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.intro {
  font-size: 0.266667rem;
  color: #939393;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
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
</style>
