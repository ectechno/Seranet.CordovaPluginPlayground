(function(){
    'use strick';
    angular.module('starter').controller('CaptureController',['$cordovaCapture',CaptureController]);

    console.log("work");

    function CaptureController($cordovaCapture){

        var vm = this;

        vm.audioCapture = function() {
            var options = { limit: 3, duration: 10 };

            $cordovaCapture.captureAudio(options).then(function(audioData) {
                console.log("audio");
                captureSuccess(audioData);
            }, function(err) {
                // An error occurred. Show a message to the user
            });
        }

        vm.videoCapture = function() {
            var options = { limit: 3, duration: 15 };

            $cordovaCapture.captureVideo(options).then(function(videoData) {
                console.log("video");
                captureSuccess(videoData);
             }, function(err) {
                // An error occurred. Show a message to the user
            });
        }

        vm.imageCapture = function() {
            var options = { limit: 3 };

            $cordovaCapture.captureImage(options).then(function(imageData) {
                console.log("image");
                captureSuccess(imageData);
            }, function(err) {
                // An error occurred. Show a message to the user
            });
        }

        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // You can do anything with files
            }
        };

    };
})();
