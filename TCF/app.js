const express = require('express')
const app = express()
const OrderRoutes = require('./routes/OrderRoutes.js')

app.use(express.json())

app.use('/a', OrderRoutes)

module.exports = app