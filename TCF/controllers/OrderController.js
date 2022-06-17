const Order = require ('../models/OrderModel.js')

exports.Order_Handle = async (req, res, next)=>{
    var dateTime = require('node-datetime').create().format('H:M:S d-m-Y')
    const reqData=req.body, dataGet=[]
    for(let i=0; i<reqData.length; i++){
        dataGet.push({
            status: "Unprocessed",
            idUser: reqData[i].idUser,
            userName: reqData[i].userName,
            address: reqData[i].address,
            phone: reqData[i].phone,
            productName: reqData[i].productName,
            toppings: reqData[i].toppings,
            quantity: reqData[i].quantity,
            price: reqData[i].price,
            dateOrder: dateTime
        })
    }
    const newOrder= await Order.insertMany(dataGet)
    res.status(200).json({
        status: 'success',
        newOrder
    })
}


