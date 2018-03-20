(function () {


    angular
        .module('epicJS', ['ngRoute','ngMaterial','chart.js','plotly'])
        .config(['$locationProvider', function ($locationProvider) {

            $locationProvider.hashPrefix('');

            // $mdThemingProvider.theme('indigo')
            //     .primaryPalette('blue')
            //     .accentPalette('pink');
        }]);



})();