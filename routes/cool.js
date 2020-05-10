var express = require('express');
var router = express.Router();

/* GET users cool page. */
router.get('/', function(req, res, next) {
  res.send('Yo');
});

module.exports = router;
