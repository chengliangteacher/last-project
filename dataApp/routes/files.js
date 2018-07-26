var express = require('express');
var router = express.Router();

const {
	uploadFile
} = require('../util/upload')

const { addImg } = require("../service/imgservice")

router.post('/upload', async function (req, res, next) {
	// 上传文件事件 
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	res.send(await addImg(data,req.query))
});

router.post('/xiuImg', async function (req, res, next) {
	// 上传文件事件 
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	res.send(data)
});

module.exports = router;