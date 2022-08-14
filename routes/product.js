const router = require('express').Router()
const {getProducts} = require('../controllers/productcontroller')

router.route('/').get(getProducts)

module.exports = router