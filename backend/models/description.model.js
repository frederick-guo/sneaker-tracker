const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
    product: { type: String, required: true },
    comments: { type: String, required: true },
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    date: { type: Date, required: true },
}, {
    timestamps: true,
});
  
const Description = mongoose.model('Description', descriptionSchema);
  
module.exports = Description;