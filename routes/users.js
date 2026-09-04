const express = require('express');
const router = express.Router();
const userSchema = require('../models/users.model')
const {authToken, isAdmin} = require('../middleware/auth.middleware.js')
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
      message: 'Internal server error',
      data: null
    })
  }
})

router.put('/:id/approve',[authToken,isAdmin], async function (req, res, next) {
    try {
        const user = await userSchema.findByIdAndUpdate(
            req.params.id,
            { isApprove: true },
            { new: true }
        );

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'User not found',
                data: null
            });
        }

        return res.status(200).json({
            status: 200,
            message: 'User approved successfully',
            data: {
                _id: user._id,
                username: user.username,
                isApprove: user.isApprove
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: null
        });
    }
});

module.exports = router;

