const express = require('express');
//const mongoose = require('mongoose');

//setting up express
const app = express();

//setting up mongoose connection
//mongoose.connect('mongodb://127.0.0.1/users');
//mongoose.Promise = global.Promise;


//setting up middlewares
app.use(express.static('./public'));

//setting up route initialization
app.use(require('./routes/api.js'));


//listening to port
app.listen(process.env.port || 5000, function(){
	console.log('Now listening to port 5000');
});
