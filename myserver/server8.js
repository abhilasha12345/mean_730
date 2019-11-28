const http=require("http")
const url=require("url")
const fs=require("fs")

http.createServer((req,res)=>{
	var urlobj=url.parse(req.url,true)
	var data
	if(urlobj.pathname=="/" || urlobj.pathname=="/home")
		data=fs.readFileSync("home.html")	
	else if(urlobj.pathname=="/about")
		data=fs.readFileSync("about.html")
	else if(urlobj.pathname=="/contact")
		data=fs.readFileSync("contact.html")
	else if(urlobj.pathname=="/service")
		data=fs.readFileSync("service.html")				
	else if(urlobj.pathname=="/register")
		data=fs.readFileSync("register.html")
	else if(urlobj.pathname=="/login")
		data=fs.readFileSync("login.html")	
	else
		data="<h1>Invalid URL invoked</h1>"
	res.write(data)
	res.end()
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
