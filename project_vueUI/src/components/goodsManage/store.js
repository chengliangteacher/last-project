
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
        getGoods(state,data){
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
        async async_handleDelete(context,{goodsId,imgId}){
            const data = await fetch("/goods/delGoods", {
                method: "post",
                body: JSON.stringify({
                    _id:goodsId,
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
                    goodsId,imgId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
        },
        async async_getGoods(context) {
            const data = await fetch("/goods/getGoods", {
                method: "post",
                body: JSON.stringify({
                    curPage: context.state.curPage,
                    eachPage: context.state.eachPage
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });
            context.commit('getGoods', data)
        },


        async async_addGoods(context, {goodsName,goodsType,goodsMaterial,goodsMath,goodsCanFor,goodsOnlyFor,goodsSize,goodsTaste,goodsSpecial,goodsRegion,goodsDate,goodsTime,goodsSupplier,goodsIntro,goodsPrice,goodsImg,usersId}) {
            const data = await fetch("/goods/addGoods", {
                method: "post",
                body: JSON.stringify({
                    goodsName,
                    goodsType,
                    goodsMaterial,
                    goodsMath,
                    goodsCanFor,
                    goodsOnlyFor,
                    goodsSize,
                    goodsTaste,
                    goodsSpecial,
                    goodsRegion,
                    goodsDate,
                    goodsTime,
                    goodsSupplier,
                    goodsIntro,
                    goodsPrice,
                    goodsImg,
                    usersId,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            });

        },

        async async_xiuGoods(context, {goods,delImg}) {
            await fetch("/goods/xiuGoods", {
                method: "post",
                body: JSON.stringify({goods,delImg}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },

        async async_findGoods(context,title){
            const data = await fetch("/goods/findGoods", {
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
            context.commit('getGoods', data)
        },

        async async_pricePai(context){
            const data = await fetch("/goods/pricePai", {
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
            context.commit('getGoods',data)
        },
    }
})