
const {addImg,delImg} = require("../dao/imgDao")

module.exports.addImg=async (imgs,type)=>{
    return await addImg(imgs,type)
}

module.exports.delImg=async (data)=>{
    return await delImg(data)
}


