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
            for (var i = 0; i < $scope.orders.length; i++) {
                $scope.orders[i].product_name = "";
                $scope.orders[i].customer_name = "";
            };
            var i = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                productsFactory.getone($scope.orders[i]._product, function (output) {
                    i--;
                    // console.log(output.data[0].name);
                    $scope.orders[i].product_name = output.data[0].name;
                });
                customersFactory.getone($scope.orders[i]._customer, function (output) {
                    // console.log(output.data[0].name);
                    $scope.orders[i].customer_name = output.data[0].name;
                });
            };
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
