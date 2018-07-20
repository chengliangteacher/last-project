var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
    //门店
    shopId: {
		type: Schema.Types.ObjectId,
		ref: "shops"
    },
    //宠主
    memberId: {
		type: Schema.Types.ObjectId,
		ref: "members"
    },
    //商品
    goodId: {
		type: Schema.Types.ObjectId,
		ref: "goods"
    },
    //服务
    serviceId: {
		type: Schema.Types.ObjectId,
		ref: "services"
    },
    //发货状态
    deliveryStatus: {
		type: String
    },
    //付款状态
    aymentstatus: {
		type: String
    },
    //购买数量
    count: {
		type: Number
    }
});

mongoose.model("orders", ordersSchema, "orders");