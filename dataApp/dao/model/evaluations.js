var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evaluationSchema = new Schema({
    //门店
    orderId: {
		type: Schema.Types.ObjectId,
		ref: "orders"
    },
    evaluContent:{
        type:String
    },
    //评分
    score:{
        type:String
    },
});

mongoose.model("evaluations", evaluationSchema, "evaluations");