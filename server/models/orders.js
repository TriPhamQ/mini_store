console.log('The Orders Model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
	product: {type: Array,},
	customer_name: {type: String},
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'}
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
