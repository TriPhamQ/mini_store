var myApp = angular.module('app', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: ''
	})
	.when('/orders', {
		templateUrl: 'partials/orders.html',
		controller: ''
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html',
		controller: ''
	})
	.when('/products', {
		templateUrl: 'partials/products.html',
		controller: ''
	})
	.otherwise({
		redirectTo: '/'
	});
});
