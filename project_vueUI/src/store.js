<<<<<<< HEAD

=======
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
import Vue from 'vue'
import Vuex from 'vuex'
import petOwners_P from "./components/petOwners_P/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"
<<<<<<< HEAD



import goodsManage from './components/goodsManage/store.js'
import serviceManage from "./components/serviceManage/store.js"

=======
import goodsManage from './components/goodsManage/store.js'
import serviceManage from "./components/serviceManage/store.js"
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    petOwners_P,
    shops,
    orderWrap,
    goodsManage,
    serviceManage,
<<<<<<< HEAD

=======
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
  }
})

