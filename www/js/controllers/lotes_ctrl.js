angular.module('app.controllers').controller('lotesCtrl', ['$stateParams', 'AvancesApi', function($stateParams, AvancesApi) {
	var self=this;
	self.manzanas=[];
	console.log("params", $stateParams.id_obra);

	AvancesApi.getLotes($stateParams.id_obra).then(function(response){
		self.manzanas=response.data.manzanas;		
	});


}]);