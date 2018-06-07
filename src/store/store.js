import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        expoCounter: state => {
            return state.counter * 4;
        }
    },
    mutations: {
        increment: (state, playload) => {
            state.counter += playload;
        },
        decrement: (state, playload) => {
            state.counter -= playload;
        },
    },
    actions: {
        increment: ({ commit }, playload) => {
            commit('increment', playload);
        },
        decrement: ({ commit }, playload) => {
            commit('decrement', playload);
        },
        asyncIncrement: ({ commit }, playload) => {
            setTimeout(() => {
                console.log(playload);
                commit('increment', playload.by);
            }, playload.duration)
        },
        asyncDecrement: ({ commit }, playload) => {
            setTimeout(() => {
                commit('decrement', playload.by);
            }, playload.duration)
        },
    }
});
