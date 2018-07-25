import Vue from 'vue'
import Vuex from 'vuex'

import orderWrap from "./components/orderManage/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orderWrap,
    shops
  }
})