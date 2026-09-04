const express = require('express');
const router = express.Router();
const orderSchema = require('../models/orders.model.js')
const productSchema = require('../models/products.model.js')
const {authToken, isAdmin} = require('../middleware/auth.middleware.js')

// [GET] /api/v1/orders 
router.get('/', async function (req, res, next) {
  try {
    const orders = await orderSchema
    .find({})
    .populate('user_id', 'first_name');

    res.status(200).json({
      status: 200,
      message: 'success',
      data: orders
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: null
    })
  }
})

// [POST] /api/v1/orders
router.post('/', [authToken], async function (req, res, next) {
  try {
    const { products } = req.body;

    
    if (!products || products.length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Products are required',
        data: null
      });
    }

    let orderProducts = [];
    let totalPrice = 0;

    for (const item of products) {
        const product = await productSchema.findOne({
                _id: item.product_id,
                product_status: true
            });
            if (!product) {
                return res.status(400).json({
                status: 400,
                message: 'Product not found',
                data: null
                });
            }
            if (product.product_stock < item.quantity) {
                return res.status(400).json({
                status: 400,
                message: 'Product stock is not enough',
                data: null
                });
            }

      // เก็บข้อมูลลง Order
      orderProducts.push({
        product_id: product._id,
        quantity: item.quantity,
        price: product.product_price
      });

      // คำนวณราคา
      totalPrice += product.product_price * item.quantity;

      // ลด Stock
      product.product_stock -= item.quantity;
      await product.save();
    }

    // สร้าง Order
    const order = await orderSchema.create({
        user_id: req.user.userId,
        products: orderProducts,
        total_price: totalPrice
    });

    return res.status(201).json({
      status: 201,
      message: 'Order Created',
      data: order
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: 500,
      message: 'Internal server error',
      data: null
    });
  }
});


module.exports = router;

