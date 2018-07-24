<<<<<<< HEAD

import Vue from 'vue'
import Vuex from 'vuex'

import petOwners_P from "./components/petOwners_P/store.js"
=======
import Vue from 'vue'
import Vuex from 'vuex'

import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    petOwners_P
=======
    shops,
    orderWrap
>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
  }
})