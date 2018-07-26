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


