const http=require("http")
const url=require("url")

http.createServer((req,res)=>{
	var urlpath=url.parse(req.url,true).pathname
	//console.log(urlpath)
	if(urlpath=="/" || urlpath=="/home")
		res.write("<h1>Home URL invoked</h1>")
	else if(urlpath=="/about")
		res.write("<h1>About URL invoked</h1>")	
	else if(urlpath=="/contact")
		res.write("<h1>Contact URL invoked</h1>")
	else if(urlpath=="/service")
		res.write("<h1>Service URL invoked</h1>")
	else if(urlpath=="/register")
		res.write("<h1>Register URL invoked</h1>")
	else if(urlpath=="/login")
		res.write("<h1>Login URL invoked</h1>")		
	else 
		res.write("<h1>Invalid URL invoked</h1>")

	res.end()
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
