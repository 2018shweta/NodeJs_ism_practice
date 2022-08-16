var mongoose=require("mongoose")


var RoleSchema= new mongoose.Schema({
    roleName:String
})

module.exports=mongoose.model("Role",RoleSchema)