var express = require('express');
var router = express.Router();

const {
	uploadFile
} = require('../util/upload')

<<<<<<< HEAD
const { addImg,addMembersImg,getImg,} = require("../service/imgsService")
=======
const { addImg,getImg,} = require("../service/imgservice")
>>>>>>> e730e5b539d65abf2fdb46603e6fef073667544c

router.post('/upload1', async function (req, res, next) {
	const {type}=req.query
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	res.send(await addImg({...data,type}))
});
//有用，别删
router.post('/addMembersImg', async function (req, res, next) {
	const {type}=req.query
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'imgs',
		//路径
		path: "./public/images/",
	})
	res.send(await addMembersImg({...data,type}))
});

router.post('/getImg', async function (req, res, next) {
	res.send(await getImg())
});


module.exports = router;