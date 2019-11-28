const http=require("http")

http.createServer((req,res)=>{
	if(req.url=="/" || req.url=="/home")
		res.write("<h1>Home URL invoked</h1>")
	else if(req.url=="/about")
		res.write("<h1>About URL invoked</h1>")	
	else if(req.url=="/contact")
		res.write("<h1>Contact URL invoked</h1>")
	else if(req.url=="/service")
		res.write("<h1>Service URL invoked</h1>")
	else if(req.url=="/register")
		res.write("<h1>Register URL invoked</h1>")
	else if(req.url=="/login")
		res.write("<h1>Login URL invoked</h1>")		
	else 
		res.write("<h1>Invalid URL invoked</h1>")
	res.end()
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
