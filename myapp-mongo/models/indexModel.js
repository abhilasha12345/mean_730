const db=require('./connection')

function indexModel()
{
  this.register=(userDetails)=>{
  	return new Promise((resolve,reject)=>{
  		db.collection('register').find().toArray((err,result)=>{
			var regid
			if(result.length>0)
			{
				regid=result[0].regid
				for(let i=1;i<result.length;i++)
				{
					if(regid<result[i].regid)
						regid=result[i].regid
				}
			}
			else
				regid=0
			regid=regid+1
			userDetails.regid=regid
			userDetails.role='user'
			userDetails.status=1
			userDetails.dt=Date()
			db.collection('register').insertOne(userDetails,(err,result)=>{
				err ? reject(err) : resolve(result);	
			})	
		})
  	})
  }
  
  this.login=(userDetails)=>{
	  return new Promise((resolve,reject)=>{
		userDetails.status=1  
		db.collection('register').find(userDetails).toArray((err,result)=>{
			err ? reject(err) : resolve(result);
		})
	  })
  }
  
  this.fetchall=(c_nm)=>{
  	return new Promise((resolve,reject)=>{
	  	db.collection(c_nm).find().toArray((err,result)=>{
	  		err ? reject(err) : resolve(result); 
	  	})
	  })
  }
  
  this.fetchsubcat=(cnm)=>{
  	return new Promise((resolve,reject)=>{
	  	db.collection('addsubcat').find({'catnm':cnm}).toArray((err,result)=>{
	  		err ? reject(err) : resolve(result); 
	  	})
	  })
  }
  
  
  this.fetchproducts=(filterData)=>{
  	return new Promise((resolve,reject)=>{
	  	  if(filterData.sprice!=undefined)
	  	  {
	  		db.collection("product").find({$and:[{'subcat':filterData.scnm},{'price':{$gte:filterData.sprice}},{'price':{$lte:filterData.eprice}}]}).toArray((err,result)=>{
	  			err ? reject(err) : resolve(result); 
	  		})

	  	  }
	  	  else if(filterData.city!=undefined)
	  	  {
	  	   	db.collection("product").find({$and:[{'subcat':filterData.scnm},{'city':filterData.city}]}).toArray((err,result)=>{
	  			err ? reject(err) : resolve(result); 
	  		})  	
	  	   }
	           else
	  	    {
	  		db.collection("product").find({'subcat':filterData.scnm}).toArray((err,result)=>{
	  			err ? reject(err) : resolve(result); 
	  		})
	  	     }	
	  })
  }
  
  this.verifyaccount=(email)=>{
	return new Promise((resolve,reject)=>{
	  	pool.getConnection((err,con)=>{
	  		var sqlQuery="update register set status=1 where email=?"
	  		var sqlData=[email]
	  		con.query(sqlQuery,sqlData,(err,result)=>{
	  			con.release()
	  			err ? reject(err) : resolve(result); 
	  		})
	  	})
	  })  	
  }
  
  
  this.payment=(paymentDetails)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			var sqlQuery="insert into payment values(NULL,?,?,?,?)"
  			var sqlData=[paymentDetails.pid,paymentDetails.price,paymentDetails.uid,Date()]
  			con.query(sqlQuery,sqlData,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  				
  			})
  		})
  	})
  }
  
}

module.exports=new indexModel()










