const pool=require('./connection')

function userModel()
{
  this.addproduct=(userDetails,f1,f2,f3)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			var sqlQuery="insert into product values(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,1)"
  			var sqlData=[userDetails.title,userDetails.cat,userDetails.subcat,userDetails.des,f1,f2,f3,userDetails.nm,userDetails.phone,userDetails.email,userDetails.price,userDetails.city,Date()]
  			con.query(sqlQuery,sqlData,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  				
  			})
  		})
  	})
  }
  
  
  
}

module.exports=new userModel()



