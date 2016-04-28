
angular.module('app.controllers').controller('avancesCtrl', ['$stateParams', 'AvancesApi', '$cordovaCamera',
    function ($stateParams, AvancesApi,$cordovaCamera) {
        var self = this;
        self.avances = [];
        self.srcImage="";
        // console.log("params", $stateParams.id_lote);

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

        self.tomarFoto=function (){
            document.addEventListener("deviceready",function(){
                var options={
                     quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false,
                    correctOrientation:true
                };

                $cordovaCamera.getPicture(options).then(function(imageData){
                    self.srcImage= "data:image/jpeg;base64,"+ imageData;
                }).catch(function(response){
                    console.log("error al tomar foto");
                });

            },false);
        };

    }]);
   