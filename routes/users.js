const express = require('express');
const router = express.Router();
const userSchema = require('../models/users.model')
const {authToken, isAdmin} = require('../middleware/auth.middleware.js')
const { success, errorResponse } = require('../utils/response')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await userSchema.find({})

    return  success(res, 200, "success", users);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
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
            return errorResponse(res, 400, "User not found");
        }

        return success(res, 200, "User approved successfully",{
            _id: user._id,
            username: user.username,
            isApprove: user.isApprove
        })

    } catch (error) {
        return errorResponse(res, 500, "Internal server error");
    }
});

module.exports = router;

