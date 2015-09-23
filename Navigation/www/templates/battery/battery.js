(function(){
    'use strick';
    angular.module('starter').controller("BatteryController", function($scope, $rootScope, $ionicPlatform, $cordovaBatteryStatus) {

        $ionicPlatform.ready(function() {
            $rootScope.$on("$cordovaBatteryStatus:status", function(event, args) {
                if(args.isPlugged) {
                    vm.level = args.level + "%";
                    vm.isPlugedIn = true;
                } else {
                    vm.level = args.level + "%";
                    vm.isPlugedIn = false;
                }
            });
        });

    });

/*    angular.module('starter').controller('BatteryController',['$rootScope','$ionicPlatform','$cordovaBatteryStatus',BatteryController]);



    function BatteryController($cordovaBatteryStatus,$rootScope,$ionicPlatform){

        var vm = this;
        //vm.isPlugedIn = true;
        //vm.level = "100%";
        function () {
            $rootScope.$on("$cordovaBatteryStatus:status", function(event, args) {
                if(args.isPlugged) {
                    vm.level = args.level + "%";
                    vm.isPlugedIn = true;
                } else {
                    vm.level = args.level + "%";
                    vm.isPlugedIn = false;
                }
            });
        };


    };*/
})();
