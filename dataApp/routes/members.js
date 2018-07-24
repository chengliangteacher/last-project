var express = require('express');
var router = express.Router();

const { getMembersByPage,addMembers,removeMembers,xiuMembers } = require("../service/membersService")

router.post('/getMembersByPage', async function (req, res, next) {
  const { curPage, eachPage } = req.body
  res.send(await getMembersByPage(curPage, eachPage))
});
router.post('/addMembers', async function (req, res, next) {
  res.send(await addMembers(req.body))
});
router.post('/removeMembers', async function (req, res, next) {
  const { _id} = req.body
  res.send(await removeMembers(_id))
});
router.post('/xiuMembers', async function (req, res, next) {
  res.send(await xiuMembers(req.body))
});
module.exports = router;