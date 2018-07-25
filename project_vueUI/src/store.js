
import Vue from 'vue'
import Vuex from 'vuex'
import petOwners_P from "./components/petOwners_P/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"
import goodsManage from './components/goodsManage/store.js'
import serviceManage from "./components/serviceManage/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    petOwners_P,
    shops,
    orderWrap,
    goodsManage,
    serviceManage,
  }
})

