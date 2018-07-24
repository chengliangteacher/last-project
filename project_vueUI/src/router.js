import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login.vue'
import Reg from './views/login/reg.vue'
import Info_Merchants from './views/login/info_Merchants.vue'
import Info_Platform from './views/login/info_Platform.vue'

import GoodsWrap from './components/goodsManage/goodsWrap'
import MemberWrap from './components/memberManage/memberWrap'
import OrderWrap from './components/orderManage/orderWrap'
import PetWrap from './components/petManage/petWrap'
import ServiceWrap from './components/serviceManage/serviceWrap'
import UserWrap from './components/userManage/userWrap'
import MerchantsWrap from './components/merchantsManage/merchantsWrap'

import GoodsWrap_P from './components/goodsManage_P/goodsWrap'
import MerchantsWrap_P from './components/merchantsManage_P/merchantsWrap'
import MessageWrap_P from './components/message_P/messageWrap'
import PetOwnersWrap_P from './components/petOwners_P/petOwnersWrap'
import PetOwnersAdd_P from "./components/petOwners_P/petOwnersAdd"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/:id',
      name: 'loginValue',
      component: Login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    }, {
      path: '/info_Merchants',
      name: 'info_Merchants',
      component: Info_Merchants,
      children: [{
        path: 'goodsWrap',
        component: GoodsWrap,
      }, {
        path: 'memberWrap',
        component: MemberWrap,
      }, {
        path: 'orderWrap',
        component: OrderWrap,
      }, {
        path: 'petWrap',
        component: PetWrap,
      }, {
        path: 'serviceWrap',
        component: ServiceWrap,
      }, {
        path: 'userWrap',
        component: UserWrap,
      },{
        path: 'merchantsWrap',
        component: MerchantsWrap,
      }]
    }, {
      path: '/info_Platform',
      name: 'info_Platform',
      component: Info_Platform,
      children: [{
        path: 'goodsWrap_P',
        component: GoodsWrap_P,
      }, {
        path: 'merchantsWrap_P',
        component: MerchantsWrap_P,
      }, {
        path: 'messageWrap_P',
        component: MessageWrap_P,
      }, {
        path: 'petOwnersWrap_P',
        component: PetOwnersWrap_P,
      },{
        path: 'petOwnersAdd_P',
        component: PetOwnersAdd_P,
      }]
    }
  ]
})
