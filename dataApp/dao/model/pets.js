var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    // 名称
    petName: {
        type: String
    },
    // 品类
    pstCategory: {
        type: String
    },
    // 种类
    petSpecies: {
        type: String
    },
    // 颜色
    petColor: {
        type: String
    },
    // 生日
    petdate: {
        type: String
    },
    // 性格
    petCharacter: {
        type: String
    },
    //关联宠主
    memberId: {
        type: Schema.Types.ObjectId,
        ref: 'members'
    },
});

mongoose.model("pets", petSchema, "pets");