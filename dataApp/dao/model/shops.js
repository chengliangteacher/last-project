var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({
	// 名称
	shopName: {
		type: String
	},
	// 营业执照号码
	shopLicenceNum: {
		type: String
	},
	// 营业执照图片
	shopLicenceImg: {
		type: Schema.Types.ObjectId,
		ref: "imgs"
	},
	// 营业地址
	shopAdd: {
		type: String
	},
	// 定位
	shopLocation: {
		type: String
	},
	// 法人
	shopCorporate: {
		type: String
	},
	// 联系电话
	shopTel: {
		type: String
	},
	// 头图
	shopImg: {
		type: Schema.Types.ObjectId,
		ref: "imgs"
	},
	// 特色
	shopFeature: {
		type: String
	},
	// 店员属性
	shopEmployee: {
		type: Object
	},
	//用户联系
    usersId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
});

mongoose.model("shops", ShopSchema, "shops");