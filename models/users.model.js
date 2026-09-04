const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isApprove: {
        type: Boolean,
        default: false
    }},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);

