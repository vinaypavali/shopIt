const mongoose = require('mongoose')
 

const userSchema = new mongoose.Schema({
    pic:{
        type:String,
         default:""
    },
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        unique : true,
        required:true

    },
    phone:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    cpassword:{
        type:String,
        required:true

    },
 
})

 
 
const User = mongoose.model('User',userSchema);
module.exports = User
