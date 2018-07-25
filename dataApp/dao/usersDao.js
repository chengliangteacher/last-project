var mongoose = require("mongoose")

module.exports.adduser = async (users) => {
    return await mongoose
        .model('users')
        .create(users)
};

module.exports.getuser = async ({ curPage, eachPage }) => {
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

module.exports.remuser = async ({ _id }) => {
    return await mongoose
        .model('users')
        .find()
        .remove({ _id })
};

module.exports.alteruser = async ({
    userAcount,
    userPwd,
    userPhone,
    userMail,
    userType,
    userStatus,
    _id }) => {
    return await mongoose.model('users')
        .update({ _id }, {
            userAcount,
            userPwd,
            userPhone,
            userMail,
            userType,
            userStatus
        })
};