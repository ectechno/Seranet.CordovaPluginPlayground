(function(){
    'use strick';
    angular.module('starter').controller('CameraController',['$cordovaCamera',CameraController]);

    console.log("work");

    function CameraController($cordovaCamera){

        var vm = this;

        vm.takePicture = function(){

            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
            };

            $cordovaCamera.getPicture(options).then(function(imageData){

                vm.imageSrc = "data:image/jpeg;base64, " + imageData;
            }, function(err){
                alert("An error occured : "+ err);
            });
        };

        vm.selectPicture = function(){

            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA
            };

            $cordovaCamera.getPicture(options).then(function(imageUri){

                vm.imageSrc = imageUri;
            }, function(err){
                alert("An error occured : "+ err);
            });
        };

    };
})();

