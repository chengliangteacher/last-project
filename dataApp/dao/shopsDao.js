const mongoose = require("mongoose")
module.exports.getshops=async ({curpage,count})=>{
    const shopsmodel=mongoose.model("shops")
    const shop= await shopsmodel.find()
    const total=await shopsmodel.find().count()
    return {
        shop,
        total,
    }
}