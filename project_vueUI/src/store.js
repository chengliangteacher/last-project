import Vue from 'vue'
import Vuex from 'vuex'

import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shops,
    orderWrap
  }
})