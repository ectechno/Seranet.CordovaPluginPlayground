(function(){
    'use strick';
    angular.module('starter').controller('ContactsController',['$cordovaContacts',ContactsController]);

    console.log("work");

    function ContactsController($cordovaContacts){

        var vm = this;

        vm.getContacts = function(){
            $cordovaContacts.find({filter: ''}).then(function(result) {
                vm.allContacts = result;
            }, function(error) {
                console.log("ERROR: " + error);
            });
        };


        vm.createContact = function(){
            $cordovaContacts.save({"displayName": "Steve Jobs"}).then(function(result) {
                console.log(JSON.stringify(result));
            }, function(error) {
                console.log(error);
            });
        };


        vm.removeContact = function(){
            $scope.removeContact = function() {
                $cordovaContacts.remove({"displayName": "Steve Jobs"}).then(function(result) {
                    console.log(JSON.stringify(result));
                }, function(error) {
                    console.log(error);
                });
            }
        };

        vm.getContacts();



    };
})();
