var express = require('express');
var morgan = require('morgan'); //Used for debugging

var app = express();

/**
	Middleware section
*/
app.use(morgan('dev'));
app.use(express.json()); //Manage JSON files
app.use(express.urlencoded({ extended: false }));

/**
	Custom middlewares go here
*/

/** Load all routes */
app.use(require('./routes'));

/** Error handling */
app.use((req,res,next)=> {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
	const error_code = err.status || 500;
	res.status(error_code);
	res.json({error: {code: error_code,message: err.message}});
});

/** 
	App config
*/
app.disable('x-powered-by');

module.exports = app;