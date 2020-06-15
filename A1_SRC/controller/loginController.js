angular.module('userAuth')
.controller('loginController', ['$scope', 'loginService', function($scope, loginService){
    $scope.master = {};


    $scope.validateUser = function(user){
        $scope.master = angular.copy(user);
        console.log($scope.master)
        loginService.loginUser($scope.master)


    }
}])