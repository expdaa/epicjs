'use strict';
(function () {

    angular
        .module("epicJS")
        .factory("FileService", FileService);

        FileService.$inject = ['$http'];


    function FileService($http) {

        var fileFactory = {};

        fileFactory.getTemplate = function (tplName) {

            console.log("still ok")

            // return $http({
            //     method: 'GET',
            //     url: '/templates/' + tplName,
            //     headers: {
            //         'Content-Type': 'application/json; charset=utf-8'
            //     }

            // }).then(function successCallback(response) {

            //     return response.data;

            // }, function errorCallback(response) {
            //     return response.data;

            // });

        };




        return fileFactory;

    }




})();