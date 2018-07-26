import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store.js'
<<<<<<< HEAD
// import Addgoods from './components/goodsManage/addGoods'
// Vue.component("Addgoods",Addgoods)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)


=======
import Addgoods from './components/goodsManage/addGoods'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> e15530285eb1439838fc8fdb4c900f29784f4c1c
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component("Addgoods",Addgoods)
new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
