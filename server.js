var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    envConfig =  require('./server/config/env')[env]

var app = express()

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig)

// ROUTES CONFIG
require('./server/config/routes')(app)

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'))
})