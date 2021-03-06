/**
 * Created by LCN on 2017/10/30 0030.
 */

import Api from '../../api/api';
import * as types from '../mutation-types';

const state = {
    all: []
};

const getters = {
    allProducts: state => state.all
};

const actions = {
    getAllProducts ({ commit }) {
       Api.getProducts(products => {
           commit(types.RECEIVE_PRODUCTS, { products });
       });
    },
};

const mutations = {
    [types.RECEIVE_PRODUCTS] (state, { products }) {
        state.all = products;
    },

    [types.ADD_TO_CART] (state, { id }) {
        state.all.find(p => p.id === id).inventory--;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
