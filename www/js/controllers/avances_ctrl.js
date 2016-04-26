
angular.module('app.controllers').controller('avancesCtrl', ['$stateParams', 'AvancesApi', function ($stateParams, AvancesApi) {
        var self = this;
        self.avances = [];
        console.log("params", $stateParams.id_lote);

        AvancesApi.getAvances($stateParams.id_lote).then(function (response) {
            self.avances = response.data;
        });

        self.algunoSeleccionado = function () {

            var count = 0;
            for (var i = 0; i < self.avances.length; i++) {
                if (self.avances[i].selected) {
                    count++;
                }
            }
            return count > 0;
        };

        self.cancelar = function () {
            for (var i = 0; i < self.avances.length; i++) {
                self.avances[i].selected = false;               
            }
           
        };

    }]);
   