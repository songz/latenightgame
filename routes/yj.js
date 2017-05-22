// firebase credentials
let credentials = {
    apiKey: "AIzaSyBYa1yFNdNMuouHHYzZoJ9kRO26TnEOmCg",
    authDomain: "latenightgame-969b3.firebaseapp.com",
    databaseURL: "https://latenightgame-969b3.firebaseio.com",
    projectId: "latenightgame-969b3",
    storageBucket: "latenightgame-969b3.appspot.com",
    messagingSenderId: "440451556696"
};

var firebase = require('firebase');
firebase.initializeApp(credentials);

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/yj', function(req, res, next) {
  res.json({title: 'hello', description: 'Hello, welcome to this game. Please send another request every minute to this url for new instructions until further notice. You are getting deployed! '});
});

module.exports = router;


