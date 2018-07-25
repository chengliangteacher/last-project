let {addService,getService,delService,xiuService,findService,pricePai} = require('../dao/serviceDao')

module.exports.addService = async (data) => {
    return await addService(data);
}

module.exports.getService = async (data) => {
    return await getService(data);
}

module.exports.delService = async (data) => {
    return await delService(data);
}

module.exports.xiuService = async (data) => {
    return await xiuService(data);
}

module.exports.findService = async (data) => {
    return await findService(data);
}

module.exports.pricePai = async (data) => {
    return await pricePai(data);
}
