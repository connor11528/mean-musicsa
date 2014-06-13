

module.exports = {
	allShows: function(req, res){
		res.send({ shows: 'all the shows'})
	},
	getShow: function(req, res){
		res.send({ 
			showIdIs: req.showId 
		})
	}
}