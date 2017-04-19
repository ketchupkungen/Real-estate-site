// Npm modules
var express = require('express');

// Mongoose added
var fs = require('fs');
var mongoose = require('mongoose');

// Create a new express server, store in the variable app
var app = express();

//Fake JSON Data
// var salesData = require('./src/data/salesData.json');
// var brokersData = require('./src/data/brokersData.json');
// var usData = require('./src/data/usData.json');

// Mongoose added
global.mongoose = mongoose;

// Mongoose added
// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
mongoose.Promise = Promise;

// Point to folders where we have static files
// (our frontend code)
app.use(express.static('src'));
app.use(express.static('./'));

// Other routes go here
// ...

// If no other route rule fulfilled then return index.html
app.get('*',(req, res)=>{
  res.sendFile(__dirname + '/src/index.html');
});

// Mongoose added
// Connect to mongoDB
// and when that is done start the express server
mongoose.connect('mongodb://127.0.0.1/realestate');
mongoose.connection.once('open', onceConnected);

function onceConnected() {
	// Start the server
	app.listen(3000, ()=>{
	  console.log('Express app listening on port 3000!');
	});
}
