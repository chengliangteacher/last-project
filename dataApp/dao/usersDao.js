var mongoose = require("mongoose")

module.exports.adduser = async (users) => {
    console.log(users)
    return await mongoose
        .model('users')
        .create(users)
};

module.exports.getuser = async ({
    curPage,
    eachPage
}) => {
    const usersmodel = mongoose.model("users")
    const count = await usersmodel.count()

    const tableData = await usersmodel
        .find()
        .sort({
            _id: -1
        })
        .skip((curPage - 1) * eachPage)
        .limit(eachPage)
        .exec()

    return {
        curPage,
        eachPage,
        count,
        maxPage: Math.ceil(count / eachPage),
        tableData
    }
};

module.exports.remuser = async ({
    _id
}) => {
    const usersmodel = mongoose.model('users')
    // const shopsarr=usersmodel.shops
    // const goodsarr=usersmodel.goods
    // const servicesarr=usersmodel.services
    // await mongoose.model('shops').remove({_id:shopsarr})
    // await mongoose.model('goods').remove({_id:goodsarr})
    // await mongoose.model('services').remove({_id:servicesarr})
    return await
    usersmodel
        .find()
        .remove({
            _id
        })
};

module.exports.alteruser = async ({
    userAcount,
    userPwd,
    userPhone,
    userMail,
    userType,
    userStatus,
    _id
}) => {
    return await mongoose.model('users')
        .update({
            _id
        }, {
            userAcount,
            userPwd,
            userPhone,
            userMail,
            userType,
            userStatus
        })
};


module.exports.useryan = async ({
    form
}) => {
    let usersmodel = mongoose.model('users')
    const isbool = await usersmodel.find({
        userPwd: form.userPwd,
        userAcount: form.userAcount,
        userType: form.userType
    })
    if (isbool.length !== 0) {
        return isbool
    } else {
        return false
    }

}