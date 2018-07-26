const mongoose = require("mongoose")
var fs = require('fs')
module.exports.addImg = async ({url},{type}) => {
    let imgId= await mongoose
    .model("imgs")
    .create({
      url,
      type,
    })

    return {imgId:imgId._id,url};
} 

module.exports.delImg = async ({imgId}) => {
  let {unlink}=fs;
  await imgId.forEach(item=>{
    unlink('public'+item.url)
  })
  await mongoose
    .model("imgs")
    .remove({goodsId:imgId[0].goodsId})
  return unlink
} 
