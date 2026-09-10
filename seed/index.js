require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("../db");
const seedProducts = require("./products.seed");

async function seed() {
    try {
        await connectDB();

        await seedProducts();

        await mongoose.connection.close();

        console.log("Seed Complete");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seed();