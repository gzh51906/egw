<template>
  <div class="cart">
    <header class="nav nav-t">
      <div class="nav-l" @click="previous">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="nav-title">
        <span>购物车</span>
      </div>
      <div class="nav-r">
        <i class="el-icon-more"></i>
      </div>
    </header>
    <div class="cartlist clearfix">
      <div ref="itemlen" class="cartitem clearfix" v-for="(item,index) in cartlist" :key="item.id">
        <div class="item-check clearfix" >
          <!-- 复选框 -->
          <input name="type" @click="eckfa(index)" ref="itemcheck" type="checkbox" :checked="chec == true" />
        </div>
        <div class="item-img">
          <img :src="item.goodsImg" alt />
        </div>
        <div class="item-info">
          <div class="item-top clearfix">
            <div class="item-title">
              <span>{{item.goodsName}}</span>
            </div>
            <div class="item-remove" @click="removeitem(index)">
              <i class="el-icon-delete"></i>
            </div>
          </div>

          <div class="item-spec">
            <span class="spec-fa spec-l">{{item.goodsBrand}}</span>
            <span class="spec-fa spec-r">{{item.goodsStandard}}</span>
          </div>
          <div class="item-ps">
            <div class="item-price">{{item.mallPrice}}</div>
            <div class="item-num">
              <button class="qtyleft" @click="qtyleft(index)">-</button>
              <input type="text" :value="item.qty" />
              <button class="qtyright" @click="qtyright(index)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="settlement">
        <input type="checkbox" id="male" @click="alleck" />
        <label for="male" class="alltext">全选</label>
      </div>
      <div class="checkAll">
        <!-- <span class="allPrice">{{Math.round(totalPrice)}}</span> -->
        <span class="allPrice">{{totalPrice.toFixed(2)}}</span>
        <span>合计：</span>
      </div>
      <div class="totalbtn">去结算</div>
    </div>
    <!-- margin值 -->
    <div class="mar_bom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      chec: false,
      flag:true
    };
  },
  methods: {
    // 跳转到上一个
    previous() {
      this.$router.go(-1);
    },
    // 数量--
    qtyleft(index) {
      let self = this.$store.state.cartlist[index];
      if (self.qty == 1) {
        return;
      } else {
        self.qty--;
      }
    },
    // 数量++
    qtyright(index) {
      let self = this.$store.state.cartlist[index];
      self.qty++;
    },
    // 删除
    removeitem(index) {
      this.$store.commit("removeItem", index);
    },
    alleck() {
      this.chec = !this.chec;
      if(this.chec == true){
        this.$store.commit('changmapche',true)
      }
      if(this.chec == false){
        this.$store.commit('changmapche',false)
      }
    },
    eckfa(index) {
      // 每次点击把数据布尔值修改 然后传入到vuex中
      // vuex筛选布尔值为true的商品
      // 将价格乘以数量然后返回
      this.chec = false;
      this.$store.commit('changeche',index)
    }
  },
  computed: {
    // 返回购物车商品信息
    cartlist() {
      return this.$store.state.cartlist;
    },
    // 返回价格
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  created() {
    // console.log('store',this.$store.state.cartlist[1].qty);
  }
};
</script>

<style>
body {
  min-height: 667px;
  width: 100%;
  background: #f0f2f5;
}
#male {
  margin-top: 15px;
  float: left;
}
.alltext {
  margin-top: 15px;
  margin-left: 10px;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
* {
  box-sizing: border-box;
}
.cart {
  width: 100%;
}

.cartitem {
  background: #fff;
  margin-bottom: 1px;
  padding: 5px 5px 5px 0;
  width: 100%;
  height: 100%;
}
.item-check {
  float: left;
  margin: 30px 10px 0 10px;
}
.item-check .checkbor {
  width: 17.5px;
  height: 17.5px;
  background: #ffffff;
  border: 1px solid #999;
  border-radius: 50%;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: red;
  border-color: red;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
.el-checkbox__inner:hover {
  border-color: #999;
}
.item-img {
  float: left;
  width: 102.75px;
  height: 102.75px;
  margin-right: 5px;
}
.item-img img {
  width: 100%;
  height: 100%;
}
.item-info {
  float: left;
  min-width: 215px;
}
.item-title {
  overflow: hidden;
  /* margin-left: 15px; */
  /* font-size: 14px; */
  max-width: 204px;
  min-width: 204px;
  height: 36px;
  float: left;
}
.spec-fa {
  max-width: 115px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  margin-right: 5px;
  color: #fff;
  border-radius: 0.2rem;
  padding: 2.5px;
}
.spec-l {
  background: blue;
}
.spec-r {
  background-color: rgb(204, 204, 204);
}
.item-spec {
  margin: 10px 0 0 0;
}
.item-ps {
  margin: 10px 0 0 0;
}
.item-price:before {
  content: "￥";
  font-size: 12.8px;
}
.item-price {
  float: left;
  font-size: 12.8px;
  color: red;
}
.item-num {
  float: right;
}
.item-num button {
  background-color: #f7f8fa;
  width: 28px;
  height: 24px;
  border: 1px solid #f7f8fa;
}
.item-num input {
  margin: 0 2px;
  border: 1px solid #f7f8fa;
  background-color: #f7f8fa;
  text-align: center;
  line-height: 24px;
  width: 28px;
  height: 24px;
}
.item-remove {
  float: right;
  margin-left: 2px;
  color: #555;
  font-size: 20px;
}
.total {
  width: 100%;
  height: 43px;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.total:before {
  content: 1111111111;
}
.settlement {
  float: left;
  margin: 0 0 0 10px;
  height: 100%;
  text-align: center;
  line-height: 43px;
}
.checkAll {
  width: 56%;
  float: left;
  height: 100%;
  margin-right: 10px;
  text-align: center;
  line-height: 43px;
}
.checkAll span {
  float: right;
  font-size: 14px;
}
.allPrice {
  color: red;
}
.allPrice:before {
  content: "￥";
  font-size: 12.8px;
}
.totalbtn {
  float: right;
  height: 100%;
  background: red;
  color: #fff;
  width: 92px;
  text-align: center;
  line-height: 43px;
  font-size: 14px;
}
.mar_bom {
  margin-bottom: 43px;
}
</style>