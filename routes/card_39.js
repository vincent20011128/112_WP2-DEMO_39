var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_39/index', { name: '羅聖博', id: '210410139' });
});

module.exports = router;
