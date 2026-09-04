const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')

const userSchema = require('../models/users.model');

// [POST]/api/v1/register
router.post('/register', async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, age, email } = req.body

    if (!username || !password) {
            return res.status(400).json({
                status: 400,
                message: 'Username and password are required',
                data: null
            });
        }

    const existingUser = await userSchema.findOne({ username });

        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: 'Username already exists',
                data: null
            });
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

    return res.status(201).json({
        status: 201,
        message: 'Register successfully',
        data: data
    });
  } catch (error) {
   
  }
})

// [POST] /api/v1/login
router.post('/login', async function (req, res, next) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                status: 400,
                message: 'Username and password are required',
                data: null
            });
        }

        const user = await userSchema.findOne({ username });

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid username or password',
                data: null
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid username or password',
                data: null
            });
        }

        // Check approval
        if (!user.isApprove) {
            return res.status(401).json({
                status: 401,
                message: 'Your account is waiting for approval',
                data: null
            });
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

        return res.status(200).json({
            status: 200,
            message: 'Login successfully',
            data: {
                token,
                _id: user._id,
                username: user.username,
                role: user.role
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


