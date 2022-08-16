var express= require("express")
const mongoose=require('mongoose');
// entry contreoller
var sessionController=require("./controller/sessionController")
const roleController = require("./controller/roleController")


var app=express()

app.use(express.json()) //json
app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.end("welcome");
})
// sssion url
app.post("/login",sessionController.login)
app.post("/signup",sessionController.signup)

let x = app.listen(9898,function(){
    console.log("server started on 9898 ");
}) // function -> server -> 9898 
 
let dbUrl = "mongodb://localhost:27017/node_js"

mongoose.connect(dbUrl,function(err){
    if(err){
        console.log("db not connected");
    }else{      

           

        
        console.log("db connected...");
    }
})

//role url
app.post("/role",roleController.addRole)
app.get("/allRole",roleController.allRole)
app.get("/getRoleByRoleId/:roleId",roleController.findroleById)
app.delete("/deleteRole/:roleId",roleController.deleteByRoleId)
app.put("/updateRole",roleController.updatRole)