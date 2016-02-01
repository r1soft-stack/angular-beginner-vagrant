(function (jQuery) {

    'use strict';

    var ngBeginner = angular
        .module('ngBeginner', [
            'ngRoute'
        ])

    ngBeginner.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html'
            }).
            when('/scope-hierarchy', {
                templateUrl: 'views/scopeHierarchy.html'
            }).
            when('/two-way-data-binding', {
                templateUrl: 'views/dataBinding.html'
            }).
            when('/services', {
                templateUrl: 'views/services.html'
            }).
            otherwise({
                redirectTo: '/home',
                templateUrl: 'views/home.html'
            });
        }]);
})(jQuery);