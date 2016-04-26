angular.module('app.controllers').controller('obrasCtrl', ['$scope', 'AvancesApi',
    function ($scope, AvancesApi) {
        var self = this;
        self.obras = [];

        self.getObras = function (forceRefresh) {
            AvancesApi.getObras().then(function (response) {
                self.obras = response.data;
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        };


        self.getObras(false);

    }]);
   