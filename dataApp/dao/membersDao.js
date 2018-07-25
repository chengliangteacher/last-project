const mongoose = require("mongoose")

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
module.exports.removeMembers = async (id) => {
  return await mongoose
    .model("members")
    .find()
    .remove({_id:id})
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