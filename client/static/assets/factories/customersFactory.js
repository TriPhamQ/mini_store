myApp.factory('customersFactory', ['$http', function ($http) {
	console.log('Customers Factory');
	var factory = {};

	factory.getall = function (callback) {
		console.log("Let's get all the customers...");
		$http.get('/customers').then(function (output) {
			callback(output);
		});
	};

	factory.create = function (newCustomer, callback) {
		console.log("Let's create a customer");
		console.log(newCustomer);
		$http.post('/customers/create', newCustomer).then(function (output) {
			console.log("Output:", output);
			callback(output);
		});
	};
	
	return factory;
}]);
