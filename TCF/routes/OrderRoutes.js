const OrderController = require ('../controllers/OrderController.js')
const express = require('express')

const route = express.Router()

//Add Order to History
route.post('/orders', OrderController.Order_Handle)

//HIstory for Admin
route.get('/history-ad', OrderController.History_Admin)

module.exports = route