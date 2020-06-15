angular.module('userAuth')
  .factory('loginService', ['$http', function($http){
      var service = {};

      service.loginUser = function(loginDetails){

        return $http.post('http://127.0.0.1:3000/api/login', {loginDetails})
              .then(function(response){
                  if(response.data.message == 'success'){
                    alert('successfully logged in')
                  }
              })
      }

      return service;
  }])