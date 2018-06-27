import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    // name referred from types.js -> good practice to avoid naming problems
    // change here, change in files where names are used, won't work differently
    // go to AnotherResult, it's used there
    // vue 2.1 autonamespacing: https://github.com/vuejs/vuex/releases/tag/v2.1.0
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
};

// only synchronious tasks
const mutations = {
    // traditional naming
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        state.counter--;
    },
    // argument is optional
    [types.INCREMENT_WITH_PAYLOAD]: (state, payload) => {
        state.counter += payload;
    },
    decrementWithPayload: (state, payload) => {
        state.counter -= payload;
    }
};

// here we can run asynchronious tasks
// this is a step between properties and mutations, so for each commit 'value' let's have a mutation
const actions = {
    // es6 synatx if u only wanna commit
    increment: ({ commit }) => {
        commit('increment');
    },
    // es5 basic syntax
    decrement: context => {
        context.commit('decrement');
    },
    // argument is optional
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            // if we pass an argument, someone has to get it
            // types in case of 'xyz' used like this
            commit(types.INCREMENT_WITH_PAYLOAD, payload);
        }, 1000);
    },
    // multiple argument as array
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            // if we pass an argument, someone has to get it
            commit('decrementWithPayload', payload.by);
        }, payload.duration);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}