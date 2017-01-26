myApp.factory('productsFactory', ['$http', function ($http) {
	console.log('Products Factory');
	var factory = {};

	factory.getall = function (callback) {
		console.log("Let's get all the products...");
		$http.get('/products').then(function (output) {
			callback(output);
		});
	};

	factory.create = function (newProduct, callback) {
		console.log("Let's create a product");
		console.log(newProduct);
		$http.post('/products/create', newProduct).then(function (output) {
			console.log("Output:", output);
			callback(output);
		});
	};

	factory.getone = function (id, callback) {
		$http.get('/products/'+id).then(function (output) {
			callback(output);
		})
	};

	return factory;
}]);
