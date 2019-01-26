var express = require('express');
var router = express.Router();

/** Add all the routes of other JS files here
*/
router.use('/users', require('./users'));

/** 
	Methods go here
*/
router.get('/', function(req,res,next) {
	res.json({message:"Hello world!"});
});

module.exports = router;
