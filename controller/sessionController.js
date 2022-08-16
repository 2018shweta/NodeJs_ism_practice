function login(req, res) {
    console.log(req.body)
    res.json({msg:"LoginDone",data:req.body})
}

function signup(req, res) {
    res.end("signup")
}

module.exports.login = login
module.exports.signup = signup