var express = require('express');
var router = express.Router();
var {getshops} =require('../service/shopsservice')
/* GET home page. */
router.post('/getshops', async function(req, res) {
    // console.log(req.body)
    res.send(await getshops(req.body))
});
module.exports = router;