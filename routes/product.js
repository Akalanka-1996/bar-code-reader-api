const router = require('express').Router()
const {getProducts, createProduct, getProductByProductId} = require('../controllers/productcontroller')

router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:productId').get(getProductByProductId)

module.exports = router