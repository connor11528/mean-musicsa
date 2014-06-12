var express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	favicon = require('static-favicon'),
	logger = require('morgan')

module.exports = function(app, envConfig){

	app.use(express.static(envConfig.root + 'public'))
	app.set('port', envConfig.port)
	app.use(favicon());
	app.use(logger('dev'));
	app.use(bodyParser());
	app.use(cookieParser());
	app.use(methodOverride());
}