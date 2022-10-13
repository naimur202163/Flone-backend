const express=require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const router = express.Router();


router.route('/product').get(getAllProducts).post(createProduct)
module.exports=router