let { getEmpsByPage, addEmpsByPage, shopsEmpsByPage, goodsEmpsByPage, membersEmpsByPage, servicesEmpsByPage, deleteOrderWrap } = require('../dao/orderWrapDao')
module.exports.getEmpsByPage = async (curpage, eachPage) => {
    return await getEmpsByPage(curpage, eachPage);
}
//添加
module.exports.addEmpsByPage = async (orderWrap) => {
    return await addEmpsByPage(orderWrap);
}


module.exports.shopsEmpsByPage = async (data) => {
    return await shopsEmpsByPage(data);
}

module.exports.goodsEmpsByPage = async (data) => {
    return await goodsEmpsByPage(data);
}

module.exports.membersEmpsByPage = async (data) => {
    return await membersEmpsByPage(data);
}

module.exports.servicesEmpsByPage = async (data) => {
    return await servicesEmpsByPage(data);
}

module.exports.deleteOrderWrap = async _id => {
    return await deleteOrderWrap(_id);
}
