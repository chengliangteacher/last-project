<<<<<<< HEAD
<<<<<<< HEAD

const { addImg,addMembersImg,getImg,} = require("../dao/imgsDao")
=======
<<<<<<< HEAD
const { addImg,getImg,} = require("../dao/imgDao")
=======
<<<<<<< HEAD

const { addImg,getImg,} = require("../dao/imgsDao")
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
=======

const { addImg,getImg,} = require("../dao/imgDao")
>>>>>>> 475d6294d0e71b484bb5e24b86a5726645f3ef8b

module.exports.addImg = async img => {
  return await addImg(img)
}
module.exports.getImg = async () => {
  return await getImg()
}
<<<<<<< HEAD
<<<<<<< HEAD
module.exports.addMembersImg = async img => {
  return await addMembersImg(img)
}
// const {addImg,delImg} = require("../dao/imgDao")

// module.exports.addImg=async (imgs,type)=>{
//     return await addImg(imgs,type)
// }

// module.exports.delImg=async (data)=>{
//     return await delImg(data)
// }

=======
=======
// const { addImg,getImg,} = require("../dao/imgsDao")
>>>>>>> 40ca022d52ed89fb9342a13b3e552b0fbdf43d03

module.exports.addImg = async img => {
  return await addImg(img)
}
<<<<<<< HEAD
=======
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c

>>>>>>> 963b2da440194f32cff45852b10761477ed967d2

<<<<<<< HEAD
=======
>>>>>>> 40ca022d52ed89fb9342a13b3e552b0fbdf43d03
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c
=======
>>>>>>> 475d6294d0e71b484bb5e24b86a5726645f3ef8b
