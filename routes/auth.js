const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')
const { success, errorResponse } = require('../utils/response')
const userSchema = require('../models/users.model');

// [POST]/api/v1/register
router.post('/register', async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, age, email } = req.body

    if (!username || !password) {
            return errorResponse(res, 400, "Username and Password are required");
        }

    const existingUser = await userSchema.findOne({ username });

        if (existingUser) {
            return errorResponse(res,400,"Username already exists");
        }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userSchema.create({
        username,
        password: hashedPassword,
        first_name,
        last_name,
        age,
        email,
    });

    const data = {
        _id: user._id,
        username: user.username,
        firstname: user.first_name,
        lastname: user.last_name,
        age: user.age,
        email: user.email,
        role: user.role
    };

    return success(res, 201, "register successfully", data);

  } catch (error) {
    return errorResponse(res, 500, "Internal server error");
  }
})

// [POST] /api/v1/login
router.post('/login', async function (req, res, next) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return errorResponse(res, 400, "Username and password are required");
        }

        const user = await userSchema.findOne({ username });

        if (!user) {
            return errorResponse(res, 400,"Invalid username or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return errorResponse(res, 400, "Invalid username or password");
        }

        if (!user.isApprove) {
            return errorResponse(res, 401,"Your account is waiting for approval");
        }

        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        );

        return success(res, 200, 'Login successfully', {
            token,
            _id: user._id,
            username: user.username,
            role: user.role
        });

    } catch (error) {
        return errorResponse(res, 500, "Internal Server error")
    }
});

module.exports = router;


