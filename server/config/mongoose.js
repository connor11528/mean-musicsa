var mongoose = require('mongoose'),
	// create models.
	userModel = require('../models/User'),
	showModel = require('../models/Show')

module.exports = function(envConfig){
	mongoose.connect(envConfig.database)
}