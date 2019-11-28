class Employee
{
  private eno:number
  private enm:string
  
  public setEmployee(eno,enm)
  {
  	this.eno=eno
  	this.enm=enm
  }	
  public getEmployee()
  {
  	console.log("Eno : "+this.eno)
  	console.log("Enm : "+this.enm)
  }
}

var obj=new Employee()
obj.setEmployee(1001,'chiku')
obj.getEmployee()

//obj.eno=0
//obj.getEmployee()


	


