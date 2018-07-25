const mongoose = require("mongoose")
module.exports.getEmpsByPage = async (curPage, eachPage) => {
    const orderWrapModel = mongoose.model("orders")
    const count = await orderWrapModel.count()
    const rows = await orderWrapModel
        .find()
        .sort({
            _id: -1
        })
        .populate([
        {
            path:'shopId'    
        },
        {
            path:'memberId'
        },
        {
            path:'goodId'
        },
        {
            path:'serviceId'
        }
    ])
        .skip((curPage - 1) * eachPage)
        .limit(eachPage)
    return {
        curPage,
        eachPage,
        count: count,
        maxPage: Math.ceil(count / eachPage),
        rows
    }
}
//添加
module.exports.addEmpsByPage = async orderWrap => {
    return await mongoose
        .model("orders")
        .create(orderWrap)

}
//店铺
module.exports.shopsEmpsByPage = async data => {
    let shopsModel = mongoose.model('shops');
    return await shopsModel.find();
}

//商品
module.exports.goodsEmpsByPage = async data => {
    return mongoose.model('goods').find()

}

//宠主
module.exports.membersEmpsByPage = async data => {
    let membersModel = mongoose.model('members');
    return await membersModel.find();
}
//服务
module.exports.servicesEmpsByPage = async data => {
    return mongoose.model('services').find()
}
//删除
module.exports.deleteOrderWrap = async arr => {
    let deleteModel = mongoose.model('orders');
    await deleteModel.remove({_id:arr._id})
    return true
}