const mongoose = require("mongoose")
module.exports.addImg = async img => {
  // 增加图片
  const Img=await mongoose
    .model("imgs")
    .create(img)
    return Img._id
}


module.exports.getImg = async () => {
  // 查找图片
  const Img=await mongoose
    .model("imgs")
    .find()
    return Img
}

module.exports.addMembersImg = async img => {
  // 增加宠主图片
  const Img=await mongoose
    .model("imgs")
    .create(img)
    return  {url:Img.url,_id:Img._id}
}