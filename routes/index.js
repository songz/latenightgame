var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/intro', function(req, res, next) {
  res.json({title: 'hello', description: 'Hello, welcome to this game. Please send another request ever minute to this url for new instructions until further notice. You are in a room...'});
});

module.exports = router;
