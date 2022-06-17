const express = require('express')
const app = express()
const OrderRoutes = require('./routes/OrderRoutes.js')
const GlobalErrorHandle = require ('./controllers/ErrorController.js')
const AppError = require('./utils/AppError')

app.use(express.json())

app.use('/a', OrderRoutes)

app.all('*', (req, res, next)=>{
    next(new AppError('Url is not available', 404))
})

app.use(GlobalErrorHandle)

module.exports = app