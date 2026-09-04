const jwt = require('jsonwebtoken');
const { success, errorResponse } = require('../utils/response')

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return errorResponse(res, 401, "Access Denied: No Token Provided!" );
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '1234');
        req.user = decoded; 
        next();
    } catch (error) {
        return errorResponse(res, 403, "Invalid Token");
    }
};

const isAdmin = (req, res, next) => {
     if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return errorResponse(res, 403, "Access Denied: Admin role required");
    }
};


module.exports = { authToken, isAdmin };