const express=require('express');
const connectDB=require('./config/db');
const router=require('./routes/productRoutes');
const cors=require('cors');
require ('dotenv').config();

const app=express();
const port=3000;

connectDB();
app.use(cors());
app.use('api',router); 

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})