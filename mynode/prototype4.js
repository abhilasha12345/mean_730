function Emp_details()
{
  this.getDetails=(eno,enm,esal,edes)=>{	
  	this.eno=eno
  	this.enm=enm
  	this.esal=esal
  	this.edes=edes  
  }
  
  this.showDetails=()=>{
  	console.log("Employee details")
	console.log("Eno :"+this.eno)
	console.log("Enm :"+this.enm)
	console.log("Esal :"+this.esal)
	console.log("Edes :"+this.edes)
  }
  
}

var obj=new Emp_details()
obj.getDetails(1001,"abc",10000.11,"trainer")
obj.showDetails()



