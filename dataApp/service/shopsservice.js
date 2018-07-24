var {getshops,addshops,deleteshops,modefiyshops} =require('../dao/shopsDao')
 module.exports.getshops=(async data=>{
   return await getshops(data)
})

module.exports.addshops=(async data=>{
  return await addshops(data)
})

module.exports.deleteshops=(async data=>{
  return await deleteshops(data)
})

module.exports.modefiyshops=(async data=>{
  return await modefiyshops(data)
})