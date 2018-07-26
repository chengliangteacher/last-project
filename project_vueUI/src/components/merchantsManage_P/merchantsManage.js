export default {
    namespaced:true,
    state: {
        data: {
            shop:[],
            total:0,
            curPage:1,
            count:10,
        }
    },
    mutations: {
        initshops(state, data) {
            Object.assign(state.data, data)
        },
        initshopsall(state, data) {
            Object.assign(state.data, data)
        },
        deleteshops(state){
            return state.data
        },
        changeSize(state,value){
            state.data.count=value
        },
        changePage(state,value){
            state.data.curPage=value
        }
    },
    actions: {
        async initshopdata(context,type) {
            let data = await fetch("/shops/getshops", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    curPage: context.state.data.curPage,
                    count: context.state.data.count,
                    usersId:localStorage.usersId,
                    type,
                })
            }).then(res =>res.json());
            context.commit('initshops', data)
        },

        async initshopdataall(context) {
            let data = await fetch("/shops/getshopsall", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    curPage: context.state.data.curPage,
                    count: context.state.data.count,
                })
            }).then(res => res.json());
            context.commit('initshopsall', data)
        },

        async deleteshops(context, arr) {
            await fetch("/shops/deleteshops", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id:arr
                })
            }).then(res =>{
                res.json()
            });
            context.commit('deleteshops')
        }
    }
}