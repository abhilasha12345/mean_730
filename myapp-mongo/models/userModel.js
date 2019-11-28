const db=require('./connection')

function userModel()
{
  this.addproduct=(productDetails,f1,f2,f3)=>{
  	return new Promise((resolve,reject)=>{
  		
  		db.collection("product").find().toArray((err,result)=>{
  			var pid
  			if(result.length>0)
  			{
  				pid=result[0].pid
  				for(let i=1;i<result.length;i++)
  				{
  					if(pid<result[i].pid)
  						pid=result[i].pid
  				}	
  			}
  			else
  				pid=0
  			productDetails.f1=f1
  			productDetails.f2=f2
  			productDetails.f3=f3
  			productDetails.pid=pid+1
  			productDetails.dt=Date()
  			productDetails.status=1
  			db.collection('product').insertOne(productDetails,(err,result)=>{
  				err ? reject(err) : resolve(result);
  			})	
  		})  		
  		/*pool.getConnection((err,con)=>{
  			var sqlQuery="insert into product values(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,1)"
  			var sqlData=[userDetails.title,userDetails.cat,userDetails.subcat,userDetails.des,f1,f2,f3,userDetails.nm,userDetails.phone,userDetails.email,userDetails.price,userDetails.city,Date()]
  			con.query(sqlQuery,sqlData,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  				
  			})
  		})*/
  	})
  }
  
  
  
}

module.exports=new userModel()



