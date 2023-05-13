const mongoose = require('mongoose');

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Product = model('Product', productSchema);

module.exports = Product;