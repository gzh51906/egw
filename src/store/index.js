import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    // state 类似组件中的data
    state:{
        cartlist:[{
            id:1,
            goodsName:'iphone X',
            goodsImg:"../assets/guess_you_like.jpg",
            mallPrice:4999,
            goodsStandard:'123',
            publishType:"1",
            qty:1
        },{
            id:2,
            goodsName:'huawei mate20 plus',
            goodsImg:"../assets/guess_you_like.jpg",
            mallPrice:6999,
            goodsStandard:'123',
            publishType:"1",
            qty:2
        }]
    },
    // 更新state
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce((prev,item)=>{
                return prev + item.mallPrice * item.qty
            },0)
        }
    },
    mutations:{
        addItem(state,item){
            state.carlist.push({item})
        },
        removeItem(state,id){
            // 不等于id的返回true 等于id放回false
            state.carlist = state.carlist.filter(item=>{item.goods_id!=id})
        },
        changeQty(state,{qty,id}){
            state.carlist = state.carlist.map(item=>{
                if(item.goods_id === id)
                {
                    item.qty = qty;
                }
                return item;
            })
        }
    }
});

export default store