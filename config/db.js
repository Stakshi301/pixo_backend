const mongoose=require('mongoose');  
require('dotenv').config();
 

const connectDB=async ()=>{
    try{
         mongoose.connect(process.env.MONGODB_URL);
        console.log("Databse Connected...");
        if (!process.env.MONGODB_URL) {
            throw new Error("MongoDB URI is missing. Check your .env file.");
        }
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
} 
 
module.exports=connectDB