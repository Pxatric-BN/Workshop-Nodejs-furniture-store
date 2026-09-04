const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        product_name: {
            type: String,
            required: true
        },

        product_description: {
            type: String,
            required: true
        },

        product_price: {
            type: Number,
            required: true
        },

        product_stock: {
            type: Number,
            required: true
        },
        product_status:{
             type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);