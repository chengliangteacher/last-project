const { getMembersByPage,addMembers,removeMembers,xiuMembers} = require("../dao/membersDao")

module.exports.getMembersByPage = async (curPage, eachPage) => {
  return await getMembersByPage(curPage, eachPage)
}
module.exports.addMembers = async (members) => {
  return await addMembers(members)
}
module.exports.removeMembers = async (id) => {
  return await removeMembers(id)
}
module.exports.xiuMembers = async (members) => {
  return await xiuMembers(members)
}