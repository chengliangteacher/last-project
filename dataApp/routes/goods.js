var express = require('express');
var router = express.Router();
/* GET home page. */
let { addGoods,getGoods,delGoods,xiuGoods} = require('../service/goodsService')

router.post('/addGoods',async function(req, res, next) {
   res.send(await addGoods(req.body))
});

router.post('/getGoods',async function(req, res, next) {
   res.send(await getGoods(req.body));
});

router.post('/delGoods',async function(req, res, next) {
    res.send(await delGoods(req.body));
 });

 router.post('/xiuGoods',async function(req, res, next) {
    res.send(await xiuGoods(req.body));
 });


module.exports = router;
