const { addImg,getImg,} = require("../dao/imgsDao")

module.exports.addImg = async img => {
  return await addImg(img)
}
module.exports.getImg = async () => {
  return await getImg()
}
