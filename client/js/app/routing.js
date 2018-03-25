'use strict';
(function () {

    angular
        .module('epicJS')
        .config(MainRouting);


    function MainRouting($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '/public/js/app/landing/landing.tpl.html',
                controller: 'LandingController',
                controllerAs: 'LandingController'
            })

            .when('/result/lm/:dbId', {
                templateUrl: '/public/js/app/result/lm/lm.tpl.html',
                controller: 'LMController',
                controllerAs: 'LMController',
                resolve:
                    {
                        lmResource: function (DataService) {
                            return DataService.getLm();
                        }
                    }
            })


            .otherwise(
                { redirectTo: '/' }
            );


    };


})();

