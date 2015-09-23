(function(){
    'use strick';
    angular.module('starter').controller('DeviceController',['$cordovaDevice',DeviceController]);

    console.log("work");

    function DeviceController($cordovaDevice){

        var vm = this;

        vm.deviceModel = $cordovaDevice.getModel();
        vm.devicePlatform = $cordovaDevice.getPlatform();
        vm.deviceUUID = $cordovaDevice.getUUID();
        vm.deviceVersion = $cordovaDevice.getVersion();

    };
})();

