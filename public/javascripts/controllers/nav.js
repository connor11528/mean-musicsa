'use strict'

app.controller('NavCtrl', ['$scope', function($scope){
	$scope.logout = function(){
		Auth.logout()
	}
}])