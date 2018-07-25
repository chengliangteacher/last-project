export default ({
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        count: 0,
        rows:[],
        Img:[]
       
    },
    mutations: {
        getImg(state,data){
           state.Img=data
        },
        getMembersByPage(state,data) {
            Object.assign(state,data);
        },
        firstBtn(state){
            state.curPage=1   
        },
        preBtn(state){
            if(state.curPage<=1){
               state.curPage=1;
           }else{
               state.curPage--
           }
        
       },
       nextBtn(state){
           if(state.curPage<state.maxPage){
               state.curPage++;
           }else{
               state.curPage=state.maxPage
           }
       },
       lastBtn(state){
             state.curPage=state.maxPage
       },
       handleSizeChange(state,val) {
       state.curPage=1;
        state.eachPage=val
      },
      handleCurrentChange(state,val) {
        state.curPage=val
      }
      
    },
    actions: {
        async async_getMembersByPage(context) {
          
            const data = await fetch("/members/getMembersByPage", {
                method: "post",
                body: JSON.stringify({ curPage: context.state.curPage, eachPage: context.state.eachPage }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            context.commit('getMembersByPage',data)
        },
        async async_addMembers(context,{memberPhone,memberAcount,memberName,menberCard,memberImg,memberAdd,memberArea,memberPoint,pets}){          
            await fetch("/members/addMembers",{
                method: "post",
                body: JSON.stringify({memberPhone,memberAcount,memberName,menberCard,memberImg,memberAdd,memberArea,memberPoint,pets}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },
        async async_removeMembers(context,{_id,picId}){         
            await fetch("/members/removeMembers",{
                method: "post",
                body: JSON.stringify({_id,picId}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        },
        async async_xiuMembers(context,{_id,memberPhone,memberAcount,memberName,menberCard,memberImg,memberAdd,memberArea,memberPoint,pets}){
            await fetch("/members/xiuMembers",{
                method: "post",
                body: JSON.stringify({_id,memberPhone,memberAcount,memberName,menberCard,memberImg,memberAdd,memberArea,memberPoint,pets}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
           
        },
        async async_getImg(context,){
            const data = await fetch("/imgs/getImg",{
                method: "post",
                body: JSON.stringify(),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json());
            // console.log(data)
            context.commit('getImg',data)
        },
     
    }

})