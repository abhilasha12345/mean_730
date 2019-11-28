const http=require("http")
const url=require("url")

http.createServer((req,res)=>{
	var urlpath=url.parse(req.url,true).pathname
	//console.log(req.method)
	if(urlpath=="/")
		res.write("<h1>Home URL invoked</h1>")
	else if(urlpath=="/check" && req.method=="GET")
		res.write("<h1>/check URL invoked and method GET</h1>")
	else if(urlpath=="/check" && req.method=="POST")
		res.write("<h1>/check URL invoked and method POST</h1>")
	else if(urlpath=="/check" && req.method=="PUT")
		res.write("<h1>/check URL invoked and method PUT</h1>")
	else if(urlpath=="/check" && req.method=="DELETE")
		res.write("<h1>/check URL invoked and method DELETE</h1>")
	else 
		res.write("<h1>Invalid URL invoked</h1>")

	res.end()
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
