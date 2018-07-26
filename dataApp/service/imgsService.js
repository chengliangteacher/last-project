<<<<<<< HEAD

const { addImg,getImg,} = require("../dao/imgsDao")

module.exports.addImg = async img => {
  return await addImg(img)
}
module.exports.getImg = async () => {
  return await getImg()
}
=======
// const { addImg,getImg,} = require("../dao/imgsDao")

// module.exports.addImg = async img => {
//   return await addImg(img)
// }
// module.exports.getImg = async () => {
//   return await getImg()
// }

const {addImg,delImg} = require("../dao/imgDao")

module.exports.addImg=async (imgs,type)=>{
    return await addImg(imgs,type)
}

module.exports.delImg=async (data)=>{
    return await delImg(data)
}

>>>>>>> 963b2da440194f32cff45852b10761477ed967d2

