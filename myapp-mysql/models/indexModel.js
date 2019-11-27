const pool=require('./connection')

function indexModel()
{
  this.register=(userDetails)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			var sqlQuery="insert into register values(NULL,?,?,?,?,?,?,?,'user',?,0)"
  			var sqlData=[userDetails.name,userDetails.email,userDetails.password,userDetails.mobile,userDetails.address,userDetails.city,userDetails.gender,Date()]
  			con.query(sqlQuery,sqlData,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  				
  			})
  		})
  	})
  }
  
  this.login=(userDetails)=>{
	  return new Promise((resolve,reject)=>{
	  	pool.getConnection((err,con)=>{
	  		var sqlQuery="select * from register where email=? and password=? and status=1"
	  		var sqlData=[userDetails.email,userDetails.password]
	  		con.query(sqlQuery,sqlData,(err,result)=>{
	  			con.release()
	  			err ? reject(err) : resolve(result); 
	  		})
	  	})
	  })
  }
  
  this.fetchall=(tbl_nm)=>{
  	return new Promise((resolve,reject)=>{
	  	pool.getConnection((err,con)=>{
	  		var sqlQuery="select * from "+tbl_nm
	  		con.query(sqlQuery,(err,result)=>{
	  			con.release()
	  			err ? reject(err) : resolve(result); 
	  		})
	  	})
	  })
  }
  
  this.fetchsubcat=(cnm)=>{
  	return new Promise((resolve,reject)=>{
	  	pool.getConnection((err,con)=>{
	  		var sqlQuery="select * from addsubcat where catnm=?"
	  		var sqlData=[cnm]
	  		con.query(sqlQuery,sqlData,(err,result)=>{
	  			con.release()
	  			err ? reject(err) : resolve(result); 
	  		})
	  	})
	  })
  }
  
  
  this.fetchproducts=(filterData)=>{
  	return new Promise((resolve,reject)=>{
	  	pool.getConnection((err,con)=>{
	  		
	  		if(filterData.sprice!=undefined)
	  		{
	  		var sqlQuery="SELECT *  FROM  product  WHERE  subcat= ? AND price BETWEEN ? AND ?" 
	  		var sqlData=[filterData.scnm,filterData.sprice,filterData.eprice]
	  		}
	  		else if(filterData.city!=undefined)
	  		{
	  		var sqlQuery="SELECT *  FROM  product  WHERE  city=? AND subcat=?" 
	  		var sqlData=[filterData.city,filterData.scnm]
	  		}
	  		else
	  		{
	  		var sqlQuery="SELECT *  FROM  product  WHERE   subcat=?" 
	  		var sqlData=[filterData.scnm]
	  		}
	  		con.query(sqlQuery,sqlData,(err,result)=>{
	  			con.release()
	  			err ? reject(err) : resolve(result); 
	  		})
	  	})
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










