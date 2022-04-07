var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mobiles', { title: 'Search results for mobiles' });
});

module.exports = router;
