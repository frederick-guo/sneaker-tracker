const mongoose = require('mongoose');

const Schema = mongoos.Schema;

const productSchema = new Schema({
    product: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},   {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = User;