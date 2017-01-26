myApp.controller('productsController', ['$scope', 'productsFactory', '$filter', function ($scope, productsFactory, $filter) {
    console.log('productsController loaded');
    $scope.products = [];
    $scope.pagesize = 15;
    $scope.currentpage = 0;
    $scope.q = '';
    $scope.pages = [];
    var index = function () {
        productsFactory.getall(function (output) {
    		$scope.products = output.data;
    		console.log("All products:", $scope.products);
            $scope.numberOfPages = Math.ceil(output.data.length/$scope.pagesize);
            // return $filter('filter')($scope.products, $scope.q)
            for (var i = 0; i < $scope.numberOfPages; i++) {
                $scope.pages[i] = i+1;
            };
    	});
    };
    index();
	$scope.create = function () {
		console.log($scope.newProduct);
		productsFactory.create($scope.newProduct, function () {
            index();
		})
		$scope.newProduct = {};
	};
}]);
