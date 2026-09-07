const mongoose = require('mongoose');
const Product = require('../models/products.model');
const User = require('../models/users.model')

const user = [
   {
    product_name: 'Oak Coffee Table',
    product_description: 'Elegant oak coffee table for modern living rooms',
    product_price: 6500,
    product_stock: 12,
    product_status: 'true'
},
{
    product_name: 'Classic Bookshelf',
    product_description: 'Classic wooden bookshelf with multiple storage shelves',
    product_price: 4800,
    product_stock: 15,
    product_status: 'true'
},
{
    product_name: 'Modern Office Desk',
    product_description: 'Spacious modern desk for home and office use',
    product_price: 7200,
    product_stock: 8,
    product_status: 'true'
},
{
    product_name: 'Comfort Lounge Chair',
    product_description: 'Comfortable lounge chair with soft fabric upholstery',
    product_price: 5600,
    product_stock: 10,
    product_status: 'true'
},
{
    product_name: 'Wooden Bed Frame',
    product_description: 'Durable wooden bed frame with a minimalist design',
    product_price: 14500,
    product_stock: 6,
    product_status: 'true'
},
{
    product_name: 'Minimal Nightstand',
    product_description: 'Compact nightstand with a clean minimalist design',
    product_price: 3200,
    product_stock: 18,
    product_status: 'true'
},
{
    product_name: 'Modern TV Cabinet',
    product_description: 'Stylish TV cabinet with spacious storage compartments',
    product_price: 8500,
    product_stock: 7,
    product_status: 'true'
},
{
    product_name: 'Dining Chair Set',
    product_description: 'Set of four comfortable wooden dining chairs',
    product_price: 7600,
    product_stock: 9,
    product_status: 'true'
},
{
    product_name: 'Minimal Wardrobe',
    product_description: 'Spacious wardrobe with a simple modern design',
    product_price: 11900,
    product_stock: 5,
    product_status: 'true'
},
{
    product_name: 'Wooden Side Table',
    product_description: 'Small wooden side table suitable for living rooms and bedrooms',
    product_price: 2900,
    product_stock: 14,
    product_status: 'true'
}
];

const seedProducts = async () => {
    try {
        await User.deleteMany({});

        await User.insertMany(user);

        console.log('Products Seed Successfully');
    } catch (error) {
        console.error('Seed Error:', error);
    }
};

module.exports = seedProducts;