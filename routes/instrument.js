var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('instrument', { title: 'Search Results for Instrument' });
});

module.exports = router;
