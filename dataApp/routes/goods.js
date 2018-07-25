var express = require('express');
var router = express.Router();
/* GET home page. */
let { addGoods,getGoods,delGoods,xiuGoods,findGoods,pricePai} = require('../service/goodsService')

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

 router.post('/findGoods',async function(req, res, next) {
    res.send(await findGoods(req.body));
 });

 router.post('/pricePai',async function(req, res, next) {
    res.send(await pricePai(req.body));
 });


module.exports = router;
