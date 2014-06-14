var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		database: 'localhost',
		rootPath: rootPath,
		port: process.env.PORT || 3000,
	},
	production: {
		database: '',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}