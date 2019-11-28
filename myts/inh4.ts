class A
{
	Data()
	{
		console.log("class A member invoked")
	}
}
class B extends A
{
	Data()
	{
		super.Data()
		console.log("class B member invoked")
	}
}

var obj=new B()
obj.Data()

