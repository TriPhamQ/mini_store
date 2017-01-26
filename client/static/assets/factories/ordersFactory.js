myApp.factory('ordersFactory', ['$http', function ($http) {
	console.log('Orders Factory');
	var factory = {};

	factory.getall = function (callback) {
		console.log("Let's get all the orders...");
		$http.get('/orders').then(function (output) {
			callback(output);
		});
	};

	factory.create = function (newCustomer, callback) {
		console.log("Let's create a order");
		console.log(newCustomer);
		$http.post('/orders/create', newCustomer).then(function (output) {
		// 	console.log("Output:", output);
			callback(output);
		});
	};

	return factory;
}]);
