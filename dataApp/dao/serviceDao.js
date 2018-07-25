let mongoose = require('mongoose');
var fs = require('fs')
module.exports.addService = async (data) => {
    console.log(data)
    let { serviceImg, _id, usersId } = await mongoose.model('services').create(data);
    await mongoose.model('imgs')
        .update({
            _id: serviceImg,
        }, {
                goodsId: _id,
            });

    return await mongoose.model('users')
        .update({
            _id: usersId
        }, {
                $push: {
                    services: _id,
                }
            });
}

module.exports.getService = async ({ curPage, eachPage }) => {
    let result = {};
    page = Number(curPage);
    rows = Number(eachPage);
    let data = mongoose.model('services');
    result.total = await data.count();
    result.rows = await data
        .find()
        .populate({
            path: 'serviceImg',
        })
        .sort({ _id: -1 })
        .skip((page - 1) * rows)
        .limit(rows)
        .exec()
    return result;
}

module.exports.delService = async ({ _id }) => {
    await mongoose.model('services').remove({ _id });
    let data = await mongoose
    .model("users")
    .find({
        services: _id
    })
    let service=data[0].services;
    let datas= service.filter(item=>{
        if(item!=_id){
            return item;
        }
    })

    return await mongoose
    .model("users")
    .update({
        services: datas
    })

}


module.exports.xiuService = async ({ service, delImg }) => {

    await mongoose.model('services').update({ _id: service._id }, service);

    console.log(service, delImg)

    await mongoose.model('imgs')
        .update({
            _id: service.serviceImg[0]._id,
        }, {
                url: service.serviceImg[0].url,
            });

    let { unlink } = fs;
    return await unlink('public' + delImg)

}

module.exports.findService = async ({ curPage = 0, eachPage = 10, title }) => {
    const result = {
        curPage: ~~curPage,
        eachPage: ~~eachPage,
    }
    // try {
    const goodsModel = mongoose.model("services")
    result.total = await goodsModel.count({
        serviceName: {
            $regex: new RegExp(title)
        }
    })
    result.rows = await
        goodsModel.find({
            serviceName: {
                $regex: new RegExp(title)
            }
        })
            .populate({
                path: 'serviceImg',
            })
            .skip((result.curPage - 1) * result.eachPage)
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

    const serviceModel = mongoose.model("services")
    result.total = await serviceModel.count()
    result.rows = await
        serviceModel
            .find()
            .populate({
                path: 'serviceImg',
            })
            .sort({ servicePrice: 1 })
            .skip((result.curPage - 1) * result.eachPage)
            .limit(result.eachPage)
            .exec()

    return result;
}