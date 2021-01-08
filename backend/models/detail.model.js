const mongoose = require('mongoose');

const Schema = mongoos.Schema;

const detailSchema = new Schema({
    product: { type: String, required: true },
    description: { type: String, required: true },
    size: {type: Number, required: true},
    price: {type: Number, required: true},
    date: { type: Date, required: true },
}, {
    timestamps: true,
});
  
const Detail = mongoose.model('Detail', detailSchema);
  
module.exports = Detail;