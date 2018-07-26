
<<<<<<< HEAD


import Vue from 'vue'
import Vuex from 'vuex'

import orderWrap from "./components/orderManage/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
import petOwners_P from "./components/petOwners_P/store.js"

=======
import Vue from 'vue'
import Vuex from 'vuex'
import petOwners_P from "./components/petOwners_P/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
import goodsManage from './components/goodsManage/store.js'
import serviceManage from "./components/serviceManage/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    petOwners_P,
    shops,
    orderWrap,
    goodsManage,
    serviceManage,
  }
})
=======
    orderWrap,
    shops,
    petOwners_P,
    goodsManage,
    serviceManage
  }
})

>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
