var myApp = angular.module('userAuth',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'view/register.html',
        controller:'registerController'
    })
    .when('/login', {
        templateUrl:'view/login.html',
        controller:'loginController'
    })
    .otherwise({ redirectTo: '/register' });
}])


