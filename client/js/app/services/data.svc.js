'use strict';
(function () {

    angular
        .module("epicJS")
        .factory("DataService", DataService);

    DataService.$inject = ['$http','$window'];


    function DataService($http,$window) {

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

        dataFactory.persistTplData = function (dataToPersist) {

            $http({
                method: 'POST',
                url: '/persistlm',
                data: dataToPersist,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(
                function success(response) {
                    console.log(response.data.msg + " " + response.data.documentId);
                    $window.location.href="#/result/lm/"+response.data.documentId;
                },
                function error(response) {

                }
            );

            return "success";
        }




        return dataFactory;

    }




})();