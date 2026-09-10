const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(
            `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
        );

        console.log("Connect DB Success");
    } catch (error) {
        console.error("Connect DB Failed:", error);
        process.exit(1);
    }
}

module.exports = connectDB;