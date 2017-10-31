/**
 * Created by LCN on 2017/10/29 0029.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as getters from './getters';
import Cart from './modules/Cart';
import Products from './modules/Products';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    /* 当业务过多时，全部的逻辑都写在store会很乱，所以有modules形式，将其拆分 */
    modules: {
        Cart,
        Products
    },
    strict: debug, //严格模式
});