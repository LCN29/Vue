/**
 * Created by LCN on 2017/10/29 0029.
 */

import * as types from './mutation-types';

export const addToCart = ({ commit }, product )=>{
    if(product.inventory > 0){
        commit(types.ADD_TO_CART, {
            id: product.id
        });
    }
};
