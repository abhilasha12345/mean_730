const http=require("http")
const url=require("url")
const fs=require("fs")
const pool=require("./connection")

http.createServer((req,res)=>{
	var urlobj=url.parse(req.url,true)
	var data
	if(urlobj.pathname=="/insert")
	{
		data=fs.readFileSync("insert.html")
		res.write(data)
		res.end()
	}
	else if(urlobj.pathname=="/insertdata")
	{	
		var d=urlobj.query
		pool.getConnection((err,con)=>{
			if(err)
				console.log(err)
			else
			{
				var query="insert into data values(?,?,?,?,?)"
				var data=[d.rno,d.nm,d.phy,d.che,d.mat] 
				con.query(query,data,(err,result)=>{
					if(err)
						console.log(err)
					else
					{
						console.log("Record inserted successfully")
						data="<h1>Student details</h1><p>Rollno : "+d.rno+"</p><p>Name : "+d.nm+"</p><p>Physics marks : "+d.phy+"</p><p>Chemistry marks : "+d.che+"</p><p>Maths marks : "+d.mat+"</p>"	
						res.write(data)
						res.end()	
					
					}						
				})
			}		
		})	
	}
	else
	{
		data="<h1>Invalid URL invoked</h1>"
		res.write(data)
		res.end()
	}
}).listen(8081)

console.log("Server invoked at URL http://localhost:8081")
