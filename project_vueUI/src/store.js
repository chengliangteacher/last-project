
import Vue from 'vue'
import Vuex from 'vuex'

import petOwners_P from "./components/petOwners_P/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    petOwners_P
  }
})