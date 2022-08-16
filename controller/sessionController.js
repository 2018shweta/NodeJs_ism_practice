var UserModel=require("../model/userModel")

function login(req, res) {
   // console.log(req.body)
   // res.json({msg:"LoginDone",data:req.body})
UserModel.findOne({email: req.body.email, password: req.body.password},function (err, data) {
    if (err) {
        res.json({
            status: -1,
            msg: "SMW",
            data: req.body
        })
    } else {
        if (data == null) {
            res.json({
                status: -1,
                msg: "Invalid Credentials....",
                data: req.body
            })
        } else {
            res.json({
                status: 200,
                msg: "Login done",
                data: data
            })
        }
    }
})
}

function signup(req, res) {
    res.end("signup")
}

module.exports.login = login
module.exports.signup = signup