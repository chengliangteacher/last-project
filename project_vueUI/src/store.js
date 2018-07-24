import Vue from 'vue'
import Vuex from 'vuex'

import orderWrap from "./components/orderManage/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        orderWrap
    }
})