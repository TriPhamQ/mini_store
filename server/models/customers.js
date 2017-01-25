console.log('The Customers Model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new mongoose.Schema({
	name: {type: String, required: true},
	orders: {type: Schema.Types.ObjectId, ref: 'Order'}
}, {timestamps: true});

mongoose.model('Customer', CustomerSchema);
