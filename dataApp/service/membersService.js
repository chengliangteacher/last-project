const { getMembersByPage,addMembers,removeMembers,xiuMembers} = require("../dao/membersDao")

module.exports.getMembersByPage = async (curPage, eachPage) => {
  return await getMembersByPage(curPage, eachPage)
}
module.exports.addMembers = async (members) => {
  return await addMembers(members)
}
module.exports.removeMembers = async (id,picId) => {
  return await removeMembers(id,picId)
}
module.exports.xiuMembers = async (members) => {
  return await xiuMembers(members)
}