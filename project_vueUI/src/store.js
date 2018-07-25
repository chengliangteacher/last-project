<<<<<<< HEAD

=======
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD

import orderWrap from "./components/orderManage/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
=======
import petOwners_P from "./components/petOwners_P/store.js"
import shops from './components/merchantsManage_P/merchantsManage.js'
import orderWrap from "./components/orderManage/store.js"
<<<<<<< HEAD

=======
import goodsManage from './components/goodsManage/store.js'
import serviceManage from "./components/serviceManage/store.js"
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
>>>>>>> 001b5ef0571e11d3ea2f5392232fdf1e05104df7

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    orderWrap,
    shops
  }
})
=======
    petOwners_P,
    shops,
<<<<<<< HEAD
    orderWrap

=======
    orderWrap,
    goodsManage,
    serviceManage,
>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
  }
})

>>>>>>> 001b5ef0571e11d3ea2f5392232fdf1e05104df7
