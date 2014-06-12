AWS.config.loadFromPath('./AwsConfig.json');
var s3 = new AWS.S3();

module.exports = function(app){

	app.get('/addToS3', function(req, res){
		var toAdd = {
			message: 'put me in ze bucket!'
		};

		s3.createBucket({Bucket: 'bucketName'}, function() {
		  s3.putObject(toAdd, function(err, data) {
		    if (err) {
		      console.log("Error uploading data: ", err);
		    } else {
		      console.log("Successfully uploaded: " + data);
		    }
		  });
		});
	})

	// not found error for undefined API routes
	app.all('/api/*', function(req, res){
		res.send(404)
	})

	app.get('/*', function(req, res) {
		res.sendfile('./public/index.html');
	});
}