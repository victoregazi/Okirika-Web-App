const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions')

const ProductSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true,
        unique: true
    },
    desc: { 
        type: String,
        required: true,
    }, 
    image: {
        type: String,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},
    { timestamp: true, }
);

module.exports = mongoose.model("Product", ProductSchema)