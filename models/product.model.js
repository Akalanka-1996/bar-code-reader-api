const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId:{
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    

},
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product