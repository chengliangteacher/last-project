var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoodsSchema = new Schema({
    // 名称
    goodsName: {
        type: String
    },
    // 品类
    goodsType: {
        type: String
    },
    // 材质或制作方法
    goodsMaterial: {
        type: String
    },
    goodsMath: {
        type: String
    },
    // 适用规格
    goodsCanFor: {
        type: String
    },
    // 专属规格
    goodsOnlyFor: {
        type: String
    },
    // 包装规格
    goodsSize: {
        type: String
    },
    // 口味
    goodsTaste: {
        type: String
    },
    // 特殊功用
    goodsSpecial: {
        type: String
    },

    // 产地
    goodsRegion: {
        type: String
    },
    // 出厂日期
    goodsDate: {
        type: Date
    },
    // 保质期
    goodsTime: {
        type: String
    },
    // 供应商
    goodsSupplier: {
        type: String
    },
    // 特色说明
    goodsIntro: {
        type: String
    },
    // 价格
    goodsPrice: {
        type: Number
    },
    // 图片
    goodsImg:[{
		type: Schema.Types.ObjectId,
		ref: "imgs"
	}],
    usersId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
});

// GoodsSchema.virtual('goodsDate').get(function() {
// 	return moment(this.goodsDate).format('YYYY-MM-DD HH:mm');
// });

mongoose.model("goods", GoodsSchema, "goods");