/**
 * Created by LCN on 2017/10/30 0030.
 */

const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "Apple x", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "HTC 626w", "price": 19.99, "inventory": 5}
];

export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 100);
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            (Math.random() >0.5)
            ? cb()
            : errorCb();
        },100);
    }
};
