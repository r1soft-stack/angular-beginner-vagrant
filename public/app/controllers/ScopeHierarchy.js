(function () {

    'use strict';

    angular
        .module('ngBeginner')
        .controller('GreetController', greetController)
        .controller('ListController', ['$scope', function($scope) {
            $scope.names = ['Igor', 'Misko', 'Vojta'];
        }])
        .controller('NameController', ['$scope', function($scope) {
            $scope.name = '';
        }]);

    function greetController($rootScope, $scope){
        $scope.name = 'World';
        $rootScope.department = 'Angular';
    }
})()