const express = require('express');
const app = express();
const productRoutes = express.Router();

const Product = require('../model/Product')

productRoutes.post('/add', async (req, res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save()
        req.status(200).json(savedProduct);
        console.log(savedProduct)
        
    } catch (err){
        res.status(500).json(err)
    }
    

})


productRoutes.get("/", async (req, res) => {
    try {
      const products = await Product.find({ });
      res.json(products);
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  });

module.exports =  productRoutes