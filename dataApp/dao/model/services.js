var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
	// 名称
	serviceName: {
		type: String
	},
	// 营业执照号码
	shopLicenceNum: {
		type: String
	},
	// 服务类别
	serviceType: {
		type: String
	},
	// 排期
	serviceSchedule: {
		type: String
	},
	// 适用规格
	serviceCanFor: {
		type: String
	},
	// 服务规格
	serviceDetial: {
		type: String
	},
	// 耗时
	serviceTime: {
		type: String
	},
	// 服务员等级
	serviceLevel: {
		type: Number
	},

	// 价格
	servicePrice: {
		type: Number
	},

	serviceImg:[{
		type: Schema.Types.ObjectId,
		ref: "imgs"
	}],
	//用户联系
    usersId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
});

mongoose.model("services", ServiceSchema, "services");