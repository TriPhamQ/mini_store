console.log('Server Products Controller');

var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function () {
	return {
		create: function (req, res) {
			console.log("Creating...");
			console.log(req.body);
			Product.create(req.body, function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Success!");
					res.json(result);
				}
			});
		},
		remove: function (req, res) {

		},
		getall: function (req, res) {
			console.log("Getting all products...");
			Product.find({}, function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Got Back DB");
					res.json(result);
				}
			})
		}
	}
})();
