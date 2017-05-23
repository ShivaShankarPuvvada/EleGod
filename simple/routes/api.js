const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next){
	res.sendFile('/simple/public/index.html');
});

router.get('/explore', function(req, res, next){
	res.sendFile('/simple/public/explore.html');
});

router.get('/about', function(req, res, next){
	res.sendFile('/simple/public/about.html');
});

module.exports = router;