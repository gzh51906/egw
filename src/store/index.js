import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
    // state 类似组件中的data
    state:{
        cartlist:[{
            goods_id:1,
            goods_name:'iphone X',
            goods_image:"../assets/new.png",
            price:4999,
            qty:1
        },{
            goods_id:2,
            goods_name:'huawei mate20 plus',
            goods_image:"../assets/new.png",
            price:6999,
            qty:2
        }]
    },
    // 更新state
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce((prev,item)=>{
                return prev + item.price * item.qty
            },0)
        }
    },
    mutations:{
        addItem(state,payload){
            state.carlist.push(payload)
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