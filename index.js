const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const Details1=require('./schema')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/akhil")


app.post("/log",(req,res)=>{
    const{email,password}=req.body
   Details1.findOne({email:email})
   .then(user =>{
    if(user){
        if(user.password===password){
            res.json("sucess")
        }else{
            res.json("the password is incorrect")
        }
    }else{
        res.json("no record found")
    }
   }) 
})

app.post("/register",(req,res)=>{
    Details1.create(req.body)
    .then(x =>res.json(x))
    .catch(err => res.json(err))
})


app.listen(3002,()=>{
    console.log("database connected")
})