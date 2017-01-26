console.log('Server Orders Controller');

var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function () {
	return {
		create: function (req, res) {
			console.log("Creating...");
			console.log(req.body);
			var order = new Order({quantity: req.body.quantity, _customer: req.body.customer, _product: req.body.product})
			order.save(function (err) {
				if (err) {
					if (err) {
						console.log("Something went wrong with DB");
					}
					else {
						console.log("Success!");
						res.json(result);
					}
				}
			});
		},
		remove: function (req, res) {

		},
		getall: function (req, res) {
			console.log("Getting all products...");
			Order.find({}, function (err, result) {
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