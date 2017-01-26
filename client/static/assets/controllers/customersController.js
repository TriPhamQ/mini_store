myApp.controller('customersController', ['$scope', 'customersFactory', function ($scope, customersFactory) {
    console.log('customersController loaded');

    var index = function () {
        customersFactory.getall(function (output) {
    		$scope.customers = output.data;
    		console.log("All customers:", $scope.customers);
            $scope.numberOfPages = Math.ceil(output.data.length/$scope.pagesize);
            // return $filter('filter')($scope.customers, $scope.q)
            for (var i = 0; i < $scope.numberOfPages; i++) {
                $scope.pages[i] = i+1;
            };
    	});
    };

    index();
	
	$scope.create = function () {
		console.log("New Customer to be created:", $scope.newCustomer);
		customersFactory.create($scope.newCustomer, function () {
            index();
		})
		$scope.newCustomer = {};
	};
}]);
