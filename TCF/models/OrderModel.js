const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    status: {type: String,},
    idUser: { type: String, required: [true,'Must have ID User']},
    userName: { type: String,required: [true,'Must have User Name']},
    address: { type: String,},
    phone: { type: String, },
    productName: {type: String,required: [true,'Must have product']},
    toppings: { type: String,},
    quantity: {type: Number,required: [true,'Must have quantity']} ,
    price: {type: Number,required: [true,'Must have price']},
    dateOrder: {type: String,}
})

const Order = mongoose.model('payment_historyy', orderSchema)

module.exports = Order