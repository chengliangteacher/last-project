




export default ({
    namespaced: true,
    state: {
        state0:{
            curPage: 1,
            eachPage: 10,
            maxPage: 0,
            count: 0,
            rows: [],
        },
        state4:[],
        state1:[],
        state2:[],
        state3:[],
        
        
        
    },
    mutations: {
        getEmpsByPage(state, data) {
            Object.assign(state.state0, data);
            // console.log(state)
        },
        shopsEmpsByPage(state, data) {
            state.state1=data
        },
        goodsEmpsByPage(state, data) {
            state.state2=data
        },
        membersEmpsByPage(state, data) {
            state.state3=data
        },
        servicesEmpsByPage(state,data){
            state.state4=data
        },
        // firstBtn(state) {
        //     state.state0.curPage = 1
        // },
        // preBtn(state) {
        //     if (state.curPage <= 1) {
        //         state.curPage = 1;
        //     } else {
        //         state.curPage--
        //     }
        // },
        // nextBtn(state) {
        //     if (state.curPage < state.maxPage) {
        //         state.curPage++;
        //     } else {
        //         state.curPage = state.maxPage
        //     }
        // },
        // lastBtn(state) {
        //     state.curPage = state.maxPage
        // },
        changeSize(state, val) {
                state.state0.eachPage = val
        },
        changePage(state, val) {
            state.state0.curPage = val
        }
    },
    actions: {
        async async_getEmpsByPage(context) {
            const data = await fetch("/orderWrap/getEmpsByPage", {
                method: "post",
                body: JSON.stringify({ curPage: context.state.state0.curPage, eachPage: context.state.state0.eachPage }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('getEmpsByPage', data)
        },
        async async_addEmpsByPage(context, { shopId, memberId, id, deliveryStatus, goodId, aymentstatus, count, serviceId, orderWrap }) {
             await fetch("/orderWrap/addEmpsByPage", {
                method: "post",
                body: JSON.stringify({ shopId, memberId, id, deliveryStatus, goodId, aymentstatus, count, serviceId, orderWrap }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
             
        },

        //店铺
        async async_shopsEmpsByPage(context) {
            const data = await fetch("/orderWrap/shopsEmpsByPage", {
                method: "post",
                body: JSON.stringify({  }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('shopsEmpsByPage', data)
        },

        //商品
        async async_goodsEmpsByPage(context) {
            const data = await fetch("/orderWrap/goodsEmpsByPage", {
                method: "post",
                body: JSON.stringify({}),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('goodsEmpsByPage', data)
        },

        //宠主
        async async_membersEmpsByPage(context){
            const data = await fetch("/orderWrap/membersEmpsByPage", {
                method: "post",
                body: JSON.stringify({ }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('membersEmpsByPage', data)
        },

        //服务
        async  async_servicesEmpsByPage(context){
            const data = await fetch("/orderWrap/servicesEmpsByPage", {
                method: "post",
                body: JSON.stringify({}),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('servicesEmpsByPage', data)
        },
        async async_deleteOrderWrap(context, arr) {
            await fetch("/orderWrap/deleteOrderWrap", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id:arr
                })
            }).then(res =>{res.json()});
        }
    },

})
