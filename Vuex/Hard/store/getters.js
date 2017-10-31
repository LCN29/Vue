/**
 * Created by LCN on 2017/10/29 0029.
 */

export const cartProducts = state => {
    return  state.cart.added.map(({ id, quantity }) => {
        const product = state.products.all.find(p => p.id === id);
        return {
            title: product.title,
            price: product.price,
            quantity
        };
    });
};
