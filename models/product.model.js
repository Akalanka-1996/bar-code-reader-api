const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required
    }
    

},
{
    timestamps: true
})

const Product = mongoose.model('Product', taskSchema)

module.exports = Product