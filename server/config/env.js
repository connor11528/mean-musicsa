var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		root: rootPath,
		port: process.env.PORT || 3000,
	},
	production: {
		root: rootPath,
		port: process.env.PORT || 80
	}
}