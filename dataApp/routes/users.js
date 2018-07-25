var express = require('express');
var router = express.Router();

let { adduser, getuser, remuser,alteruser } = require('../service/userService.js')

router.post('/users', async function (req, res, next) {
    res.send(await getuser(req.body))
});

router.post('/remuser', async function (req, res, next) {
    res.send(await remuser(req.body))
});

<<<<<<< HEAD
=======

>>>>>>> cdcb8cee8ac80f9235e9f95e2d7d11ad7a8fb83d
router.post('/adduser', async function (req, res, next) {
    res.send(await adduser(req.body))
});

router.post('/alteruser', async function (req, res, next) {
    console.log(req.body)
    res.send(await alteruser(req.body))
});

module.exports = router;
<<<<<<< HEAD
=======

>>>>>>> cdcb8cee8ac80f9235e9f95e2d7d11ad7a8fb83d
