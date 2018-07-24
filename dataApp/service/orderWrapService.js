let { getEmpsByPage } = require('../dao/orderWrapDao')
module.exports.getEmpsByPage = async (curpage, eachPage) => {
    return await getEmpsByPage(curpage, eachPage);
}