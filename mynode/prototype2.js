function Emp_details()
{
  this.eno=101
  this.enm='amit'
  this.esal=10000.11
  this.edes='trainer'  
  
  this.showDetails=()=>{
  	console.log("Employee details")
	console.log("Eno :"+this.eno)
	console.log("Enm :"+this.enm)
	console.log("Esal :"+this.esal)
	console.log("Edes :"+this.edes)
  }
  
}

var obj=new Emp_details()
obj.showDetails()



