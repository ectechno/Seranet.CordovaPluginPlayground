// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ngCordova', 'ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('camera', {
            url: '/camera',
            templateUrl: 'templates/camera/camera.html'
        })
        .state('dialogs', {
            url: '/dialogs',
            templateUrl: 'templates/dialogs/dialogs.html'
        })
        .state('vibration', {
            url: '/vibration',
            templateUrl: 'templates/vibrate/vibration.html'
        })
        .state('network', {
            url: '/network',
            templateUrl: 'templates/network/network.html'
        })
        .state('device', {
            url: '/device',
            templateUrl: 'templates/device/device.html'
        })
        .state('barcode', {
            url: '/barcode',
            templateUrl: 'templates/barcode/barcode.html'
        })
        .state('flashlight', {
            url: '/flashlight',
            templateUrl: 'templates/flashlight/flashlight.html'
        })
        .state('geolocation', {
            url: '/geolocation',
            templateUrl: 'templates/geolocation/geolocation.html'
        })
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'templates/contacts/contacts.html'
        })
        .state('battery', {
            url: '/battery',
            templateUrl: 'templates/battery/battery.html'
        })
        .state('capture', {
            url: '/capture',
            templateUrl: 'templates/capture/capture.html'
        })
        .state('globalization', {
            url: '/globalization',
            templateUrl: 'templates/globalization/globalization.html'
        })
        .state('imagepicker', {
            url: '/imagepicker',
            templateUrl: 'templates/imagepicker/imagepicker.html'
        })
        .state('sms', {
            url: '/sms',
            templateUrl: 'templates/sms/sms.html'
        })

    $urlRouterProvider.otherwise('/home');
})
