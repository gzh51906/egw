import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    // state 类似组件中的data
    state: {
        cartlist: [
            // {
            //     goodsBrand: "阳澄湖",
            //     goodsImg: "http://oss.egu365.com/upload/38cc30a9a5714f2da36c47adb0f76d77.jpg",
            //     goodsName: "【预售】2019 阳澄湖镇金秋九月黄大闸蟹299型",
            //     goodsStandard: "3.3两公*3只  2.3母*3只",
            //     id: "jq0i23upvu0AUsi0w1O4",
            //     mallPrice: 199,
            //     qty:1,
            // }
        ],
        user:[]
    },
    // 更新state
    getters: {
        totalPrice: function (state) {
            return state.cartlist.reduce((prev, item) => {
                return prev + item.mallPrice * item.qty
            }, 0)
        }
    },
    mutations: {
        // 添加购物车
        addItem(state, item) {
            state.cartlist.push(item)
        },
        // 添加用户名信息
        adduser(state,item){
            state.user = [];
            state.user.push(item)
        },
        // 删除
        removeItem(state,index){
            // state.cartlist = state.cartlist.filter(item=>{item.id != id});
            state.cartlist.splice(index,1)
        },
        // 改变数量
        changeQty(state,  {qty, id }) {
            // 遍历cartlist 如果里面有商品id和我要添加的商品的这个id一样
            state.cartlist = state.cartlist.map(item => {
                if (item.id === id) {
                    item.qty= qty;
                }
                return item;
            })
        }
        
    }
});

export default store