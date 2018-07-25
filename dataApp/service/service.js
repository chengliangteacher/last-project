let { adduser,getuser, remuser } = require('../dao/usersDao.js')

module.exports.getuser = async (users) => {
    return await getuser(users)
};

module.exports.remuser = async (_id) => {
    return await remuser(_id)
}; 

module.exports.adduser = async (users) => {
    const data = await adduser(users)
    if(data._id) {
      return await getuser(users.curPage, users.eachPage)
    }
  }