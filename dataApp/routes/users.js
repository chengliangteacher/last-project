var express = require('express');
var router = express.Router();

let { adduser,getuser, remuser } = require('../service/service.js')

router.post('/users', async function (req, res, next) {
    // const { curPage, eachPage } = req.body
    res.send(await getuser(req.body))
});

router.post('/remuser', async function (req, res, next) {
    res.send(await remuser(req.body))
});


router.post('/adduser', async function (req, res, next) {
    res.send(await adduser(req.body))
  });

module.exports = router;

