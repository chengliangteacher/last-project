var express = require('express');
var router = express.Router();
/* GET home page. */
let { addService,getService,delService,xiuService} = require('../service/serviceSevice')

router.post('/addService',async function(req, res, next) {
   res.send(await addService(req.body))
});

router.post('/getService',async function(req, res, next) {
   res.send(await getService(req.body));
});

router.post('/delService',async function(req, res, next) {
    res.send(await delService(req.body));
 });

 router.post('/xiuService',async function(req, res, next) {
    res.send(await xiuService(req.body));
 });


module.exports = router;
