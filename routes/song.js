var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/next', function(req, res, next) {
  res.json({title: 'hello', description: 'please check back in 5 minutes'});
});

router.get('/step1', function(req, res, next) {
  res.json({title: 'STEP1', description: 'CONGRATS! welcome to step one. Take the value of the key myTag and send a POST request to /test with an object with key myTag and the same value', myTag: Date.now()});
});

router.post('/test', function(req, res, next) {
  const postData = req.body;
  let message = "WRONG, try again...";
  if(postData.myTag) {
    message = 'CONGRATS! you have passed the test ! You are ready to be deployed! To start, you have to enlist yourself. To create information, you must send a POST request to /enlist with your name. Sample data: {name: "Rahul the godly Brownie"}. To see if you have been enlisted, send a GET request to /enlist and you will see people who are enlisted.';
  }
  res.json({title: 'STEP1', description: message});
});

router.post('/enlist', function(req, res, next) {
  const postData = req.body;
  if(postData.name) {
    var enlistKey = firebase.database().ref('enlist').push(postData);
    console.log("ENLIST SUCCESS FOR ", postData.name);
    res.json({title: 'STEP2', description: `Congratulations! You have been enlisted. Your enlistment ID is: ${enlistKey.key}. Please keep this id safe, you will need this for ALL future requests. send a GET request to /next/enlistID to get next instructions `});
  } else {
    res.json({title: 'ERROR', description: 'your name does not exist in your request'});
  }
});

module.exports = router;

