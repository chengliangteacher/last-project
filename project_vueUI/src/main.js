import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './components/goodsManage/store.js'

<<<<<<< HEAD
=======

<<<<<<< HEAD
import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)

=======

>>>>>>> c530c09d2ee5338e84d4fac942bf16d24d2e6860
>>>>>>> da6624c36027a9c2cad0a5662976208c4b84147d
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
 