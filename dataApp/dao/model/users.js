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
	//对应的的门店
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

// var arr = [];
// phone = Math.floor(Math.random() * 100000);
// for (var i = 1; i < 6; i++) {
//     arr.push({
//         userAcount: 'zhang' + i,
//         // 密码
//         userPwd: 12345 * i,
//         // 手机号
//         userPhone: '158' + phone + i,
//         // 邮箱
// 		userMail: i + '@163.com',
// 		// 用户类型
// 		userType:"门店管理员"
//     })
// }
// db.users.insert(arr);
// db.users.find();