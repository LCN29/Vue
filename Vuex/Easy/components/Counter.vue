<template>

    <div id="app">
        <p> 当前数值为:{{$store.state.count}}，现在的值为:{{evenOrOdd}} </p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">如果是奇数就增加</button>
        <button @click="incrementAsync">异步增加</button>
    </div>

</template>

<script>

    import { mapGetters, mapActions,mapState } from 'vuex';
    export default {
        name : 'Counter',
        methods : mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync',
        ]),
        computed :  mapGetters([
            'evenOrOdd'
        ]),
    };



    /*
    *   mapState  一个组件需要获取多个状态 使用 mapState 辅助函数帮助我们生成计算属性
    *
    *   mapState 会把 store里面的state当做参数传个每一个计算属性
    *   computed : mapState({
    *
    *       //为了能够使用 this,不要使用箭头函数
    *       countPlusLocalState(state){
    *           return state.count;
    *       }，
    *
    *       // 箭头函数可使代码更简练
    *       count : state = > state.count,
    *
    *       //此处的countAliax = state.count;
    *       countAlias: 'count',
    *   }),
    *
    *
    *   当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    *   computed: mapState([
            // 映射 this.count 为 store.state.count
            'count'
        ])

        在computed中 放入自定义的和混入state里面的

     computed: {
        myFun(){
            return this.name;
        },

        //利用 对象展开运算符... 生成一个新的对象
        ...mapState({
            count : state=>state.count,
        }),
     }
    */



    /*
    *   mapGetters  将store 中的 getter 映射到局部计算属性
    *   computed: {
    *       //自定义的计算属性
    *       ...mapGetters({
    *           // 映射 `this.sonEvent` 为 `store.getters.doneTodosCount`
    *           sonEvent : 'doneTodosCount',
    *       }),
    *   },
    *
    *   mapGetters([
    *       // 计算属性名 和 store里面 getters 的 key名 直接映射
    *       'doneTodosCount',
    *   ]);
    */



    /*
    *   .mapMutations 将组件中的 methods 映射为 store.commit 调用
    *
    *   methods : {
    *       //自定义的方法
    *       ...mapMutations([
    *           'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    *       ]),
    *   }
    *
    *   同理的也可以给方法器别名
    *
    *   mapMutations({
    *       add : 'increment', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    *   })
    */


    /*  mapActions 和 mapMutations  作用相同 */

</script>

<style scoped>

</style>