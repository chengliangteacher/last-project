var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	// 登录名
	userAcount: {
		type: String
	},
	// 密码
	userPwd: {
		type: String
	},
	// 手机号
	userPhone: {
		type: String
	},
	// 邮箱
	userMail: {
		type: String
	},
	//  姓名
	userName: {
		type: String
	},
	//  角色
	userType: {
		type: String
	},
	// 状态
	userStatus: {
		type: String
	},
	//对的的门店
	shops: [{
		type: Schema.Types.ObjectId,
		ref: 'shops'
	}],
	//对应的服务
	services: [{
		type: Schema.Types.ObjectId,
		ref: 'services'
	}],
	//对应的商品
	goods: [{
		type: Schema.Types.ObjectId,
		ref: 'goods'
	}],
});

mongoose.model("users", UserSchema, "users");