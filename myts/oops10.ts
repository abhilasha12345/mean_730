class Employee
{
  eno:number
  enm:string
  
  constructor(eno,enm)
  {
  	this.eno=eno
  	this.enm=enm
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

var obj=new Employee(0,'null')

obj.getEmployee()

obj.setEmployee(1001,'chiku')
obj.getEmployee()




	


