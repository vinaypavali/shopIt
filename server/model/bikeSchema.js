const mongoose = require('mongoose')

const bikeSchema = new mongoose.Schema({
    bikephoto:{
        type:String,
         
    },
    bikename:{
        type:String,
        unique : true,
        required:true

    },
    price:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    },
    fuel:{
        type:String,
        required:true

    },
    engine:{
        type:String,
        required:true
    },
    milage:{
        type:String,
        required:true
    },
    maxpower:{
        type:String,
        required:true
    },
    maxtorque:{
        type:String,
        required:true
    },
    seat:{
        type:String,
        required:true
    },
     transmission:{
        type:String,
        required:true
    },
     body:{
        type:String,
        required:true
    }
})
 
const Bike = mongoose.model('Bike',bikeSchema);
module.exports = Bike
