import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store.js'
// import Addgoods from './components/goodsManage/addGoods'
// Vue.component("Addgoods",Addgoods)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)


Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
