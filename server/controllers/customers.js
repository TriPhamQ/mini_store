console.log('Server Customers Controller');

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function () {
	return {
		create: function (req, res) {
			console.log("Creating...");
			console.log(req.body);
			Customer.create(req.body, function (err, result) {
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
			Customer.find({}, function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Got Back DB");
					res.json(result);
				}
			})
		},
		getone: function (req, res) {
			console.log("Getting one customer...");
			console.log(req.params.id);
			Customer.find({_id: req.params.id}, function (err, result) {
				if (err) {
					console.log("Something went wrong with DB");
				}
				else {
					console.log("Got Back Customer DB", result);
					res.json(result);
				}
			})
		}
	}
})();
