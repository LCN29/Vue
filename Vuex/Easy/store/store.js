/**
 * Created by LCN on 2017/10/29 0029.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


//全局可以使用的属性，放入到state里面
const state = {
    count : 0,
};

// getter  就像计算属性一样，依赖改变，才会再次计算，而且将其放到store里面，全局都可以使用，
// 不用在个组件内各自计算
const getters = {
    evenOrOdd : state => state.count %2 === 0 ? '偶数' : '奇数',
};


// 只有 mutations可以对state进行修改  组件可以通过 this.$store.commit('addTwo')触发 state.count_2;
// 同时可以传递一个obj参数过去  this.$store.commit('add',{ num : 10})
//  这样也行 this.$store.commit({ type : add, num : 10})
// mutations 里面只可以为同步操作
const mutations = {
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    },
    add(state,obj){
        state.count= state.count+obj.num;
    },
    addTwo(){
        state.count = state.count+2;
    }
};


// Action 提交的是 mutation，而不是直接变更状态。 Action 可以包含任意异步操作
// 使用 thisstore.dispatch('incrementAsync', {amount: 10})
//  这样也行 this.$store.dispatch({ type : add, num : 10})

// 处理异步说明  dispatch(): 可以处理返回 action 返回的 Promise，同时会返回Promise
/*
* 所以可以将耗时的操作放到一个Promise中，返回返回一个Promise, 让dispatch处理耗时操作
 * 完，在提交一个 mutations 如下面的异步增加
 * dispatch(incrementAsync)--->执行完，返回了一个Promise-->执行Promise-->
 * 定时器完成了(耗时动作完成了)-->发送一个 mutations->resolve通知Promise完成了
 *
 * 同时使用 dispatch 返回Promise ，可以进行链式操作 执行完a返回一个Promise,在把他返回出去，在执行
 *
 *  actionB({dispatch}){
 *    return dispatch(actionA).then();
 *  }
 *
 *  使用es7语法  async / await
 *
 *  var sleep = function (time) {
     return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
        }, time);
     })
    };

   var start = async function () {
      // 在这里使用起来就像同步代码那样直观
      console.log('start');
      await sleep(3000);
      console.log('end');
   };

    start();
 *
 * 使用 await 需要在 async里面
 * async声明这是一个异步操作，   await 等待一个Promise
 * 打印了 start--> 遇到 await (需要等待耗时操作 sleep)-->sleep返回了一个Promise-->执行完Promise
 * -->继续执行下一步-->打印了end
 *
 *
 * 官方实例
 * // 假设 getData() 和 getOtherData() 返回的是 Promise
   actions: {
     async actionA ({ commit }) {
        commit('gotData', await getData())
     },
     async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
     }
   }

*/

const actions = {
    increment: ({ commit })=> commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
        if( (state.count + 1) % 2 === 0 ){
            commit('increment');
        }
    },
    incrementAsync({ commit }){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                commit('increment');
                resolve();
            },2000);
        });
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
