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
  res.json({title: 'STEP1', description: 'CONGRATS! welcome to step one. Take the value of the key myTag and send a POST request to /test with an object with key myTag and the same value', myTag: Date.now()});
});

router.post('/test', function(req, res, next) {
  const postData = req.body;
  let message = "WRONG, try again...";
  if(postData.myTag) {
    message = 'CONGRATS! you have passed test #1! But mothership is ALMOST ready!.... check back in 5 minutes...'
    console.log(postData.myTag);
  }
  res.json({title: 'STEP1', description: message});
});

router.post('/enlist', function(req, res, next) {
  const postData = req.body;
  let message = "WRONG, try again...";
  if(postData.myTag) {
    message = 'CONGRATS! you have passed the test ! You are ready to be deployed! To start, you have to enlist yourself. To create information, you must send a POST request to /enlist with your name. Sample data: {name: "Rahul the godly Brownie"}. To see if you have been enlisted, send a GET request to /enlist and you will see people who are enlisted.';
  }
  res.json({title: 'STEP1', description: message});
});

module.exports = router;

