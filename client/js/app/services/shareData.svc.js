'use strict';
(function () {

    angular
        .module("epicJS")
        .factory("ShareDataService", ShareDataService);

    ShareDataService.$inject = [];


    function ShareDataService() {

        var fileFactory = {},
            storage = {};

        fileFactory.saveData = function (data) {

            storage = data;

        };


        fileFactory.loadData = function (data) {

            console.log("Data in storage", storage);
 

        };


        return fileFactory;

    }




})();