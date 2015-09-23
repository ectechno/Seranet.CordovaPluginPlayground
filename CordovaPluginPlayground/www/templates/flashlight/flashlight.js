(function(){
    'use strick';
    angular.module('starter').controller('FlashLightController',['$cordovaFlashlight',FlashLightController]);

    console.log("work");

    function FlashLightController($cordovaFlashlight){

        var vm = this;

        vm.notSupported = true;
        $cordovaFlashlight.available().then(function(availability){
            // availability = true || false
            vm.notSupported = !availability;
        });
        vm.toggleTorch = function() {
            if ($scope.notSupported) return;
            $cordovaFlashlight.toggle()
                .then(function(success) { /* success */ },
                      function(error) { /* error */ });
        }

    };
})();
