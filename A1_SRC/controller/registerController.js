angular.module('userAuth')
.controller('registerController', ['$scope','registerService', function($scope, registerService){
    $scope.master = {};

    $scope.saveUserData = function(user){
        $scope.master = angular.copy(user);
        registerService.saveUser($scope.master)
    }
}])