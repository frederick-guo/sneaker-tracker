const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    categoryName: { type: String, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Number, required: true},
    paidFor: {type: String, required: true},
    date: { type: Date, required: true },
}, {
    timestamps: true,
});
  
const Product = mongoose.model('Product', productSchema);
  
module.exports = Product;