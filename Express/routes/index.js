var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    // res.send("<h1>Hello, World</h1>");
    res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res) {
  res.render('shop', { title: 'Shop' });
});

router.get('/tickets', function(req, res) {
  res.render('tickets', { title: 'Tickets' });
});

router.get('/stats', function(req, res) {
  res.render('stats', { title: 'Stats' });
});

module.exports = router;
