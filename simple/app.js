var express = require('express');
var bodyParser = require('body-parser');
//const mongoose = require('mongoose');

//setting up express
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//setting up mongoose connection
//mongoose.connect('mongodb://127.0.0.1/users');
//mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');



//setting up middlewares


//app.use(express.static('ejs'))

app.use(express.static('./public'));
//app.use(express.static(__dirname + '/public'));

//setting up route initialization
app.use(require('./routes/api.js'));
app.use(urlencodedParser);

//listening to port
app.listen(process.env.port || 5000, function(){
	console.log('Now listening to port 5000');
});
