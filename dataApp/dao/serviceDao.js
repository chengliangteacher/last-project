let mongoose = require('mongoose');

module.exports.addGoods=async (data)=>{
   let {goodsImg,_id,usersId}=await mongoose.model('goods').create(data);
   await mongoose.model('imgs')
   .update({
        _id:goodsImg[0],
    },{ 
        goodsId:_id,
    });

    await mongoose.model('imgs')
    .update({
        _id:goodsImg[1],
    },{ 
        goodsId:_id,
    });

    return await mongoose.model('users')
    .update({
         _id:usersId
     },{ 
        goods:_id,
     });
}

module.exports.getGoods=async ({curPage,eachPage})=>{
    let result = {};
    page = Number(curPage);
    rows = Number(eachPage);
    let data = mongoose.model('goods');
    result.total = await data.count();
    result.rows = await data
        .find()
        .populate({
            path:'goodsImg',
        })
        .sort({ _id: -1 })
        .skip((page - 1) * rows)
        .limit(rows)
        .exec()
    return result;
}

module.exports.delGoods=async ({_id})=>{
    return await mongoose.model('goods').remove({_id});
    // return mongoose.model('goods').find();
}


module.exports.xiuGoods=async (data)=>{

    await mongoose.model('goods').update({_id:data._id},data);

    await mongoose.model('imgs')
    .update({
        _id:data.goodsImg[0]._id,
    },{ 
        url:data.goodsImg[0].url,
    });

    return await mongoose.model('imgs')
    .update({
        _id:data.goodsImg[1]._id,
    },{ 
        url:data.goodsImg[1].url,
    });
}