console.log('The Orders Model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
	quantity: {type: Number, required: true},
	_product: {type: Schema.Types.ObjectId, ref: 'Product'},
	_customer: {type: Schema.Types.ObjectId, ref: 'Customer'}
}, {timestamps: true});

mongoose.model('Order', OrderSchema);
