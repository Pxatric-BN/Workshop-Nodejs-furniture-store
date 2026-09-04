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
    const products = await productSchema.find({product_status: true})

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

    return res.status(200).json({
      status: 200,
      message: 'Product Update Successfully',
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
      return res.status(400).json({
        status: 400,
        message: 'Product not found',
        data: null
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Product Delete Successfully',
      data: {
        product_id: product._id,
        product_name: product.product_name,
        product_status: product.product_status
      }
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

//[GET] /api/v1/product/:id
router.get('/:id',async function (req, res,) {
  try {
    const { id } = req.params
    const products = await productSchema.findOne({_id: id,})

    res.status(200).json({
      status: 200,
      message: 'success',
      data: products
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
