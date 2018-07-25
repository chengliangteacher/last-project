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

// module.exports.upImg = async (data) => {
//     await mongoose.model('imgs')
//     .update({
//         _id:data[0]._id,
//     },{ 
//         url:data[0].url,
//     });

//     return await mongoose.model('imgs')
//     .update({
//         _id:data[1]._id,
//     },{ 
//         url:data[1].url,
//     });
// } 