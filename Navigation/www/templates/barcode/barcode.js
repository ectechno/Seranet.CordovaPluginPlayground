(function(){
    'use strick';
    angular.module('starter').controller('BarcodeController',['$cordovaBarcodeScanner',BarcodeController]);

    console.log("work");

    function BarcodeController($cordovaBarcodeScanner){

        var vm = this;

        vm.scan = function() {
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                alert(imageData.text);
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
            }, function(error) {
                console.log("An error happened -> " + error);
            });
        };
    };
})();

