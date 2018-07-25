var express = require('express');
var router = express.Router();

let {delImg} = require("../service/imgsService")

router.post('/delImg', async function (req, res, next) {
  res.send(await delImg(req.body))
});

module.exports = router; 
  