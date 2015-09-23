(function () {
    'use strick';
    angular.module('starter').controller('GlobalizationController', ['$cordovaGlobalization', GlobalizationController]);

    console.log("work");

    function GlobalizationController($cordovaGlobalization) {

        var vm = this;

        vm.get_Language = function () {

            $cordovaGlobalization.getPreferredLanguage().then(
                function (result) {
                    vm.language = result;
                },
                function (error) {
                    // error
                });
        };


        vm.get_LocaleName = function () {
            $cordovaGlobalization.getLocaleName().then(
                function (result) {
                    vm.localName = result;
                },
                function (error) {
                    // error
                });
        };

        vm.get_FirstDayOfWeek = function () {
            $cordovaGlobalization.getFirstDayOfWeek().then(
                function (result) {
                    vm.fristDay = result;
                },
                function (error) {
                    // error
                });

        }
        vm.get_Language();
        vm.get_FirstDayOfWeek();
        vm.get_LocaleName();

    };
})();
