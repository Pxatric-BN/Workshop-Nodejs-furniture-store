const express = require('express');
const router = express.Router();
const productSchema = require('../models/products.model')
const multer = require('multer')
const {authToken, isAdmin} = require('../middleware/auth.middleware.js')


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
    let products = await productSchema.find({})

    res.status(200).json({
      status: 200,
      message: 'success',
      data: products
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      message: 'error',
      data: null
    })
  }
})

//[Post] /api/v1/products
router.post('/',[isAdmin, authToken, upload.single("image")],async function (req, res, next) {
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

    return res.status(201).json({
      status: 201,
      message: 'Product Created',
      data: data
    });
  } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Internal server error',
        data: null
      });
  }
})

module.exports = router;
