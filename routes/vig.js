var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.post('/enlist', function(req, res, next) {
  var enlistKey = firebase.database.ref('enlist').push(enlistData);

  res.json({dataId: enlistKey});
});

router.post('/enlist', function(req, res, next) {
  const enlistData = req.body;
  console.log('what data?', enlistData);
  var enlistKey = firebase.database().ref('enlist').push(enlistData);
  console.log('enlistKey', enlistKey);

  res.json({title: 'STEP1', description: message});
});

module.exports = router;
