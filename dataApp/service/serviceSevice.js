let { addGoods,getGoods,delGoods,xiuGoods } = require('../dao/goodsDao')

module.exports.addGoods = async (data) => {
    return await addGoods(data);
}

module.exports.getGoods = async (data) => {
    return await getGoods(data);
}

module.exports.delGoods = async (data) => {
    return await delGoods(data);
}

module.exports.xiuGoods = async (data) => {
    return await xiuGoods(data);
}
