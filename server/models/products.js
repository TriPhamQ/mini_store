console.log('The Products Model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
	name: {type: String, required: true},
	image: {type: String},
	description: {type: String},
	quantity: {type: Number},
	orders: {type: Schema.Types.ObjectId, ref: 'Order'}
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
