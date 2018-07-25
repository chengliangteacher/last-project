var {getshops,addshops,deleteshops,modefiyshops,getshopsall} =require('../dao/shopsDao')
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

module.exports.getshopsall=(async data=>{
  return await getshopsall(data)
})