const express =require('express');
const productModel=require('../model/productSchema');

//get products
const getProducts=async(req,res)=>{
    try{
        const getProduct=await productModel.find();
        res.status(200).json(getProduct);
    }catch(err){
        res.status(500).json(err.message);
    }
}


//post products
const postProducts=async(req,res)=>{
    try{
        const{name,description,image}=req.body;
        const newProduct=new productModel({name,description,image});
        await newProduct.save();
        res.json({message:"Product added!!",newProduct});
    }catch(err){
        res.status(500).json(err.message);
    }
}


//putProduct
const putProduct=async(req,res)=>{
    try{
        const updateProduct=await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateProduct){
            res.json('Product not found');
        }
        res.json('Product updated seccessfully');
    }catch(err){
        res.status(500).json(err.message);
    }
}



//deleteProduct
const deleteProduct=async(req,res)=>{
    try{
        const deleteProduct=await productModel.findByIdAndDelete(req.params.id);
        if(!deleteProduct){
            res.json('Product not found');
        }
        res.json('Product deleted successfully');
    }catch(err){
        res.json(err.message);
    }
}


module.exports={getProducts,postProducts,putProduct,deleteProduct}