<template>
  <div class="user">
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
        <div class="user-t">
          <div class="user-t-top">下午好</div>
          <div class="user-t-botm">点击登录/注册用户</div>
        </div>
      </div>
    </div>
    <ul class="card-view">
      <li>
        <!-- <img src="../assets/user_order_01.png" alt=""> -->
        <div class="item-name">待收货</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topNav: {
        icon: "el-icon-setting",
        srcUrl: require("../assets/not_user.jpg"),
        title: "我的"
      }
    };
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
  height: 0.88rem;
  /* background: #6e6565; */
  /* border-bottom: 1px solid #000; */
  box-shadow: 0 1px 2px #ccc;
  display: flex;
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
  line-height: 33px;
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
  line-height: 33px;
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
  padding-left: 17px
}
.user-wrap .user-ht img {
  width:62.73px;
  height:62.73px;
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
  border-radius:1px;
  box-shadow: 0 2px 2px rgba(207, 207, 207, 0.3);
}
.card-view li {
  width: 20%;
  min-height:  75.5px;
  /* height: 4.690625rem; */
  text-align: center;
}
.card-view>li>img{
    width: 39.58px;
    height: 39.58px;
}
.card-view .item-name{
    color: #282828;
    font-size: 14px;
    line-height: 21px;
}
</style>
