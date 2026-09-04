const express = require('express');
const router = express.Router();
const orderSchema = require('../models/orders.model.js')
const { success, errorResponse } = require('../utils/response')


// [GET] /api/v1/orders 
router.get('/', async function (req, res, next) {
  try {
    const orders = await orderSchema
    .find({})
    .populate('user_id', 'first_name');

    return success(res, 200, "success", orders);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error",);
  }
})
module.exports = router;

