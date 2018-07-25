
export default ({
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        count: 0,
        rows: []
    },
    mutations: {
        getEmpsByPage(state, data) {
            Object.assign(state, data);
        },
        firstBtn(state) {
            state.curPage = 1
        },
        preBtn(state) {
            if (state.curPage <= 1) {
                state.curPage = 1;
            } else {
                state.curPage--
            }

        },
        nextBtn(state) {
            if (state.curPage < state.maxPage) {
                state.curPage++;
            } else {
                state.curPage = state.maxPage
            }
        },
        lastBtn(state) {
            state.curPage = state.maxPage
        },
        handleSizeChange(state, val) {
            state.curPage = 1,
                state.eachPage = val
        },
        handleCurrentChange(state, val) {
            state.curPage = val
        }
    },
    actions: {
        async async_getEmpsByPage(context) {
            const data = await fetch("/orderWrap/getEmpsByPage", {
                method: "post",
                body: JSON.stringify({ curPage: context.state.curPage, eachPage: context.state.eachPage }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('getEmpsByPage', data)

            
        },
    }
})
