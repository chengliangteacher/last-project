let mongoose = require('mongoose');
var fs = require('fs')
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
        $push:{
            goods:_id,
        }
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
    await mongoose.model('goods').remove({_id});
    let data = await mongoose
    .model("users")
    .find({
        goods: _id
    })
    let good=data[0].goods;
    let datas= good.filter(item=>{
        if(item!=_id){
            return item;
        }
    })

    return await mongoose
    .model("users")
    .update({
        goods: datas
    })
}


module.exports.xiuGoods=async ({goods,delImg})=>{

    await mongoose.model('goods').update({_id:goods._id},goods);

    await mongoose.model('imgs')
    .update({
        _id:goods.goodsImg[0]._id,
    },{ 
        url:goods.goodsImg[0].url,
    });

    await mongoose.model('imgs')
    .update({
        _id:goods.goodsImg[1]._id,
    },{ 
        url:goods.goodsImg[1].url,
    });

    let {unlink}=fs;
    await delImg.forEach(item=>{
        unlink('public'+item)
    })
    return unlink;
}


module.exports.findGoods = async ({ curPage = 0, eachPage = 10, title }) => {
    console.log(curPage, eachPage, title)
    const result = {
      curPage: ~~curPage,
      eachPage: ~~eachPage,
    }
    // try {
      const goodsModel = mongoose.model("goods")
      result.total = await goodsModel.count({
        goodsName: {
          $regex: new RegExp(title)
        }
      })
      result.rows = await
        goodsModel.find({
        goodsName: {
            $regex: new RegExp(title)
          }
        })
        .populate({
            path:'goodsImg',
        })
        .skip((result.curPage-1)*result.eachPage)
        .limit(result.eachPage)
        .exec()
    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve("")
    //     }, 2000)
    //   })
      return result
    // } catch (e) {
    //   console.log('=============== getMovies 异常: =====================');
    //   console.log(e);
    //   console.log('====================================');
    // }
  }

  module.exports.pricePai = async ({ curPage = 0, eachPage = 10 }) => {

    const result = {
        curPage: ~~curPage,
        eachPage: ~~eachPage,
    }

    const goodsModel = mongoose.model("goods")
    result.total = await goodsModel.count()
    result.rows = await
        goodsModel
            .find()
            .populate({
                path: 'goodsImg',
            })
            .sort({ goodsPrice: 1 })
            .skip((result.curPage - 1) * result.eachPage)
            .limit(result.eachPage)
            .exec()

    return result;
}