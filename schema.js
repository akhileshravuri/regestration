const mongoose=require("mongoose")

const Details=new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    password:String
    
})

const Details1=mongoose.model("data",Details)
module.exports=Details1