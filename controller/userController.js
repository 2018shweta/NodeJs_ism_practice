var UserModel=require("../model/userModel")


module.exports.addUser=function(req,res){

   let user=new UserModel({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    
           
    role: "62fb29e49597da7d9e201f35"
   })

   user.save(function (err, data) {
    if (err) {
        res.json({
            status: -1,
            msg: "SMW",
            data: req.body
        })
    } else {
        res.json({
            status: 200,
            msg: "User added",
            data: user
        })
    }
})


}