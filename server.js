var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; // for heroku

// want to define middleware at the top of the file

// require the local file middleware.js
var middleware = require('./middleware.js');

// app.use mounts the middleware functions (defined in var middleware, at the path)
//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

// whenever want to add route-specific middlewear, add it as the 2nd 
// argument to the function
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send("About Us!");
});

app.use(express.static(__dirname + '/public'));

// visit to url: localhost:3000 in chrome
app.listen(PORT, function () {
	console.log('Epxress server started on port ' + PORT + '!');
});