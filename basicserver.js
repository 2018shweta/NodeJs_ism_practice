let http=require("http")

http.createServer(function(req,res){
    console.log("request...."+req.url)
  
if(req.url=="/signup"){
    res.write("signup");
}else if(req.url=="/favicon.ico"){
    res.write("differnt");
}

    res.write("hyyy");
    res.end();
}).listen(9898)