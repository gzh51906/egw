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
      <!-- <div class="menu van-popup2" v-show="check">
        <div v-for="item in menulist" :key="item.name">
          <i :class="item.icon"></i>
          {{item.name}}
        </div>
      </div>-->
    </header>
    <div class="cartlist clearfix">
      <div class="cartitem clearfix">
        <div class="item-check clearfix">
          <el-checkbox label name="type"></el-checkbox>
        </div>
        <div class="item-img">
          <img src="../assets/guess_you_like.jpg" alt />
        </div>
        <div class="item-info">
          <div class="item-top clearfix">
            <div class="item-title ">
              <span>当一个 form 元素123123123中只有一个输入框时</span>
            </div>
            <div class="item-remove"><i class="el-icon-delete"></i></div>
          </div>

          <div class="item-spec">
            <span class="spec-fa spec-l">1-3天发货</span>
            <span class="spec-fa spec-r">3.8两公*4只 2.8两母*4只</span>
          </div>
          <div class="item-ps">
            <div class="item-price">388.00</div>
            <div class="item-num">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    previous() {
      this.$router.go(-1);
      // console.log(this.previousRouter);
    }
  },
  computed: {
    cartlist() {
      return this.$store.state.cartlist;
    }
  },
  created() {
    console.log(this.$store);
  }
};
</script>

<style>
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
  padding: 5px 5px 5px 0;
  border: 1px solid #999;
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
}
.item-title {
  overflow: hidden;
  /* margin-left: 15px; */
  /* font-size: 14px; */
  max-width: 204px;
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
  float: left;
  margin-left: 2px;
  color: red;
}
</style>