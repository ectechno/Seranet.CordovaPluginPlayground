(function(){
    'use strick';
    angular.module('starter').controller('NetworkController',['$cordovaNetwork',NetworkController]);

    console.log("work");

    function NetworkController($cordovaNetwork){

        var vm = this;

        vm.isOnline = $cordovaNetwork.isOnline();

    };
})();

