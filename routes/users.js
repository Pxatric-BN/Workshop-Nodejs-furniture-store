var express = require('express');
var router = express.Router();
var userSchema = require('../models/users.model')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    let users = await userSchema.find({})

    res.status(200).json({
      status: 200,
      message: 'success',
      data: users
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

router.post('/')

module.exports = router;

