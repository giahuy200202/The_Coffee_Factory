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

exports.History_Admin = async (req, res,next)=>{
    const allOrders=await Order.find({}, {'_id':false, '__v':false})
    res.status(200).json({
        status: 'success',
        size: allOrders.length,
        History: allOrders
    })
}

exports.History_User =  async (req, res,next)=>{
    const Orders=await Order.find(
        {idUser: req.body.id}, 
        {'_id':false, '__v':false, 'idUser': false, 'userName': false, 'address': false, 'phone': false}
    )
    res.status(200).json({
        status: 'success',
        size: Orders.length,
        History: Orders
    })
}

