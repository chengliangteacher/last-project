var express = require('express');
var router = express.Router();

let { adduser, getuser, remuser,alteruser } = require('../service/userService.js')

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
    console.log(req.body)
    res.send(await alteruser(req.body))
});

module.exports = router;

