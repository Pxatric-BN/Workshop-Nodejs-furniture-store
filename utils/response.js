const success = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: statusCode,
        message,
        data
    });
};

const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        status: statusCode,
        message,
        data: null
    });
};

module.exports = {
    success,
    errorResponse
};