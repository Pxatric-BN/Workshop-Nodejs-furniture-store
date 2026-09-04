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




module.exports = router;

