const http=require('http')

http.createServer((req,res)=>{
	res.write("Welcome to NodeJS server side")
	res.end()
}).listen(8081)
console.log("server invoked at port http://localhost:8081")
