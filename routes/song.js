var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/intro', function(req, res, next) {
  res.json({title: 'hello', description: 'Hello, welcome to this game. Please send another request every minute to this url for new instructions until further notice. You are getting deployed! Send a get request to /step1'});
});

router.get('/step1', function(req, res, next) {
  res.json({title: 'STEP1', description: 'CONGRATS! welcome to step one. Take the value of the key myTag and send a POST request /test with an object with key myTag and the same value', myTag: Date.now()});
});

router.post('/test', function(req, res, next) {
  const postData = req.body;
  let message = "WRONG, try again...";
  if(postData.myTag) {
    message = 'CONGRATS! you have passed test #1! But mothership is not ready.... check back in 5 minutes...'
  }
  res.json({title: 'STEP1', description: message});
});

module.exports = router;

