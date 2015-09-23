(function(){
    'use strick';
    angular.module('starter').controller('ImagePickerController',['$cordovaImagePicker',ImagePickerController]);

    console.log("work");

    function ImagePickerController($cordovaImagePicker){

        var vm = this;

        var options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };

        $cordovaImagePicker.getPictures(options)
            .then(function (results) {
                vm.images = results;
        }, function(error) {
            // error getting photos
        });


    };
})();
