const http=require('http')

const server=http.createServer((request,response)=>{
	response.write("Welcome to NodeJS server side")
	response.end()
})

server.listen(8081,(error)=>{
	if(error)
		console.log(error)
	else
		console.log("server invoked at port http://localhost:8081")	
})
