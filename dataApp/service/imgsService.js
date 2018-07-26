const { addImg,getImg,addMembersImg} = require("../dao/imgsDao")
module.exports.addImg = async img => {
  return await addImg(img)
}
module.exports.getImg = async () => {
  return await getImg()
}
module.exports.addMembersImg = async img => {
  return await addMembersImg(img)
}

