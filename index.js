require ('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
const ProductRoute=require('./routes/productRoutes');
const userRoute=require('./routes/userRoute');
const postRoute=require('./routes/postRoute')
const cors=require('cors');

const app=express();
const port=5000;
 
connectDB();
app.use(express.json()); 
app.use(cors());
app.use('/products',ProductRoute);   
app.use('/login-signin',userRoute);
app.use('/post',postRoute);
app.listen(port,()=>{ 
    console.log(`Server running on port ${port}`);
})  