(function () {


    angular
        .module('epicJS', ['ngRoute','ngMaterial','chart.js'])
        .config(['$locationProvider', function ($locationProvider) {

            $locationProvider.hashPrefix('');

            // $mdThemingProvider.theme('indigo')
            //     .primaryPalette('blue')
            //     .accentPalette('pink');
        }]);



})();