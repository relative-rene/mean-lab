/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */
angular
  .module('shopping', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/products',
      controllerAs: 'productsIndexCtrl',
      controller: 'ProductsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/products-show',
      controllerAs: 'productsShowCtrl',
      controller: 'ProductsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
