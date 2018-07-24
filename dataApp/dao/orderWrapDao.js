const mongoose = require("mongoose")
module.exports.getEmpsByPage = async (curPage, eachPage) => {
    const orderWarpModel = mongoose.model("orderWarp")
    const count = await orderWarpModel.count()
    const rows = await orderWarpModel
        .find()
        .sort({
            _id: -1
        })
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