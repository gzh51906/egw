import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);


let store = new Vuex.Store({
    // state 类似组件中的data
    state: {
        cartlist: [],
        itemlist: []
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
        addItem(state, item) {
            state.cartlist.push(item)
        },


        addlist(state, item) {
            state.itemlist.push(item)
        },
        clearlist(state) {
            state.itemlist = []
        },


        // 删除
        removeItem(state, index) {
            // state.cartlist = state.cartlist.filter(item=>{item.id != id});
            state.cartlist.splice(index, 1)
        },
        // 改变数量
        changeQty(state, {
            qty,
            id
        }) {
            state.cartlist = state.cartlist.map(item => {
                if (item.id === id) {
                    item.qty = qty;
                }
                return item;
            })
        }

    }
});
export default store;