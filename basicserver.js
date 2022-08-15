let http=require("http")//internal
let fs=require("fs")
http.createServer(function(req,res){
    console.log("request...."+req.url)
  
if(req.url=="/signup"){

    let loginFile=fs.readFileSync("login.html")
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(loginFile);
    res.write("signup");
}else if(req.url=="/favicon.ico"){
    res.write("differnt");
}

    res.write("hyyy");
    res.end();
}).listen(9898)