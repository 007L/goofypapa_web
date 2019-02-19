import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);

//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录


export default new Vuex.Store({
    state,
    actions,
    mutations
});
