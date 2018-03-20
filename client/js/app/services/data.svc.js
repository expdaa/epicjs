'use strict';
(function () {

    angular
        .module("epicJS")
        .factory("DataService", DataService);

    DataService.$inject = ['$http'];


    function DataService($http) {

        var dataFactory = {};

        dataFactory.getLm = function () {

            return $http({
                method: 'GET',
                url: '/lm',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }

            }).then(function successCallback(response) {

                return response.data;

            }, function errorCallback(response) {
                return response.data;

            });

        };




        return dataFactory;

    }




})();