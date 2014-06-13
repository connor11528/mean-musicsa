var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    envConfig =  require('./server/config/env')[env]

var app = express()

// EXPRESS CONFIG
require('./server/config/express')(app, envConfig)

// ROUTES CONFIG
require('./server/config/routes')(app)

// start server..
app.listen(envConfig.port)
console.log('Listening on port ', envConfig.port, '...')