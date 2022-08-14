const asyncHandler = require('express-async-handler')
const Product = require('../models/product.model')

// get all products
 const getProducts = asyncHandler(async (req, res) => {
     const products = await Product.find()
     res.json(products)
 })

 // create a product

 const createProduct = asyncHandler(async (req, res) => {
     const {productId, name, description} = req.body

     if (!productId || !name || !description) {
        res.status(400)
        throw new Error("Please fill all the fields")
     } else {
         const product = new Product({
             productId,
             name,
             description
         })

         const createdProduct = await product.save()

         res.status(201).json(createdProduct)
     }


 })

 module.exports = {getProducts, createProduct}