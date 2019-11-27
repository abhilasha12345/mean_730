const pool=require('./connection')

function adminModel()
{
  this.viewusers=()=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
  			var sqlQuery="select * from register where role='user'"
  			con.query(sqlQuery,(err,result)=>{
  				con.release()
  				err ? reject(err) : resolve(result);
  				
  			})
  		})
  	})
  }
  
  this.manageusers=(urlobj)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
			if(urlobj.s=="block")
				var sqlQuery="update register set status=0 where regid=?"
			else if(urlobj.s=="unblock")
				var sqlQuery="update register set status=1 where regid=?"	  			
			else
				var sqlQuery="delete from register where regid=?"	
			var sqlData=[urlobj.regid]
			con.query(sqlQuery,sqlData,(err,result)=>{
				con.release()
				err ? reject(err) : resolve(result);
			})	
  		})
  	})
  }
  
  this.addcat=(catnm,caticonnm)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
			var sqlQuery="insert into addcat values(NULL,?,?)"
			var sqlData=[catnm,caticonnm]
			con.query(sqlQuery,sqlData,(err,result)=>{
				con.release()
				err ? reject(err) : resolve(result);
			})	
  		})
  	})
  }
  
  this.addsubcat=(catnm,subcatnm,subcaticonnm)=>{
  	return new Promise((resolve,reject)=>{
  		pool.getConnection((err,con)=>{
			var sqlQuery="insert into addsubcat values(NULL,?,?,?)"
			var sqlData=[catnm,subcatnm,subcaticonnm]
			con.query(sqlQuery,sqlData,(err,result)=>{
				con.release()
				err ? reject(err) : resolve(result);
			})	
  		})
  	})
  }
  
  
}

module.exports=new adminModel()







