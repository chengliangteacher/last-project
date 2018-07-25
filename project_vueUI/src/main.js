import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store.js'
// import Addgoods from './components/goodsManage/addGoods'
// Vue.component("Addgoods",Addgoods)

<<<<<<< HEAD
=======

import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)


>>>>>>> aa7ed89bfacd374973410b15577031d1284095db
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
