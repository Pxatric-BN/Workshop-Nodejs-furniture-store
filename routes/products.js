const express = require('express');
const router = express.Router();
const productSchema = require('../models/products.model')
const orderSchema = require('../models/orders.model.js')
const multer = require('multer')
const {authToken, isAdmin} = require('../middleware/auth.middleware.js')
const { success, errorResponse } = require('../utils/response')


const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './public/images')
  },
  filename: function (req,file, cb) {
    cb(null, new Date().getTime() + "_" + file.originalname)
  }
})

const upload = multer({ storage: storage})
// [GET] /api/v1/products
router.get('/',async function (req, res, next) {
  try {
    const products = await productSchema.find({product_status: true})

    return success(res, 200, "success", products);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
})

//[POST] /api/v1/products
router.post('/',[authToken, isAdmin, upload.single("image")],async function (req, res, next) {
  try {
    const { product_name, product_description, product_price,product_stock } = req.body

    const product = await productSchema.create({
      product_name,
      product_description,
      product_price,
      product_stock,
    });

    const data = {
      product_name: product.product_name,
      product_description: product.product_description,
      product_price: product.product_price,
      stock: product.product_stock,
    };

    return success(res, 201, "Product Created", data);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
})

//[PUT] /api/v1/products/:id
router.put('/:id',[authToken, isAdmin, upload.single("image")],async function (req, res, next) {
  try {
    const { id } = req.params
    const { product_name, product_description, product_price,product_stock } = req.body

    const product = await productSchema.findByIdAndUpdate(id,{
      product_name,
      product_description,
      product_price,
      product_stock,
    },{new: true});

    const data = {
      product_name: product.product_name,
      product_description: product.product_description,
      product_price: product.product_price,
      stock: product.product_stock,
    };

    return success(res, 200, "Product Update Successfully", data);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error")
  }
})

//[DELETE] /api/v1/products/:id
router.delete('/:id', [authToken, isAdmin], async function (req, res, next) {
  try {
    const { id } = req.params;

    const product = await productSchema.findByIdAndUpdate(
      id,
      {
        product_status: false
      },
      {
        new: true
      }
    );

    if (!product) {
      return errorResponse(res, 400, "Product not found");
    }
      return success(res, 200, "Product Delete Successfully", {
        product_id: product._id,
        product_name: product.product_name,
        product_status: product.product_status
    })
  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
});

//[GET] /api/v1/product/:id
router.get('/:id',async function (req, res,) {
  try {
    const { id } = req.params
    const products = await productSchema.findOne({_id: id,})

    return success(res, 200, "success", products);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
})

//[GET] /api/v1/products/:id/orders
router.get('/:id/orders', async function (req, res, next) {
  try {
    const { id } = req.params;

    const orders = await orderSchema.find({
      'products.product_id': id
    });

    return success(res, 200, "success", orders);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
});

//[POST] /apt/v1/prpducts/:id/orders
router.post('/:id/orders', [authToken], async function (req, res, next) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const product = await productSchema.findOne({
      _id: id,
      product_status: true
    });

    if (!product) {
      return errorResponse(res, 400, "Product not found");
    }

    if (quantity > product.product_stock) {
      return errorResponse(res, 400, "Order quantity exceeds product stock")
    }

    const order = await orderSchema.create({
      user_id: req.user.userId,
      products: [
        {
          product_id: product._id,
          quantity: quantity,
          price: product.product_price
        }
      ],
      total_price: product.product_price * quantity
    });


    product.product_stock -= quantity;

    await product.save();

    return success(res, 201, "Order Created", order);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
});

module.exports = router;
