const http=require("http")
const url=require("url")

http.createServer((req,res)=>{
	var urlobj=url.parse(req.url,true)
	if(urlobj.pathname=="/" && urlobj.pathname=="/home")
		res.write("<h1>/home URL invoked</h1>")
	else if(urlobj.pathname=="/about")
		res.write("<h1>/about URL invoked</h1>")
	else if(urlobj.pathname=="/about")
		res.write("<h1>/contact URL invoked</h1>")
	else if(urlobj.pathname=="/contact")
		res.write("<h1>/contact URL invoked</h1>")
	else if(urlobj.pathname=="/service")
		res.write("<h1>/service URL invoked</h1>")				
	else if(urlobj.pathname=="/register")
		res.write("<h1>/register URL invoked</h1>")
	else if(urlobj.pathname=="/login")
	{
		var data=urlobj.query
		console.log("username : "+data.username)
		console.log("password : "+data.password)
		res.write("<h1>/login URL invoked</h1>")	
	}
	else
		res.write("<h1>Invalid URL invoked</h1>")
	res.end()
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
