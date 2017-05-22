var express = require('express');
var router = express.Router();
var firebase = require('firebase');
/* GET home page. */
router.post('/enlist', function(req, res, next) {
  var enlistKey = firebase.database.ref('enlist').push(enlistData);

  res.json({dataId: enlistKey});
});

router.post('/enlist', function(req, res, next) {
  var enlistKey = firebase.database.ref('enlist').push(enlistData);

  res.json({dataId: enlistKey});
});

module.exports = router;
