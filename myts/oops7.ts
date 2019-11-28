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
var obj1=new Employee()
var obj2=new Employee()

obj.setEmployee(1001,'chiku')
obj1.setEmployee(1002,'piku')
obj2.setEmployee(1003,'miku')

obj.getEmployee()
obj1.getEmployee()
obj2.getEmployee()




