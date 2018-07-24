const { addImg } = require("../dao/imgsDao")

module.exports.addImg = async img => {
  return await addImg(img)
}