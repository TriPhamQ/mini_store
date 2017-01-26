myApp.controller('ordersController', ['$scope', 'ordersFactory', 'customersFactory', 'productsFactory', '$filter', function ($scope, ordersFactory, customersFactory, productsFactory, $filter) {
    console.log('ordersController loaded');

    var index = function () {
		customersFactory.getall(function (output) {
    		$scope.customers = output.data;
    		console.log("All customers:", $scope.customers);
    	});
		productsFactory.getall(function (output) {
    		$scope.products = output.data;
    		console.log("All products:", $scope.products);
    	});
        ordersFactory.getall(function (output) {
    		$scope.orders = output.data;
    		console.log("All orders:", $scope.orders);
    	});
    };

    index();

	$scope.create = function () {
		console.log("New Order to be created:", $scope.newOrder);
		ordersFactory.create($scope.newOrder, function () {
            index();
		})
		$scope.newOrder = {};
	};
}]);
