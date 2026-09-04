const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    products: [
      {
        product_id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1
        },

        price: {
          type: Number,
          required: true
        }
      }
    ],

    total_price: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);