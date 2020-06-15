angular.module('userAuth')
.factory('registerService', ['$http', function($http){
    var service = {};

    service.saveUser = function(userDetails){

        return $http.post('http://127.0.0.1:3000/api/signup', {userDetails})
             .then(function(response){
                 if(response.data.status == 'Success'){
                     alert('Successfully registered!! Login to continue ')
                 }
             }).error('Could not process')
           
    }
    return service;
}])