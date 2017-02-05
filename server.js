var express = require('express');

// Create express app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log("Express server is running on port 3000");
});