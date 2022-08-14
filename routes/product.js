const router = require('express').Router()
const {getProducts, createProduct} = require('../controllers/productcontroller')

router.route('/').get(getProducts)
router.route('/').post(createProduct)

module.exports = router