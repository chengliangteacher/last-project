const mongoose = require("mongoose")
var fs =require('fs')

module.exports.getMembersByPage = async (curPage, eachPage) => {

  const membersModel = mongoose.model("members")
  const count = await membersModel.count()

  const rows = await membersModel
    .find()
    .sort({
      _id: -1
    })
    .skip((curPage - 1) * eachPage)
    .limit(eachPage)
    .exec()

  return {
    curPage,
    eachPage,
    count,
    maxPage: Math.ceil(count / eachPage),
    rows
  }
}
module.exports.addMembers = async (members) => {
  return await mongoose
    .model("members")
    .create(members)
}
module.exports.removeMembers = async (id,picId) => {
   await mongoose
    .model("members")
    .find()
    .remove({_id:id})
    const imgsurl=await mongoose.model('imgs').find({_id:picId})
    const url=imgsurl[0].url
    const {unlink}=fs
    await unlink('public'+url)
let pic= await mongoose
    .model("imgs")
    .find()
    .remove({_id:picId})
    return pic
}

module.exports.xiuMembers = async ({_id,memberPhone,memberAcount,memberName,menberCard,memberImg,memberAdd,memberArea,memberPoint,pets}) => {
  return await mongoose
      .model("members")
      .find({ _id })
      .update({
        memberPhone,
        memberAcount,
        memberName,
        menberCard,
        memberImg,
        memberAdd,
        memberArea,
        memberPoint,
        pets
      })
}