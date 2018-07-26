export default({
    namespaced:true,
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
                    imgId,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
            // await fetch("/goodsImgs/delImg", {
            //     method: "post",
            //     body: JSON.stringify({
            //         servicesId,imgId
            //     }),
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }).then(res => {
            //     return res.json();
            // });
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

        async async_addService(context,{serviceName,serviceType,serviceSchedule,serviceCanFor,serviceDetial,serviceTime,serviceLevel,servicePrice,serviceImg,usersId}) {
            await fetch("/service/addService", {
                method: "post",
                body: JSON.stringify({
                    serviceName,
                    serviceType,
                    serviceSchedule,
                    serviceCanFor,
                    serviceDetial,
                    serviceTime,
                    serviceLevel,
                    servicePrice,
                    serviceImg,
                    usersId,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
        },


        async async_xiuService(context, {service,delImg}) {
            await fetch("/service/xiuService", {
                method: "post",
                body: JSON.stringify({service,delImg}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },

        async async_findService(context,title){
            const data = await fetch("/service/findService", {
                method: "post",
                body: JSON.stringify({
                    curPage: context.state.curPage,
                    eachPage: context.state.eachPage,
                    title,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
            context.commit('getService', data)
        },

        async async_pricePai(context){
            const data = await fetch("/service/pricePai", {
                method: "post",
                body: JSON.stringify({
                    curPage: context.state.curPage,
                    eachPage: context.state.eachPage,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
            console.log(data);
            context.commit('getService', data)
        },
    }
})