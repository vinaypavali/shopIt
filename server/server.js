const express = require('express');
const app = express(); 
const multer = require("multer");
const router = express.Router()
const jwt = require('jsonwebtoken')
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


//Upload Image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "mariya.jpg");
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

// Register User
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

  // Update User 
router.put('/:id',async(req,res)=>{
    if(req.body.userId === req.params.id){
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{ new: true });
          res.status(200).json(updateUser);

        }catch(err){
             res.status(500).res.json(err);
        }

    }else{
        res.status(401).json('you can update only your account')
    }

})


// Login User
router.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if (user) {
            if(password===user.password){
                res.send({message:"user login sucessfully ",user:user})
            }else{
                res.send({message:"incorrect password"})
            }
            
       }else{
        res.send({message:"user not registered"}) 
       }

    }
    )

})

// addCars
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

// addBikes
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



app.listen(8000,()=>console.log(`Server started..`)) 