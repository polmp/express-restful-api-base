/** 
	DON'T TOUCH THIS MODULE. USE config.* FILES
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config.'+process.env.NODE_ENV);

module.exports = config;