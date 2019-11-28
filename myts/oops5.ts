class Employee
{
  eno:number
  enm:number
  setEmployee(eno,enm)
  {
  	this.eno=eno
  	this.enm=enm
  }	
  getEmployee()
  {
  	console.log("Employee details")
  	console.log("Eno : "+this.eno)
  	console.log("Enm : "+this.enm)
  }
}

var obj=new Employee()

obj.setEmployee(1001,'chiku')
obj.setEmployee(1002,'piku')
obj.setEmployee(1003,'miku')

obj.getEmployee()
obj.getEmployee()
obj.getEmployee()




