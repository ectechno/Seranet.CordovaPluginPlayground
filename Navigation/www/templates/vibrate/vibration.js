(function(){
    'use strick';
    angular.module('starter').controller('VibrationController',['$cordovaVibration',VibrationController]);

    console.log("work");

    function VibrationController($cordovaVibration){

        var vm = this;

        vm.vibrate = function(){
            $cordovaVibration.vibrate(500);
        };



    };
})();

