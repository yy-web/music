var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(123)
    res.send(JSON.stringify({ code: 200, mes:'请先登录' }));
});

module.exports = router;
