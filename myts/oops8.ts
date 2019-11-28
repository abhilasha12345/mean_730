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
  	console.log("Eno : "+this.eno)
  	console.log("Enm : "+this.enm)
  }
}

var n:number=3
var obj_array=new Array(n)
for(let i=0;i<n;i++)
	obj_array[i]=new Employee()


obj_array[0].setEmployee(1001,'chiku')
obj_array[1].setEmployee(1002,'piku')
obj_array[2].setEmployee(1003,'miku')


console.log("Employee details")
for(let i=0;i<n;i++)
{
	console.log("Employee "+(i+1)+" details")	
	obj_array[i].getEmployee()
}







