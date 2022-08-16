var mongoose=require("mongoose")

var UserSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
})


module.exports=mongoose.model("User",UserSchema)