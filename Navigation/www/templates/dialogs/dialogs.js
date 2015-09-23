(function(){
'use strick';
    angular.module('starter').controller('DialogsController',['$cordovaDialogs',DialogsController]);

    //console.log("work");

    function DialogsController($cordovaDialogs){

        var vm = this;

        vm.alert = function(){
            console.log("Alert");
            $cordovaDialogs.alert('Wow!', alertClosed, "Alert Title", "Dismiss");
        };

        function alertClosed(){
            $cordovaDialogs.alert("Alert was closed");
        }

        vm.confirm = function(){
            $cordovaDialogs.confirm('Are you sure?', confirmClosed, "Confirmation", ["Yes","No"]);
        };

        function confirmClosed(buttonIndex){
            $cordovaDialogs.alert("Buton Selected : " + buttonIndex);
        }

        vm.prompt = function(){
            $cordovaDialogs.prompt('Please Login', promptClosed, "Login", ["Login","Cancel"]);
        };

        function promptClosed(results){
            alert("You selected Buton number " + results.buttonIndex);
        }

        vm.beep = function(){
            $cordovaDialogs.beep(3);
        };

    };
})();

