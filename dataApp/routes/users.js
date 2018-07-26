var express = require('express');
var router = express.Router();

let { adduser, getuser, remuser,alteruser,useryan } = require('../service/userService.js')

router.post('/users', async function (req, res, next) {
    res.send(await getuser(req.body))
});

router.post('/remuser', async function (req, res, next) {
    res.send(await remuser(req.body))
});


router.post('/adduser', async function (req, res, next) {
    res.send(await adduser(req.body))
});

router.post('/alteruser', async function (req, res, next) {
    res.send(await alteruser(req.body))
});

//验证
router.post('/useryan', async function (req, res, next) {
    res.send(await useryan(req.body))
});

module.exports = router;

