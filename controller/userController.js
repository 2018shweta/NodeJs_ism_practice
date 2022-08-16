var UserModel=require("../model/userModel")

//add user method
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

//all users method
module.exports.allUsers=function(req,res){


    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({
                status: -1, msg: "SMW", data: err
            })
        } else {
            res.json({ status: 200, msg: "USER RET", data: data })
        }
    })
}

//get user by id

module.exports.findUserById=function (req,res)
{
    UserModel.findById({_id:req.params.userId},function(err,data){

        if(err){
            console.log("not finde user by id"+err);
            res.json({
                status:-1,
                msg:"user not find",
                data:err

            })
        }else{
            if(data==null){
                res.json({
                    status:200,
                    msg:"invalid userId",
                    data:req.params.roleId
                })

            }else{
                res.json({
                    status:200,
                    msg:"user retrived",
                    data:data
                })
            }
        }
    })
}


    

