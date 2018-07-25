let mongoose = require('mongoose');

module.exports.addService=async (data)=>{
   let {serviceImg,_id,usersId}=await mongoose.model('services').create(data);
   await mongoose.model('imgs')
   .update({
        _id:serviceImg,
    },{ 
        goodsId:_id,
    });

    return await mongoose.model('users')
    .update({
         _id:usersId
     },{ 
        services:_id,
     });
}

module.exports.getService=async ({curPage,eachPage})=>{
    let result = {};
    page = Number(curPage);
    rows = Number(eachPage);
    let data = mongoose.model('services');
    result.total = await data.count();
    result.rows = await data
        .find()
        .populate({
            path:'serviceImg',
        })
        .sort({ _id: -1 })
        .skip((page - 1) * rows)
        .limit(rows)
        .exec()
    return result;
}

module.exports.delService=async ({_id})=>{
    return await mongoose.model('services').remove({_id});
}


module.exports.xiuService=async (data)=>{

    await mongoose.model('services').update({_id:data._id},data);

    console.log(data)
    return await mongoose.model('imgs')
    .update({
        _id:data.serviceImg[0]._id,
    },{ 
        url:data.serviceImg[0].url,
    });

}