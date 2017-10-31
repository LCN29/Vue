/**
 * Created by LCN on 2017/10/30 0030.
 */

import Api from '../../api/api';
import * as types from '../mutation-types';

const state = {
    checkoutStatus: null,
    added : [],
};

const getters = {
    checkoutStatus: state => state.checkoutStatus,
};

const actions = {
    checkout ({ commit, state }, products) {
        const savedCartItems = [...state.added];
        commit(types.CHECKOUT_REQUEST);
        Api.buyProducts(
            products,
            ()=> commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems }),
        );
    }
};

const mutations = {
    [types.ADD_TO_CART] (state, { id }){
        state.lastCheckout = null;
        const recordExit = state.added.find(p => p.id === id);
        if (!recordExit) {
            state.added.push({
                id,
                quantity: 1
            });
        }else {
            recordExit.quantity++;
        }
    },
    [types.CHECKOUT_REQUEST](state){
        state.added = [];
        state.checkoutStatus = null;
    },

    [types.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = 'successful';
    },

    [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        state.added = savedCartItems;
        state.checkoutStatus = 'failed';
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};