const { addImg,getImg,} = require("../dao/imgDao")

module.exports.addImg = async img => {
  return await addImg(img)
}
