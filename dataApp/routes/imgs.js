var express = require('express');
var router = express.Router();

const {
	uploadFile
} = require('../util/upload')

const { addImg,getImg,} = require("../service/imgservice")

router.post('/upload1', async function (req, res, next) {
	const {type}=req.query
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	console.log(data)
	res.send(await addImg({...data,type}))

});
router.post('/getImg', async function (req, res, next) {
	res.send(await getImg())
});


module.exports = router;