//require('../db').connect()
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        require:true
    },
    lastName : {
        type : String

    },
    email : {
        type:String,
        unique:true
    },
    password:{
        type : String,
        require : true,
        select : false
    },
    createDate:{
        type:Date,
        default: Date.now
    },
    address:{
        street:{
            type:String
        },
        city:{
            type:String
        },
        number:{
            type:Number
        }
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    lastLog:{
            type:Date,
            default: Date.now
    },
    isActive: {
        type:Boolean,
        default:true
    }
   
})
//userModol.create()

const userModel =  mongoose.model('user',userSchema)
module.exports = {userModel}

//delete1({email:'shachar2@gmail.com'});