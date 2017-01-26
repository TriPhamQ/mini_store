console.log("Routes...");
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');
var customers = require('../controllers/customers.js');
module.exports = function(app){
	app.post('/products/create', function (req, res) {
		products.create(req, res);
	});
	app.get('/products', function (req, res) {
		products.getall(req, res);
	});
	app.get('/products/:id', function (req, res) {
		products.getone(req, res);
	});
	app.post('/customers/create', function (req, res) {
		customers.create(req, res);
	});
	app.get('/customers', function (req, res) {
		customers.getall(req, res);
	});
	app.get('/customers/:id', function (req, res) {
		customers.getone(req, res);
	});
	app.post('/orders/create', function (req, res) {
		orders.create(req, res);
	});
	app.get('/orders', function (req, res) {
		orders.getall(req, res);
	});
};
