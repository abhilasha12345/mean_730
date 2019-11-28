const db=require('./connection')

function adminModel()
{
  this.viewusers=()=>{
  	return new Promise((resolve,reject)=>{
  		db.collection('register').find({'role':'user'}).toArray((err,result)=>{
			err ? reject(err) : resolve(result);
		})
  	})
  }
  
  this.manageusers=(urlobj)=>{
  	return new Promise((resolve,reject)=>{
  		  if(urlobj.s=="block")
		  {
			  db.collection('register').update({'regid':parseInt(urlobj.regid)},{$set:{'status':0}},(err,result)=>{
				err ? reject(err) : resolve(result);	
			  })
		  }
		  else if(urlobj.s=="unblock")
		  {
			  db.collection('register').update({'regid':parseInt(urlobj.regid)},{$set:{'status':1}},(err,result)=>{
				err ? reject(err) : resolve(result);	
			  })
		  }
		  else
		  {
			  db.collection('register').remove({'regid':parseInt(urlobj.regid)},(err,result)=>{
				err ? reject(err) : resolve(result);	
			  })
		  }
  	})
  }
  
  this.addcat=(catnm,caticonnm)=>{
  	return new Promise((resolve,reject)=>{
  		db.collection("addcat").find().toArray((err,result)=>{
  			var catid
  			if(result.length>0)
  			{
  				catid=result[0].catid
  				for(let i=1;i<result.length;i++)
  				{
  					if(catid<result[i].catid)
  						catid=result[i].catid
  				}	
  			}
  			else
  				catid=0
  			catDetails={'catid':catid+1,'catnm':catnm,'caticonnm':caticonnm}
  			db.collection('addcat').insertOne(catDetails,(err,result)=>{
  				err ? reject(err) : resolve(result);
  			})	
  		})	
  	})
  }
  
  this.addsubcat=(catnm,subcatnm,subcaticonnm)=>{
  	return new Promise((resolve,reject)=>{
  		db.collection("addsubcat").find().toArray((err,result)=>{
  			var subcatid
  			if(result.length>0)
  			{
  				subcatid=result[0].subcatid
  				for(let i=1;i<result.length;i++)
  				{
  					if(subcatid<result[i].subcatid)
  						subcatid=result[i].subcatid
  				}	
  			}
  			else
  				subcatid=0
  			subcatDetails={'subcatid':subcatid+1,'catnm':catnm,'subcatnm':subcatnm,'subcaticonnm':subcaticonnm}
  			db.collection('addsubcat').insertOne(subcatDetails,(err,result)=>{
  				err ? reject(err) : resolve(result);
  			})	
  		})
  	})
  }
  
  
}

module.exports=new adminModel()







