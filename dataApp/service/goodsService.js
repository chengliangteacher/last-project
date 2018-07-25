let { addGoods,getGoods,delGoods,xiuGoods,findGoods,pricePai} = require('../dao/goodsDao')

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
module.exports.findGoods = async (data) => {
    return await findGoods(data);
}

module.exports.pricePai = async (data) => {
    return await pricePai(data);
}