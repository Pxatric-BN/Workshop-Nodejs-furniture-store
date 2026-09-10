const mongoose = require('mongoose');
const Product = require('../models/products.model');

const products = [
  // =========================
  // Living Room
  // =========================
  {
    product_name: 'Modern 3-Seater Sofa',
    product_description: 'Modern fabric sofa with comfortable seating.',
    product_price: 12900,
    product_stock: 15,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIrZarLo_f7iUHj3NCmDgPVufrLw9xg8Jrju7kTGvmQ&s=10'
  },
  {
    product_name: 'Minimalist Coffee Table',
    product_description: 'Simple wooden coffee table for modern living rooms.',
    product_price: 4900,
    product_stock: 20,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBHfzoxBIifiPAmFWvgnUyMj8TZKqp0J0t-gx5HqBgw&s=10'
  },
  {
    product_name: 'Lounge Armchair',
    product_description: 'Comfortable armchair for relaxing.',
    product_price: 6900,
    product_stock: 12,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFzsMwcSapUdzoQlLojDQgumzzlFLMFCU5QBMfzcJXg&s=10'
  },
  {
    product_name: 'Modern TV Cabinet',
    product_description: 'Modern wooden TV cabinet with storage.',
    product_price: 8900,
    product_stock: 10,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0SCNgOI-J2pfE3PTb93Dj66A0x1cPstsMg4IKeRDmQ&s=10'
  },
  {
    product_name: 'Round Side Table',
    product_description: 'Compact round side table.',
    product_price: 2900,
    product_stock: 18,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeyTkceEPgTEgtzjsgTuDx1ClS64M_NvBonAVuCE4Uw&s=10'
  },
  {
    product_name: 'Fabric Recliner Chair',
    product_description: 'Soft reclining chair for comfortable relaxation.',
    product_price: 9900,
    product_stock: 8,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Og2WsRiu61el3OHx235HRmzEnd2j9Yxz1t0hPbXLwQ&s=10'
  },
  {
    product_name: 'Wooden Bookshelf',
    product_description: 'Tall wooden bookshelf for books and decoration.',
    product_price: 7500,
    product_stock: 14,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1V9VLKJwf2sm6hhtcx6gATU8Y_gZIqpzH4i3E2C_iA&s=10'
  },
  {
    product_name: 'Modern Floor Lamp',
    product_description: 'Minimal floor lamp for living room decoration.',
    product_price: 3200,
    product_stock: 25,
    product_status: true,
    product_category: 'Living Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvBfZ8sztUXnE2GMccYOAwXq33w6gokVIQdQFUOyecg&s=10'
  },

  // =========================
  // Bedroom
  // =========================
  {
    product_name: 'King Size Bed',
    product_description: 'Modern king size wooden bed frame.',
    product_price: 18900,
    product_stock: 7,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSiUFtsltqghWPyusoJDzTq76hLPQxj4i_a1ZdzrPgg&s=10'
  },
  {
    product_name: 'Queen Size Bed',
    product_description: 'Comfortable queen size bed with wooden frame.',
    product_price: 15900,
    product_stock: 9,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dAEPK_0Q1kq9E3FRBFxN3X2SZEjaAZQOihl5KJbdYQ&s=10'
  },
  {
    product_name: 'Bedside Table',
    product_description: 'Compact bedside table with drawer.',
    product_price: 2800,
    product_stock: 20,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhEIYpdV3D3WC8dSbFNlOJaFRZbjOepdtr6wfCiNafg&s=10'
  },
  {
    product_name: 'Bedroom Wardrobe',
    product_description: 'Large wardrobe with multiple storage compartments.',
    product_price: 14900,
    product_stock: 6,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptAjBHIi_rRI3xCcmrkTOkPt1wXoK_GX5gc5ekwL5uw&s=10'
  },
  {
    product_name: 'Wooden Dresser',
    product_description: 'Classic wooden dresser with spacious drawers.',
    product_price: 7900,
    product_stock: 11,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS9nScD0PG_L3U4VYuPuel5ibqMsQtyVGVadvaug9mQ&s=10'
  },
  {
    product_name: 'Bedroom Bench',
    product_description: 'Elegant bench suitable for the end of the bed.',
    product_price: 4500,
    product_stock: 13,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht_b8MPBgO9nsVgThuO-R9xsk9pL2F3Owl_5LqXpH6A&s=10'
  },
  {
    product_name: 'Minimal Bedside Cabinet',
    product_description: 'Small minimalist cabinet for bedroom storage.',
    product_price: 3500,
    product_stock: 16,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdy3Ce8_-pI63HRTkpef8qT4eUH1FD312yA9TAhRdNw&s=10'
  },
  {
    product_name: 'Modern Dressing Table',
    product_description: 'Modern dressing table with storage drawers.',
    product_price: 8500,
    product_stock: 8,
    product_status: true,
    product_category: 'Bedroom',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyAS8K3mzl_KHqyp7p3tHoKe9edLt6NqztWYnSbJVMUQ&s=10'
  },

  // =========================
  // Dining Room
  // =========================
  {
    product_name: '6-Seater Dining Table',
    product_description: 'Large wooden dining table for six people.',
    product_price: 11900,
    product_stock: 10,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sP3nlxPKS9nRtgMQr7R2NCS3KLjoqmG-ciEl8c905Q&s=10'
  },
  {
    product_name: 'Dining Chair',
    product_description: 'Comfortable wooden dining chair.',
    product_price: 1900,
    product_stock: 30,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuN1wprnnDvXoEbM0olVZuN7TT0fz9qrkXcUZ-KYgg0g&s=10'
  },
  {
    product_name: 'Modern Dining Set',
    product_description: 'Dining table with matching chairs.',
    product_price: 16900,
    product_stock: 8,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZ-2z3ThvPaTcDG-Od1wpFiEZhoazn_tqVgwrGVwDzQ&s=10'
  },
  {
    product_name: 'Round Dining Table',
    product_description: 'Compact round dining table for small spaces.',
    product_price: 6900,
    product_stock: 12,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFZJvKyLIJM-JbjSke5V19V28WiWyqBTVF9tW2FKwQA&s=10'
  },
  {
    product_name: 'Bar Stool',
    product_description: 'Modern high stool for kitchen counters.',
    product_price: 2500,
    product_stock: 22,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5pADA5LWGqQ06DreC5J8xCiA5Q_fWgulue2xZzAV-Q&s=10'
  },
  {
    product_name: 'Kitchen Island Table',
    product_description: 'Wooden kitchen island with storage.',
    product_price: 10900,
    product_stock: 7,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJoa7mOPPb98cWp9L0W_IYB6BfgIg8EVg7B6Kk4bWIw&s=10'
  },
  {
    product_name: 'Wooden Dining Bench',
    product_description: 'Simple wooden bench for dining areas.',
    product_price: 3900,
    product_stock: 14,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBS9Yuwgpl2-kzI4s3L69-ohazhJy2qaPEH_7FYN6LZQ&s=10'
  },
  {
    product_name: 'Modern Sideboard',
    product_description: 'Dining room sideboard with spacious storage.',
    product_price: 9200,
    product_stock: 9,
    product_status: true,
    product_category: 'Dining Room',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTge7ChSOo0Xa20nYEYmirnIdxwcybsbdOqZ27vE0hKhw&s'
  },

  // =========================
  // Office
  // =========================
  {
    product_name: 'Modern Office Desk',
    product_description: 'Minimal office desk for everyday work.',
    product_price: 5900,
    product_stock: 20,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNELO0YEu9sQsCo2fMFRFSBlehPbYjSzS3jqqYRN3dmQ&s=10'
  },
  {
    product_name: 'Ergonomic Office Chair',
    product_description: 'Ergonomic chair designed for comfortable working.',
    product_price: 8900,
    product_stock: 15,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xv9R8wA98oKbCdF6bP6JkpTiMpyXdvtRBiS9R5Ic8g&s=10'
  },
  {
    product_name: 'Computer Desk',
    product_description: 'Spacious desk suitable for computer setups.',
    product_price: 6500,
    product_stock: 13,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gWp1J6f22HIIZoDsVqMrZkvkhQQvlazWWRpsXp1SfQ&s=10'
  },
  {
    product_name: 'Office Bookshelf',
    product_description: 'Tall bookshelf for office documents and books.',
    product_price: 7200,
    product_stock: 10,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CUSuDABnATW5ImWVme_5mH1HF1UEjiIf2D-bLseKJA&s=10'
  },
  {
    product_name: 'Filing Cabinet',
    product_description: 'Metal filing cabinet for office documents.',
    product_price: 4900,
    product_stock: 17,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXt0Q0seIFiEqNX2nIqbcL6nlawlXX5lnhGaLYZ6ftw&s=10'
  },
  {
    product_name: 'Executive Office Desk',
    product_description: 'Large executive desk with premium wooden finish.',
    product_price: 13900,
    product_stock: 6,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8My3ZANumzkQqScCn9Rf6Rk8mUze2AxIOkkzo1ynxcw&s=10'
  },
  {
    product_name: 'Meeting Table',
    product_description: 'Large meeting table for office discussions.',
    product_price: 12900,
    product_stock: 5,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-RbPJtnER6bi2iVrmpo5n6c5kSPwvZ2PMQFOnpe5jA&s=10'
  },
  {
    product_name: 'Office Lounge Chair',
    product_description: 'Comfortable lounge chair for office relaxation.',
    product_price: 6900,
    product_stock: 11,
    product_status: true,
    product_category: 'Office',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PLhrsTwuuVg8nze7IaHEJX-bEhkQidJjqehfo2SVnA&s=10'
  },

  // =========================
  // Storage
  // =========================
  {
    product_name: 'Wooden Storage Cabinet',
    product_description: 'Multi-purpose wooden storage cabinet.',
    product_price: 7900,
    product_stock: 12,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XknfRUiOC5s_zPILFywjjv6kFn6JG9FQ-pp79u75MA&s=10'
  },
  {
    product_name: 'Open Shelf Cabinet',
    product_description: 'Open shelf cabinet for books and decorations.',
    product_price: 5900,
    product_stock: 16,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4YAPN2dpff5mMTM4bsh6wlLwXh6yCZxcz4-EzwIBTQ&s=10'
  },
  {
    product_name: 'Tall Storage Shelf',
    product_description: 'Tall shelf with multiple storage levels.',
    product_price: 6800,
    product_stock: 14,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GN_USS3LborLabX1oElISJEOEbzu-oemai5_bxysTQ&s=10'
  },
  {
    product_name: 'Drawer Cabinet',
    product_description: 'Compact drawer cabinet for organized storage.',
    product_price: 5200,
    product_stock: 18,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9GKBUxbmftCsj6uUUO4CpZAeoNPZ4lMkbWoPQ2HtRg&s=10'
  },
  {
    product_name: 'Wooden Shoe Cabinet',
    product_description: 'Modern shoe cabinet with multiple compartments.',
    product_price: 6900,
    product_stock: 10,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8ULFHDdiGnuaMPgQBib-DHm5aFQGHG8hFTQri9eFng&s=10'
  },
  {
    product_name: 'Minimal Storage Box',
    product_description: 'Simple storage box for small household items.',
    product_price: 1200,
    product_stock: 30,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc9lx30XEY5s2g_2qhmnu40i0AprkNi3TYO7XIZAxfw&s=10'
  },
  {
    product_name: 'Display Cabinet',
    product_description: 'Glass display cabinet for collectibles and decoration.',
    product_price: 9900,
    product_stock: 8,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1bFDw9ygIq12A_4p8kq5LDlct2QB_y-Nvl6wqZ2UYw&s=10'
  },
  {
    product_name: 'Wall Mounted Shelf',
    product_description: 'Minimal wall mounted shelf.',
    product_price: 2200,
    product_stock: 25,
    product_status: true,
    product_category: 'Storage',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rj1Jjzkm_CxMdI0JGui9ytQe2Iux3LVNX-N4MseNKw&s=10'
  },

  // =========================
  // Outdoor
  // =========================
  {
    product_name: 'Outdoor Garden Chair',
    product_description: 'Durable chair suitable for outdoor areas.',
    product_price: 2900,
    product_stock: 25,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k3MMA0oV78i2t-hYFbScmN7vPkREh73ksibZW30kkA&s=10'
  },
  {
    product_name: 'Outdoor Dining Table',
    product_description: 'Large outdoor table for garden dining.',
    product_price: 8900,
    product_stock: 8,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU3G0oXYAnqK4rg9pjUMmz2J2RttswdET3Vs2Ob2P1g&s=10'
  },
  {
    product_name: 'Garden Bench',
    product_description: 'Classic wooden garden bench.',
    product_price: 5900,
    product_stock: 10,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecQhjcHaHhfnVs4e8YNixI4bLaQsysAwGKrfLKuOmCA&s=10'
  },
  {
    product_name: 'Outdoor Lounge Chair',
    product_description: 'Comfortable lounge chair for outdoor relaxation.',
    product_price: 6900,
    product_stock: 12,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhmHGGZEqY9PJWvrPywRPjyrcaV6F7xG_Ijd33r_dBA&s=10'
  },
  {
    product_name: 'Patio Sofa',
    product_description: 'Comfortable sofa designed for patios.',
    product_price: 12900,
    product_stock: 7,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA60yjSkrXRlwXIVZlDuDjQWGpeZFxKgd9mBkYUd-Cg&s=10'
  },
  {
    product_name: 'Outdoor Coffee Table',
    product_description: 'Compact coffee table for outdoor seating areas.',
    product_price: 3900,
    product_stock: 16,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FNmjgTPm9Gkj8MJBO1KMxL1ernUL0ksxypnF6HdylA&s=10'
  },
  {
    product_name: 'Wooden Outdoor Chair',
    product_description: 'Natural wooden chair for gardens and patios.',
    product_price: 3200,
    product_stock: 20,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYvQtJ-B9VC9A94iI1Wv-Gbndf00Jud_DCgtCT5MLJw&s=10'
  },
  {
    product_name: 'Outdoor Bar Stool',
    product_description: 'High outdoor stool for patio bars.',
    product_price: 2800,
    product_stock: 18,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsC8NJ0iYrbTj_4VGPnZiudh6RgTDboZM_Wykv2dTnIw&s=10'
  },
  {
    product_name: 'Garden Side Table',
    product_description: 'Small side table for outdoor seating.',
    product_price: 2400,
    product_stock: 22,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyAWJa17guNWlXYrvaRxMf9vLuKNKgwwnu6J6C8RkPA&s=10'
  },
  {
    product_name: 'Outdoor Relaxation Set',
    product_description: 'Outdoor furniture set for relaxing in the garden.',
    product_price: 15900,
    product_stock: 5,
    product_status: true,
    product_category: 'Outdoor',
    product_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeU_Vy-Slpl8fJmpKF5zczdSZkmPjzOBg1bLVVWblww&s=10'
  }
];
const seedProducts = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log('Products Seed Successfully');
    } catch (error) {
        console.error('Seed Error:', error);
    }
};

module.exports = seedProducts;