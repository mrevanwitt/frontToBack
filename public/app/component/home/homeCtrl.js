angular.module('app')
  .controller('homeCtrl', function($scope, homeServ){

    $scope.products = [];

    $scope.getAllProducts = function() {
      homeServ.getAllProducts()
        .then(function(response) {
          $scope.products = response;
          console.log(response);
        });
    };

    $scope.deleteProduct = function(id) {
      homeServ.deleteProduct(id)
        .then(function(response) {
          $scope.products = response;
          //console.log("delete ctrl " + response);
        });
    };

    $scope.addProduct = function(newProduct) {
      homeServ.addProduct(newProduct)
        .then(function(response) {
          
        })
    };
});
