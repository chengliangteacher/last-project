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
        deleteshops(state){
            return state.data
        }
    },
    actions: {
        async initshopdata(context,usersId='5b52fc32c1327356b8daafcd') {
            let data = await fetch("/shops/getshops", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    curPage: context.state.data.curPage,
                    count: context.state.data.count,
                    usersId,
                })
            }).then(res => res.json());
            console.log(data)
            context.commit('initshops', data)
        },
        async deleteshops(context, arr,cb=()=>{}) {
            await fetch("/shops/deleteshops", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id:arr
                })
            }).then(res =>{
                cb()
            });
            context.commit('deleteshops')
        }
    }
}