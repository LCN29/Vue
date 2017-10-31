<template>
    <ul>
        <li v-for="p in products">
            {{ p.title }} - {{ p.price | currency }}
            <br>
            <button
                    :disabled="!p.inventory"
                    @click="addToCart(p)">
                添加到购物车
            </button>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name : 'ProductList',
        computed: mapGetters({
            products: 'allProducts'
        }),
        methods: mapActions([
            'addToCart'
        ]),
        created () {
            this.$store.dispatch('getAllProducts')
        },
    }
</script>


<style scoped>

</style>