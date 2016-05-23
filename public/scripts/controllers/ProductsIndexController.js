angular
  .module('shopping')
  .controller('ProductsIndexController', ProductsIndexController);

ProductsIndexController.$inject = ['$http'];
function ProductsIndexController ($http) {
  var vm = this;
  vm.newProduct = {};
  vm.newProduct = {
    name: 'Viva Hate',
    artistName: 'Morrissey'
  };

  $http({
    method: 'GET',
    url: '/api/products'
  }).then(function successCallback(response) {
    vm.products = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createProduct = function () {
    $http({
      method: 'POST',
      url: '/api/products',
      data: vm.newProduct,
    }).then(function successCallback(response) {
      vm.products.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.editProduct = function (product) {
    $http({
      method: 'PUT',
      url: '/api/products/'+product._id,
      data: product
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteProduct = function (product) {
    $http({
      method: 'DELETE',
      url: '/api/products/'+ product._id
    }).then(function successCallback(json) {
      var index = vm.products.indexOf(product);
      vm.products.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

}
