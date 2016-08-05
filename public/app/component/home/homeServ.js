angular.module('app')
  .service('homeServ', function($http){
    this.getAllProducts = function() {
      return $http({
        method: 'GET',
        url: '/products',
      }).then(function(response) {
        return response.data;
      });
    };

    this.deleteProduct = function(id) {
      return $http({
        method: 'DELETE',
        url: '/products/' + id
      }).then(function(response) {
        console.log(response);
        return response.data;
      });
    };

    this.addProduct = function(newProduct) {
      return $http({
        method: 'POST',
        url: '/products',
        data: newProduct
      }).then(function(response) {
        
      });
    };
  });
