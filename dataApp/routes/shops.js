var express = require('express');
var router = express.Router();
var {getshops,addshops,deleteshops,modefiyshops,getshopsall,modefiytype} =require('../service/shopsservice')
/* GET home page. */
router.post('/getshops', async function(req, res) {
    res.send(await getshops(req.body))
});

router.post('/addshops', async function(req, res) {
    res.send(await addshops(req.body))
});

router.post('/deleteshops', async function(req, res) {
    res.send(await deleteshops(req.body))
});


router.post('/modefiyshops', async function(req, res) {
    res.send(await modefiyshops(req.body))
});

router.post('/getshopsall', async function(req, res) {
    res.send(await getshopsall(req.body))
});

router.post('/modefiytype', async function(req, res) {
    res.send(await modefiytype(req.body))
});

module.exports = router;