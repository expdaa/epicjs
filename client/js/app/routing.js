(function () {

    angular
        .module('epicJS')
        .config(MainRouting);


    function MainRouting($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl  : '/public/js/app/landing/landing.tpl.html',
                controller   : 'LandingController',
                controllerAs : 'LandingController'
            })


            .otherwise(
                {redirectTo: '/'}
            );


    };


})();

