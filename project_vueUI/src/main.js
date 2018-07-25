import Vue from 'vue'
import Wrap from './App.vue'
import router from './router.js'
import store from './store'
// import Addgoods from './components/goodsManage/addGoods'
// Vue.component("Addgoods",Addgoods)


<<<<<<< HEAD
import Addgoods from './components/goodsManage/addGoods'
Vue.component("Addgoods",Addgoods)


=======
>>>>>>> adf384a1684bca571e73f185156ff166ff82371f
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  render: h => h(Wrap),
  router,
  store,
}).$mount('#app')
