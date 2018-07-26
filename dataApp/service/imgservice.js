const {addImg} = require("../dao/imgsDao")
module.exports.addImg=async (imgs)=>{
    return await addImg(imgs)
}