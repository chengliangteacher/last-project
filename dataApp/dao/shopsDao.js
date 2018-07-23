const mongoose = require("mongoose")
var fs=require('fs')

//查询
module.exports.getshops = async ({
    curpage,
    count
}) => {
    const shopsmodel = mongoose.model("shops")
    const shop = await shopsmodel.find()
        .populate([{
                path: 'shopLicenceImg'
            },
            {
                path: 'shopImg'
            }
        ])
        .skip(curpage)
        .limit(count)
    const total = await shopsmodel.find().count()
    return {
        shop,
        total,
    }
}


//添加
module.exports.addshops = async ({
    data,
    shopLicenceImg,
    shopImg
}) => {
    const shopsmodel = mongoose.model("shops")
    const {
        _id: shopsId,
        usersId
    } = await shopsmodel.create({ ...data,
        shopLicenceImg: shopLicenceImg,
        shopImg: shopImg
    })
    await mongoose.model('imgs').update({
        _id: shopLicenceImg
    }, {
        shopsId: shopsId
    })
    await mongoose.model('imgs').update({
        _id: shopImg
    }, {
        shopsId: shopsId
    })
    await mongoose.model('users').update({
        _id: usersId
    }, {
        $push: {
            shops: shopsId
        }
    })
    return true
}
//删除
module.exports.deleteshops = async ({
    _id
}) => {
    const shopsmodel = mongoose.model("shops")
    const imgsmodel=mongoose.model('imgs')
    const arr=await shopsmodel.find({_id})
    const shopImgarr=arr.map(({shopImg})=>{
        return shopImg
    })
    const shoplicarr=arr.map(({shopLicenceImg})=>{
        return shopLicenceImg
    })
    const deleshopImg=await imgsmodel.find({_id:shopImgarr})
    const deleshoplicImg=await imgsmodel.find({_id:shoplicarr})
    await imgsmodel.remove({_id:shopImgarr})
    await imgsmodel.remove({_id:shoplicarr})
    const shopImgurl=deleshopImg.map(({url})=>{
        return url
    })
    const shoplicImgurl=deleshoplicImg.map(({url})=>{
        return url
    })
    console.log(shopImgurl,shoplicImgurl)
    const {unlink}=fs
    shopImgurl.forEach(async (item)=>{
        console.log('shopImgurl')
        await unlink('public'+item)
    })
    shoplicImgurl.forEach(async (item)=>{
        console.log('shoplicImgurl')
        await unlink('public'+item)
    })
    await shopsmodel.remove({
        _id
    })
    return true
}

//修改
module.exports.modefiyshops = async ({
    data,
    shopImg,
    shopLicenceImg
}) => {
    const shopsmodel = mongoose.model("shops")
    const a= await shopsmodel.update({
        _id: data._id
    }, {
        shopName:data.shopName,
        shopLicenceNum:data.shopLicenceNum,
        shopLicenceImg:shopLicenceImg||data.shopLicenceImg._id,
        shopAdd:data.shopAdd,
        shopLocation:data.shopLocation,
        shopCorporate:data.shopCorporate,
        shopTel:data.shopTel,
        shopImg:shopImg||data.shopImg._id,
        usersId:data.usersId,
        shopFeature:data.shopFeature,
    })
    await mongoose.model('imgs').update({
        _id: shopLicenceImg||data.shopLicenceImg._id
    }, {
        shopsId: data._id
    })
    await mongoose.model('imgs').update({
        _id: shopImg||data.shopImg._id
    }, {
        shopsId: data._id
    })
    const {unlink}=fs
   if(shopLicenceImg!=''){
       await mongoose.model('imgs').remove({_id:data.shopLicenceImg._id})
       await unlink("public"+data.shopLicenceImg.url)
   }
   if(shopImg!=''){
    await mongoose.model('imgs').remove({_id:data.shopImg._id})
    await unlink("public"+data.shopImg.url)
    }
    return true
}