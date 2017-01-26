myApp.filter('startFrom', function () {
	return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
myApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});
