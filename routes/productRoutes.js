const express = require('express');
const router = express.Router();
const {getProducts,postProducts,putProduct,deleteProduct}=require('../controller/productController');

router.get('/get',getProducts);

router.post('/post',postProducts);

router.put('/put/:id',putProduct);

router.delete('/delete/:id',deleteProduct);

module.exports=router;

