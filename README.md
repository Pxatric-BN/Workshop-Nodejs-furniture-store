# 🛋️ Furniture Store API

RESTful API สำหรับระบบร้านค้า Furniture E-commerce พัฒนาด้วย **Node.js, Express.js และ MongoDB** โดยรองรับการจัดการผู้ใช้งาน สินค้า และคำสั่งซื้อ พร้อมระบบ Authentication และ Authorization ด้วย JWT

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT (JSON Web Token)**
* **bcrypt**
* **dotenv**

## 📁 Project Structure

```text
Furniture-store/
├── bin/
│   └── www
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── orders.model.js
│   ├── products.model.js
│   └── users.model.js
├── routes/
│   ├── index.js
│   ├── auth.js
│   ├── users.js
│   ├── products.js
│   └── orders.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone repository

```bash
git clone https://github.com/your-username/Workshop-Nodejs-furniture-store.git
```

เข้าสู่โฟลเดอร์โปรเจกต์

```bash
cd Workshop-Nodejs-furniture-store
```

ติดตั้ง dependencies

```bash
npm install
```

## 🔐 Environment Variables

สร้างไฟล์ `.env`

```env

DB_HOST=YOUR_DB_HOST
DB_PORT=YOUR_DB_PORT
DB_NAME=YOUR_DB_NAME

JWT_SECRET=your_secret_key
```

> ไม่ควร commit ไฟล์ `.env` ขึ้น GitHub

## ▶️ Running the Project

สำหรับ Development

```bash
npm start
```

## 🔑 Authentication

ระบบใช้ **JWT** สำหรับ Authentication

หลังจาก Login สำเร็จ จะได้รับ Token และต้องส่ง Token ผ่าน HTTP Header ใน API ที่ต้องการ Authentication

```http
Authorization: Bearer <token>
```

## 👤 User API

### Register

```http
POST /api/v1/register
```

ใช้สำหรับสมัครสมาชิกใหม่

### Login

```http
POST /api/v1/login
```

ใช้สำหรับเข้าสู่ระบบและรับ JWT Token

### Get All Users

```http
GET /api/v1/users
```

ใช้สำหรับแสดงข้อมูล Users ทั้งหมด

## 🛋️ Product API

### Get All Products

```http
GET /api/v1/products
```

แสดงรายการสินค้าทั้งหมด

### Get Product By ID

```http
GET /api/v1/products/:id
```

แสดงรายละเอียดสินค้าตาม ID

### Create Product

```http
POST /api/v1/products
```

สร้างสินค้าใหม่

> ต้องมีสิทธิ์ตามที่กำหนด เช่น Admin

### Update Product

```http
PUT /api/v1/products/:id
```

แก้ไขข้อมูลสินค้า

### Delete Product

```http
DELETE /api/v1/products/:id
```

ลบสินค้า

### Get Orders Of Product

```http
GET /api/v1/products/:id/orders
```

แสดงรายการ Order ที่มีสินค้านั้นอยู่

### Create Order For Product

```http
POST /api/v1/products/:id/orders
```

สร้าง Order โดยเลือกสินค้าจาก Product

ระบบจะตรวจสอบจำนวนสินค้าใน Stock ก่อนสร้าง Order เพื่อป้องกันการสั่งซื้อเกินจำนวนสินค้าที่มีอยู่

## 📦 Order API

### Get All Orders

```http
GET /api/v1/orders
```

แสดงรายการ Orders ทั้งหมด



## 📊 Response Format

API ใช้รูปแบบ Response กลางเพื่อให้ทุก Endpoint มีโครงสร้างเดียวกัน

### Success

```json
{
  "status": 200,
  "message": "Success",
  "data": {}
}
```

### Multiple Data

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {},
    {}
  ]
}
```

### Created

```json
{
  "status": 201,
  "message": "Created Successfully",
  "data": {}
}
```

### Error

```json
{
  "status": 400,
  "message": "Bad Request",
  "data": null
}
```
## 🗄️ Database

โปรเจกต์ใช้ **MongoDB** เป็น Database และใช้ **Mongoose** สำหรับจัดการ Schema และการเชื่อมต่อ Database

หลัก ๆ ประกอบด้วย

```text
Users
   │
   │
   └──── Orders
             │
             │
             └──── Products
```

### User

เก็บข้อมูลผู้ใช้งานระบบ เช่น

* username
* password
* role
* status

### Product

เก็บข้อมูลสินค้า เช่น

* product name
* price
* stock
* status

### Order

เก็บข้อมูลคำสั่งซื้อและ Product ที่ถูกสั่งซื้อ

## 🛡️ Authorization

ระบบแบ่งสิทธิ์การใช้งานตาม Role

ตัวอย่างเช่น

```text
User
 └── สามารถใช้งาน API ที่เกี่ยวข้องกับการซื้อสินค้า

Admin
 └── สามารถจัดการ Product และ User
```

API ที่ต้องการสิทธิ์ Admin จะตรวจสอบผ่าน Middleware ก่อนดำเนินการ

## 📌 Business Rules

ระบบมีการตรวจสอบ Stock ก่อนสร้าง Order

ตัวอย่าง:

```text
Product Stock = 5
Customer Order = 3

หลังสร้าง Order

Remaining Stock = 2
```

หากจำนวนสินค้าที่สั่งซื้อมากกว่า Stock ที่มีอยู่ ระบบจะไม่อนุญาตให้สร้าง Order

```text
Product Stock = 5
Customer Order = 6

❌ Cannot create order
```

## 🧪 Testing API

สามารถทดสอบ API ด้วยเครื่องมือ เช่น

* Postman
* Insomnia
* Thunder Client

Base URL:

```text
http://localhost:3000/api/v1
```
