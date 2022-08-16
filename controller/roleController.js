var RoleModel=require("../model/roleModel")

//all role methods here

//addRole
function addRole(req,res){
let role=new RoleModel({

    roleName:req.body.roleName

})
role.save(function(err,data){
    if(err){
        console.log("err in role add" + err);
        res.json({
            status:-1,
            msg:"role not added",
            date:req.body
        })
    }else{
        res.json({
            status:200,
            msg:"role added",
            data:role
        })
    }
})
}

//allRoles
function allRole(req,res){

    RoleModel.find(function(err,data){
        if(err){
            console.log("error is get in aal role"+err);
            res.json({
               status:-1,
               msg:"role not retrive",
               data:err
            })
        }else{

      res.json({
        status:200,
        msg:"role retrive",
        data:data
      })

        }
    })

}

//roleById
function findroleById(req,res)
{
    RoleModel.findById({_id:req.params.roleId},function(err,data){

        if(err){
            console.log("not finde role by id"+err);
            res.json({
                status:-1,
                msg:"role not find",
                data:err

            })
        }else{
            if(data==null){
                res.json({
                    status:200,
                    msg:"invalid roleId",
                    data:req.params.roleId
                })

            }else{
                res.json({
                    status:200,
                    msg:"role retrived",
                    data:data
                })
            }
        }
    })
}




//all exports method
module.exports.addRole=addRole
module.exports.allRole=allRole
module.exports.findroleById=findroleById