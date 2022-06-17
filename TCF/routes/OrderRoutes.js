const OrderController = require ('../controllers/OrderController.js')
const express = require('express')

const route = express.Router()

//Add Order to History
route.post('/orders', OrderController.Order_Handle)

//Orders History for Admin
route.get('/history-ad', OrderController.History_Admin)

//Order History for User
route.post('/history-user', OrderController.History_User)


module.exports = route