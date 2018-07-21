var {getshops} =require('../dao/shopsDao')
 module.exports.getshops=(async data=>{
   return await getshops(data)
})