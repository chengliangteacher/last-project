const mongoose = require("mongoose")
module.exports.addImg = async img => {
  // 增加图片
  let Img=await mongoose
    .model("imgs")
    .create(img)
    return Img
}