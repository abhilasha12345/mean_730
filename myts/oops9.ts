class Employee
{
  eno:number
  enm:string
  
  constructor()
  {
  	this.eno=0
  	this.enm='NULL'
  }
  
  setEmployee(eno,enm)
  {
  	this.eno=eno
  	this.enm=enm
  }	
  getEmployee()
  {
  	console.log("Eno : "+this.eno)
  	console.log("Enm : "+this.enm)
  }
}

var obj=new Employee()

obj.getEmployee()

obj.setEmployee(1001,'chiku')
obj.getEmployee()




	


