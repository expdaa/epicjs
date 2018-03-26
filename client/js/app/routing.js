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
                controllerAs: 'LandingController',
                resolve: {
                    dbIdsResource : function(DataService){
                        return DataService.getAllDBIds();
                    }
                }
            })

            .when('/result/lm/:dbId', {
                templateUrl: '/public/js/app/result/lm/lm.tpl.html',
                controller: 'LMController',
                controllerAs: 'LMController',
                resolve:
                    {
                        lmResource: ['$route', 'DataService', function ($route, DataService) {
                            return DataService.getLm($route.current.params.dbId);
                        }]
                    }
            })


            .otherwise(
                { redirectTo: '/' }
            );


    };


})();

