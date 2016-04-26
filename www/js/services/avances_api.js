angular.module('app.services')

        .factory('AvancesApi', ['$http', '$ionicLoading', function ($http, $ionicLoading) {

                var url =  'http://176.32.230.47/softwarechiapas.com/controldeobras_api/index.php/'; // 'http://localhost:8000/controldeobras_api/index.php/';

                function getObras() {
                    return $http.get(url + 'obras');
                }

                function getLotes(id_obra) {
                    return $http.get(url + 'obras/get_manzanas_lotes/' + id_obra);
                }

                function getAvances(id_lote) {
                    $ionicLoading.show({template: '<ion-spinner></ion-spinner>'});
                    return $http.get(url + 'lotes/avances/' + id_lote).then(function (response) {
                        $ionicLoading.hide();
                        return response;
                    }).catch(function (response) {
                        $ionicLoading.hide();
                    });
                }


                return {
                    getObras: getObras,
                    getLotes: getLotes,
                    getAvances: getAvances
                };

            }]);