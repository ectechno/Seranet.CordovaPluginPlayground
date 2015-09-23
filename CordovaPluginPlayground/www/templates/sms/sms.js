(function(){
    'use strick';
    angular.module('starter').controller('SmsController',['$cordovaSms','$scope',SmsController]);



    function SmsController($cordovaSms,$scope){

        var vm = this;

        var options = {};



        vm.sendMessage = function(){
            console.log(vm.phonenumber+" : "+ vm.smsContent);
            $cordovaSms
                .send(vm.phonenumber, vm.smsContent, options)
                .then(function() {
                // Success! SMS was sent
            }, function(error) {
                // An error occurred
            });
        };

    };
})();

