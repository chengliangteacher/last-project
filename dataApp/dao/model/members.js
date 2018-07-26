var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    // 电话号码
    memberPhone: {
        type: String
    },
    // 昵称
    memberAcount: {
        type: String
    },
    // 真实姓名
    memberName: {
        type: String
    },
    // 会员卡
    menberCard: {
        type: String
    },
    // 头图
    memberImg:{type:Object},
    // [{
	// 	type: Schema.Types.ObjectId,
	// 	ref: "imgs"
	// }],
    // 送货地址
    memberAdd: {
        type: String
    },
    // 区域
    memberArea: {
        type: String
    },
    // 积分
    memberPoint: {
        type: String
    },
    // 拥有的宠物
    pets: Array
});

mongoose.model("members", MemberSchema, "members");





