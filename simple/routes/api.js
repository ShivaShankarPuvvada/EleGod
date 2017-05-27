var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res, next){
	res.render('index');
});

router.get('/explore', function(req, res, next){
	res.render('explore');
});

router.get('/about', function(req, res, next){
	res.render('about');
});

router.get('/contact', function(req, res, next){
	res.render('contact');
});

router.post('/contact', urlencodedParser, function(req, res, next){
	res.render('contact-success', {data: req.body});
});

module.exports = router;