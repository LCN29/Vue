<template>
    <div class="cart">
        <h2>你的购物车</h2>
        <p v-show="!products.length"><i>加点东西到购物车里吧.</i></p>
        <ul>
            <li v-for="p in products">
                {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
            </li>
        </ul>
        <p>总共: {{ total | currency }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">结算</button></p>
        <p v-show="checkoutStatus">结算状态: {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'Cart',
        computed : {
            ...mapGetters({
                products: 'cartProducts',
                checkoutStatus: 'checkoutStatus'
            }),
            total () {
                return this.products.reduce((total, p) => {
                    return total + p.price * p.quantity;
                },0);
            }
        },
        methods : {
            checkout (products) {
                this.$store.dispatch('checkout', products);
            }
        }
    }
</script>


<style scoped>

</style>