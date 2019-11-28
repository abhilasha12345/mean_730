const http=require('http')

http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html"})
	//res.writeHead(200,"Content-type:text/html")
	res.write("<h1>Welcome to NodeJS server side</h1>")
	res.write("<h3>It is node http module</h3>")
	res.end()
}).listen(8081)
console.log("server invoked at port http://localhost:8081")
