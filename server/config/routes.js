console.log("Routes...");

module.exports = function(app){
	app.get('/', function () {
		console.log("Hi");
	});
};
