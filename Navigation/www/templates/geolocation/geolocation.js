(function () {
    'use strick';
    angular.module('starter').controller('GeolocationController', ['$cordovaGeolocation', '$timeout', GeolocationController]);

    console.log("work");

    function GeolocationController($cordovaGeolocation) {

        var vm = this;

        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                vm.latitude = position.coords.latitude;
                vm.longitude = position.coords.longitude;
                vm.accuracy = position.coords.accuracy;
                vm.dataReceived = true;
            }, function (err) {
                // error
                $scope.modal.hide();
                $scope.modal = $ionicLoading.show({
                    content: 'Oops!! ' + err,
                    showBackdrop: false
                });
                $timeout(function () {
                    $scope.modal.hide();
                }, 3000);
            });

    };
})();
