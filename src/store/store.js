import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // imports actions froms ctions file, do it with whatever obj inside here
    actions,
    // here we import external vuex modules
    modules: {
        // traditionally import like this, for example if the name is different
        // counter: counter
        // for now the name is similar, es 6 handles it for us:
        counter
    }
});