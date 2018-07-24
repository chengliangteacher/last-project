var express = require('express');
var router = express.Router();
let { getEmpsByPage } = require("../service/orderWrapService")
router.post('/getEmpsByPage', async function (req, res, next) {
    const { curpage, eachPage } = req.body
    res.send(await getEmpsByPage(curPage, eachPage));
})
module.exports = router;

