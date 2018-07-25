var express = require('express');
var router = express.Router();
let { getEmpsByPage, addEmpsByPage,shopsEmpsByPage,goodsEmpsByPage,membersEmpsByPage,servicesEmpsByPage,deleteOrderWrap } = require("../service/orderWrapService")
router.post('/getEmpsByPage', async function (req, res, next) {
    const { curPage, eachPage } = req.body
    // console.log((await getEmpsByPage(curPage, eachPage)))
    res.send(await getEmpsByPage(curPage, eachPage));
})


router.post('/addEmpsByPage', async function (req, res, next) {
    // console.log(await addEmpsByPage(req.body))
    res.send(await addEmpsByPage(req.body));
})

router.post('/shopsEmpsByPage', async function (req, res, next) {
    res.send(await shopsEmpsByPage(req.body));
})

router.post('/goodsEmpsByPage', async function (req, res, next) {
    res.send(await goodsEmpsByPage(req.body));
})

router.post('/membersEmpsByPage', async function (req, res, next) {
    res.send(await membersEmpsByPage(req.body));
})

router.post('/servicesEmpsByPage', async function (req, res, next) {
    res.send(await servicesEmpsByPage(req.body));
})

router.post('/deleteOrderWrap', async function (req, res, next) {
    res.send(await deleteOrderWrap(req.body));
})
module.exports = router;

