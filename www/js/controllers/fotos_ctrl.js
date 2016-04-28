angular.module('app.controllers').controller('fotosCtrl', ['$stateParams', 'AvancesApi', function($stateParams, AvancesApi) {
	var self=this;
	self.imagenes=[];
//	// console.log("params", $stateParams.id_obra);
//
	AvancesApi.getImagenesLote(56).then(function(response){
		self.imagenes=response.data;		
	});


}]);