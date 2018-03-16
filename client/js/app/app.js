(function () {


    angular
        .module('epicJS', ['ngRoute','ngMaterial'])
        .config(['$locationProvider', function ($locationProvider) {

            $locationProvider.hashPrefix('');

            // $mdThemingProvider.theme('indigo')
            //     .primaryPalette('blue')
            //     .accentPalette('pink');
        }]);



})();