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
        }
    },
    actions: {
        async initshopdata(context) {
            let data = await fetch("/shops/getshops", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    curPage: context.state.data.curPage,
                    count: context.state.data.count
                })
            }).then(res => res.json());
            console.log(data)
            context.commit('initshops', data)
        },
        // async deleteemp(context, id) {
        //     await fetch("/ems/shan", {
        //         method: "post",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             id,
        //         })
        //     }).then(res => res.json());
        //     context.commit('deleteemp')
        // }
    }
}