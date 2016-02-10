var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var d = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at ' + d);
		next();
	}	
};

// Use module exports to expose middleware
module.exports = middleware;