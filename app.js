// Npm modules 
var express = require('express');

// Create a new express server, store in the variable app
var app = express();

// Point to folders where we have static files
// (our frontend code)
app.use(express.static('src'));
app.use(express.static('./'))

// Other routes go here
// ...

// If no other route rule fulfilled then return index.html
app.get('*',(req,res)=>{
  res.sendFile(__dirname + '/src/index.html');
});

// Start the server
app.listen(3000, ()=>{
  console.log('Express app listening on port 3000!');
  console.log('I hope you started me using npm start...');
});
