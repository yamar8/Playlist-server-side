const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    barcode:{
        type:String,
        required:true,
        unique:true
    },
    createDate:{
        type:Date,
        default: Date.now
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
    },
    description:{
        type:String,
        // required:true
    },
    category:{type:String},
    inStock: {
        type:Number,
        required:true,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
    
})
//userModol.create()

const itemModel =  mongoose.model('item',itemSchema)
module.exports = {itemModel}

