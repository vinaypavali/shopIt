const express = require('express');
const app = express(); 
const router = express.Router()
const { default: mongoose } = require('mongoose')
const User = require('./model/userSchema');
const Bike = require('./model/bikeSchema');
const Car = require('./model/carSchema');
app.use(express.json())
app.use(router)
mongoose.connect("mongodb+srv://harshu:harshu@showroomc.0zml2ss.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 
}).then(()=>console.log("MongoDB Connected..."))
.catch((err)=>console.log(`Not Connected-- ${err}`))

router.get('/register',(req,res)=>{  
     
})

router.get('/cars',(req,res)=>{  
     
})

router.post('/cars',(req,res)=>{
    const {carname, price,description,fuel,engine,milage,maxpower,maxtorque,seat,transmission,body}=req.body;

    const car = new Car({
        carname,price,description,fuel,engine,milage,maxpower,maxtorque,seat,transmission,body
    }) 
    car.save(err=>{
        if (err) {
            res.send(err)
        } else {
            res.send({message:"Car Saved"})
        }

    });

})

router.get('/bikes',(req,res)=>{  
     
})

router.post('/bikes',(req,res)=>{
    const {bikename, price,description,fuel,engine,milage,maxpower,maxtorque,seat,transmission,body}=req.body;

    const bike = new Bike({
        bikename,price,description,fuel,engine,milage,maxpower,maxtorque,seat,transmission,body
    }) 
    bike.save(err=>{
        if (err) {
            res.send(err)
        } else {
            res.send({message:"Bike Saved"})
        }

    });

})


router.post('/register',async(req,res)=>{
    const {name,email,phone,password,cpassword}=req.body;
     let exist = await User.findOne({email})
        if(exist) {
            res.send("user Exist")
       }
       if(password !== cpassword){
        res.send({message:"Password doesn't match"})
       }else{
       const user = new User({
        name,email,phone,password,cpassword
         })
        await user.save(err=>{
            if (err) {
                res.send(err)
            } else {
                res.send({message:"Registered"})
            }
            
        })
       }
    
  })

app.listen(8000,()=>console.log(`Server started..`)) 