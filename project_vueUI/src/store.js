import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD

import orderWrap from "./components/orderManage/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        orderWrap
    }
=======
import shops from './components/merchantsManage_P/merchantsManage.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    shops
  }
>>>>>>> fd3a22a948e7729f57c7fdc1e5ca27b9a31b39ef
})