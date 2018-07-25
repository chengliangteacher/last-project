import Vuex from "vuex";
import Vue from 'vue'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        curPage: 1,
        eachPage:10,
        maxPage: 0,
        total: 0,
        rows:[]
    },

    mutations: {
        getService(state,data){
            Object.assign(state,data);
        },

        handleSizeChange(state,val) {
            state.curPage = 1;
            state.eachPage = val
          },
        handleCurrentChange(state,val) {
            state.curPage = val;
        },
    },

    actions: {
        async async_handleDelete(context,{servicesId,imgId}){
            const data = await fetch("/service/delService", {
                method: "post",
                body: JSON.stringify({
                    _id:servicesId,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
            await fetch("/goodsImgs/delImg", {
                method: "post",
                body: JSON.stringify({
                    servicesId,imgId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
        },
        async async_getService(context) {
            const data = await fetch("/service/getService", {
                method: "post",
                body: JSON.stringify({
                    curPage: context.state.curPage,
                    eachPage: context.state.eachPage
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            }).then(res => {
                return res.json();
            });
            console.log(data)
            context.commit('getService', data)
        },

        async async_addService(context,{serviceName,serviceType,scheduleDate,scheduleTime,serviceCanFor,serviceDetial,serviceTime,serviceLevel,servicePrice,serviceImg}) {
            await fetch("/service/addService", {
                method: "post",
                body: JSON.stringify({
                    serviceName,
                    serviceType,
                    serviceSchedule:`${scheduleDate}${scheduleTime}`,
                    serviceCanFor,
                    serviceDetial,
                    serviceTime,
                    serviceLevel,
                    servicePrice,
                    serviceImg,
                    usersId:'5b55db78d54e387d24bc9386',
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
        },


        async async_xiuService(context, goods) {
            const data = await fetch("/service/xiuService", {
                method: "post",
                body: JSON.stringify( goods,),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
        },
    }
})