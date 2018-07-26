let { adduser, getuser, remuser,alteruser,useryan } = require('../dao/usersDao.js')

module.exports.getuser = async (users) => {
    return await getuser(users)
};

module.exports.remuser = async (_id) => {
    return await remuser(_id)
};

module.exports.adduser = async (users) => {
    return await adduser(users)
}

module.exports.alteruser = async (users) => {
    return await alteruser(users)
}

module.exports.useryan = async (users) => {
    return await useryan(users)
}

