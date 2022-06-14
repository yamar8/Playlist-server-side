const mongoose = require('mongoose')
require('./user')
require('./item')

const orderSchema = new mongoose.Schema({
    orderDate:{
        type:Date,
        default: Date.now
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    items:[{
        itemId:{
            type:mongoose.SchemaTypes.ObjectId, ref: 'item'},
            quantity:{
                type:Number,
                required:true,
                default:1 
            }
    }],
    totalprice:{
            type:Number,
            //required:true
    },
    
})


const orderModel =  mongoose.model('order',orderSchema)
module.exports = {orderModel}

